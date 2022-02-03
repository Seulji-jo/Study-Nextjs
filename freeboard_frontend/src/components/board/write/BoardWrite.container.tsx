// container에는 함수, 상태, 로직 이런것만 관리
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Board, Mutation, MutationCreateBoardArgs, MutationUpdateBoardArgs, MutationUploadFileArgs, Query, QueryFetchBoardArgs } from '../../../commons/types/generated/types';
import { FETCH_BOARD } from '../detail/BoardDetail.queries';
import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from './BoardWrite.queries';
import { Iinput } from './BoardWrite.types';

const BoardWriteContainer = () => {
  const router = useRouter();
  const [input, setInput] = useState<Iinput>({
    writer: '', 
    password: '',
    title: '',
    contents: '',
    youtubeUrl: '',
    boardAddress: {
      zipcode: '',
      address: '',
      addressDetail: '',
    },
    images: [],
    mainSetting: 'youtube'
  });
  const [isModal, setIsModal] = useState(false);
  const [requirements, setRequirements] = useState({
    writer: true,
    password: true,
    title: true,
    contents: true
  });
  const [imgArr, setImgArr] = useState([])
  const [isEditPage, setIsEditPage] = useState(false);

  const [createBoard] = useMutation<Mutation, MutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<Mutation, MutationUpdateBoardArgs>(UPDATE_BOARD)
  const [uploadFile] = useMutation<Mutation, MutationUploadFileArgs>(UPLOAD_FILE)

  const {data} = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id)
    }
  });

  useEffect(() => {
    setInput(input => ({...input, ...data?.fetchBoard, boardAddress: {address: data?.fetchBoard.boardAddress.address, addressDetail: data?.fetchBoard.boardAddress.addressDetail, zipcode: data?.fetchBoard.boardAddress.zipcode}}))
    if (data) setIsEditPage(true)
  }, [data])
  
  const handleInput = (e:any) => {
    if (e.target.name === 'addressDetail') setInput({...input, boardAddress: {...input.boardAddress, addressDetail:e.target.value}});
    else setInput({...input, [e.target.name]:e.target.value});
  }


  const handleAddressModal = () => {
    setIsModal(!isModal);
  }

  //* 주소 값 핸들링
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.userSelectedType === 'R') {
      fullAddress = data.roadAddress
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    } else {
      fullAddress = data.jibunAddress
    }
    setInput({...input, boardAddress: {...input.boardAddress, zipcode: data.zonecode, address: fullAddress} })
  }

  const removeImg = (delImg: string) => {
    const changeImgs = imgArr.filter(img => img !== delImg);
    setImgArr(changeImgs)
  }

  const onChangeImage = (e: any) => {
    const fileArr = e.target.files;
    
    let fileURLs = []
    for (let i = 0; i < fileArr.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // fileURLs.push(reader.result);
        fileURLs.push(e.target.result);
        // console.log(e.target.result);
        // console.log(reader.result);
        setImgArr([...fileURLs])
      }
      reader.readAsDataURL(fileArr[i])
    }
    
    setInput({...input, images: fileURLs})
  }

  const checkRequirements= () => {
    const { writer, password, title, contents} = input
    if (writer && password && title && contents) {
      return true;
    } else {
      setRequirements({
        writer: Boolean(writer),
        password: Boolean(password),
        title: Boolean(title),
        contents: Boolean(contents),
      });
      const rootElement = document.documentElement;
      // For Safari
      document.body.scrollTop = 140;

      // For Chrome, Firefox, IE and Opera
      rootElement.scrollTo({
        top: 200,
        behavior: "smooth"
      })
      return false;
    }
  }

  const uploadImgServer = async () => {
    try {
      const results = await Promise.all(
        input.images.map((file) => uploadFile({variables: {file}}))
      )
      const images = results.map(res => res.data.uploadFile.url);
      setInput({...input, images: images})
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreateBoard = async () => {
    // const { writer, password, title, contents, youtubeUrl, boardAddress } = input
    try {
      const {data} = await createBoard({
        variables: {
          createBoardInput: {
            ...input
          }
        }
      })//모든 쿼리나 뮤테이션에 들어가는 파라미터는 variables(객체이름)안에 묶여 들어간다
      alert('게시글 등록 성공');
      router.push(`board/${data.createBoard._id}`)
    } catch(e) {
      console.log(e);
    }
  }
  const handleUpdateBoard = async () => {
    try {
      const { password, title, contents, youtubeUrl, boardAddress, _id, images } = input
      console.log(password);
      
      const {data} = await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
            youtubeUrl,
            boardAddress,
            images
          },
          password,
          boardId:_id
        }
      })
      console.log(router.pathname);
      router.push({
        pathname: '/board/[id]',
        query: {...router.query, id: data.updateBoard._id},
      })
    } catch (error) {
      console.log(error);
    }
  }
  const cancelToUpdate = () => {
    router.back()
  }

  const submitBoardForm = async () => {
    if (checkRequirements()) {
      if (input.images.length) uploadImgServer();
      if (isEditPage) handleUpdateBoard();
      else handleCreateBoard();
    }
  }

  return <BoardWritePresenter handleInput={handleInput} inputData={input} handleAddressModal={handleAddressModal} isModal={isModal} handleComplete={handleComplete} requirements={requirements} submitBoardForm={submitBoardForm} imgArr={imgArr} removeImg={removeImg} onChangeImage={onChangeImage} isEditPage={isEditPage} cancelToUpdate={cancelToUpdate} />
};

export default BoardWriteContainer;