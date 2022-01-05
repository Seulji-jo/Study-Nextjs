import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Query, QueryFetchBoardArgs } from '../../../commons/types/generated/types';
import BoardDetailPresenter from "./BoardDetail.presenter";
import { FETCH_BOARD } from './BoardDetail.queries';

const BoardDetailContainer = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false)

  const {data} = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id)
    }
  }); // parameter가 있는경우는 두번째 parameter에 중괄호 넣고 variables를 넣는다
  
  const handleHover = () => {
    setIsHover(!isHover)
  }
  return <BoardDetailPresenter data={data?.fetchBoard} isHover={isHover} handleHover={handleHover}  />
}

export default BoardDetailContainer;