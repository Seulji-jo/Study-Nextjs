// container에는 함수, 상태, 로직 이런것만 관리

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from "react";
import { Mutation, MutationCreateBoardArgs } from '../../../commons/types/generated/types';
import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD } from './BoardWrite.queries';

const BoardWriteContainer = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    writer: '', 
    password: '',
    title: '',
    contents: '',
    youtubeUrl: '',
    zipcode: '',
    address: '',
    addressDetail: '',
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

  const [createBoard] = useMutation<Mutation, MutationCreateBoardArgs>(CREATE_BOARD)
  

  const handleInput = (e:any) => {
    setInput({...input, [e.target.name]:e.target.value});
  }

  const handleCreateBoard = async () => {
    const { writer, password, title, contents, youtubeUrl, zipcode, address, addressDetail } = input
    try {
      const {data} = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail
            }
          }
        }
      })//모든 쿼리나 뮤테이션에 들어가는 파라미터는 variables(객체이름)안에 묶여 들어간다
      console.log(data)
      router.push(`board/${data.createBoard._id}`)
    } catch(e) {
      console.log(e);
    }
  }

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
    setInput({...input, zipcode: data.zonecode, address: fullAddress })
  }

  const checkRequirements= () => {
    const { writer, password, title, contents} = input
    if (writer && password && title && contents) {
      handleCreateBoard();
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
    }
  }

  
  return <BoardWritePresenter handleInput={handleInput} inputData={input} handleAddressModal={handleAddressModal} isModal={isModal} handleComplete={handleComplete} requirements={requirements} checkRequirements={checkRequirements} />
};

export default BoardWriteContainer;