import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Mutation, MutationDislikeBoardArgs, MutationLikeBoardArgs, Query, QueryFetchBoardArgs } from '../../../commons/types/generated/types';
import BoardDetailPresenter from "./BoardDetail.presenter";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './BoardDetail.queries';

const BoardDetailContainer = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false)

  const {data, refetch} = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id)
    }
  }); // parameter가 있는경우는 두번째 parameter에 중괄호 넣고 variables를 넣는다
  
  const [likeBoard] = useMutation<Mutation, MutationLikeBoardArgs>(LIKE_BOARD)
  const [dislikeBoard] = useMutation<Mutation, MutationDislikeBoardArgs>(DISLIKE_BOARD)
  
  const handleHover = () => {
    setIsHover(!isHover)
  }

  const handleLikeBoard = async () => {
    try {
      const {data} = await likeBoard({
        variables: {
          boardId: String(router.query.id)
        }
      })
      console.log(data);
      refetch();
    } catch (e) {
      console.log(e)
    }
  }
  const handleDislikeBoard = async () => {
    try {
      const {data} = await dislikeBoard({
        variables: {
          boardId: String(router.query.id)
        }
      })
      console.log(data);
      refetch();
    } catch (e) {
      console.log(e)
    }
  }
  return <BoardDetailPresenter data={data?.fetchBoard} isHover={isHover} handleHover={handleHover} handleLikeBoard={handleLikeBoard} handleDislikeBoard={handleDislikeBoard}  />
}

export default BoardDetailContainer;