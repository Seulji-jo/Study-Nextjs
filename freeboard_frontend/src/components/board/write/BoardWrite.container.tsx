// container에는 함수, 상태, 로직 이런것만 관리
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Board, Mutation, MutationCreateBoardArgs, MutationUpdateBoardArgs, Query, QueryFetchBoardArgs } from '../../../commons/types/generated/types';
import { FETCH_BOARD } from '../detail/BoardDetail.queries';
import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
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
    images: [''],
    mainSetting: 'youtube'
  });
  const [isModal, setIsModal] = useState(false);
  const [requirements, setRequirements] = useState({
    writer: true,
    password: true,
    title: true,
    contents: true
  });
  const [isEditPage, setIsEditPage] = useState(false);

  console.log(router.query.id);

  const [createBoard] = useMutation<Mutation, MutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<Mutation, MutationUpdateBoardArgs>(UPDATE_BOARD)

  const {data} = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id)
    }
  });

  // method 1.
  // useEffect(() => {
  //   setInput({...input, writer: data?.fetchBoard.writer})
  // }, [data])
  // console.log(data?.fetchBoard)

  //method 2.
  // props로 data 보내기
  useEffect(() => {
    setInput(input => ({...input, ...data?.fetchBoard, boardAddress: {address: data?.fetchBoard.boardAddress.address, addressDetail: data?.fetchBoard.boardAddress.addressDetail, zipcode: data?.fetchBoard.boardAddress.zipcode}}))
    if (data) setIsEditPage(true)
  }, [data])
  
  const handleInput = (e:any) => {
    if (e.target.name === 'addressDetail') setInput({...input, boardAddress: {...input.boardAddress, addressDetail:e.target.value}});
    else setInput({...input, [e.target.name]:e.target.value});
    console.log(input)
  }

  const handleCreateBoard = async () => {
    const { writer, password, title, contents, youtubeUrl, boardAddress } = input
    try {
      const {data} = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            boardAddress
          }
        }
      })//모든 쿼리나 뮤테이션에 들어가는 파라미터는 variables(객체이름)안에 묶여 들어간다
      console.log(data)
      router.push(`board/${data.createBoard._id}`)
    } catch(e) {
      console.log(e);
    }
  }
  const handleUpdateBoard = async () => {
    try {
      const { writer, password, title, contents, youtubeUrl, boardAddress, _id } = input
      console.log(password);
      
      const {data} = await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
            youtubeUrl,
            boardAddress
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
  // 수정할 때 데이터를 변경하지 않고 수정하는 값
  // ex) 제목만 수정하고 싶다.
  // 제목 defaultValue =>
  // input.writer =>

  const handleAddressModal = () => {
    setIsModal(!isModal);
  }

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

  // 이미지 -> 이미지 서버 -> 이미지 서버에 파일을 저장
  // 이미지 -> db를 따로 관리한다.
  // boardWrite 저장하는 이미지는 '이미지주소'고, 실제 이미지는 이미지 서버에 저장한다.(AWS)
  // 1. 바로 이미지 서버에 저장 -> 서버에 무리가 간다.
  // 게시글 작성중 -> input file 이미지 선택 -> 바로 이미지 서버에 해당이미지가 저장됨 -> input file만 하고 게시글 작성 취소 -> 이래도 이미지 서버에 들어감 -> 이미지 서버에 필요없는 이미지들이 쌓임 -> 실제 이미지 서버에 등록하는 것도 boardWrite함수를 쓸 때 해야한다.
  // 2. 이미지 서버에 넣기 전에 이미지를 '미리보기'기능으로 보여줘야함.
  const onChangeImage = (e: any) => {
    const image = e.target.files;
    console.log(image);
    
    const reader = new FileReader();
    reader.onload = e => {
      console.log(e);
      
    }
    reader.readAsDataURL(image.files[0])
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

  const submitBoardForm = () => {
    if (checkRequirements()) {
      if (isEditPage) handleUpdateBoard();
      else handleCreateBoard();
    }
  }

  console.log(isEditPage);
  
  return <BoardWritePresenter handleInput={handleInput} inputData={input} handleAddressModal={handleAddressModal} isModal={isModal} handleComplete={handleComplete} requirements={requirements} submitBoardForm={submitBoardForm} onChangeImage={onChangeImage} isEditPage={isEditPage} cancelToUpdate={cancelToUpdate} />
};

export default BoardWriteContainer;