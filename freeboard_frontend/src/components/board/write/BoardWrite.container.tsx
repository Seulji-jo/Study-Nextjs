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
  
  return <BoardWritePresenter handleInput={handleInput} inputData={input} handleCreateBoard={handleCreateBoard} />
};

export default BoardWriteContainer;