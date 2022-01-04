// container에는 함수, 상태, 로직 이런것만 관리

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from "react";
import { Mutation, MutationCreateBoardArgs } from '../../../commons/types/generated/types';
import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD } from './BoardWrite.queries';

const BoardWriteContainer = () => {
  const [input, setInput] = useState({
    writer: '', 
    password: '',
    title: '',
    contents: ''
  });
  const [isModal, setIsModal] = useState(false);

  const router = useRouter();
  const [createBoard] = useMutation<Mutation, MutationCreateBoardArgs>(CREATE_BOARD)
  

  const handleInput = (e:any) => {
    setInput({...input, [e.target.name]:e.target.value});
  }

  const handleCreateBoard = async () => {
    const { writer, password, title, contents } = input
    try {
      const {data} = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents
          }
        }
      })//모든 쿼리나 뮤테이션에 들어가는 파라미터는 variables(객체이름)안에 묶여 들어간다
      console.log(data)
      router.push(`board/${data.createBoard._id}`)
    } catch(e) {
      console.log(e);
    }
  }

  const handleModal = () => {
    setIsModal(!isModal);
  }

  const handleComplete = (data) => {
    console.log(data);
    handleModal();
    
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  
  return <BoardWritePresenter handleInput={handleInput} inputData={input} handleCreateBoard={handleCreateBoard} handleModal={handleModal} isModal={isModal} handleComplete={handleComplete} />
};

export default BoardWriteContainer;