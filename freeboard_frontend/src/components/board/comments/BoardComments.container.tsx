import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Mutation, MutationCreateBoardCommentArgs } from '../../../commons/types/generated/types';
import BoardCommentsPresenter from './BoardComments.presenter'
import { CREATE_BOARD_COMMENT } from './BoardComments.queries';

const BoardCommentsContainer = () => {
  const router = useRouter();
  const {id} = router.query
  const [rating, setRating] = useState('0');
  const [comment, setComment] = useState({writer: '', password: '', contents: ''})

  const [createBoardComment] = useMutation<Mutation, MutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)

  const handleSaveRating = (e: any) => {
    console.log(e.target.id);
    setRating(e.target.id)
  }

  const handleComment = (e: any) => {
    setComment({...comment, [e.target.name]: e.target.value})
  }
  const submitComment = async () => {
    try {
      const {data} = await createBoardComment({variables: {
        createBoardCommentInput: {
          ...comment, rating: Number(rating)
        },
        boardId: String(id)
      }})
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return <BoardCommentsPresenter rating={rating} handleSaveRating={handleSaveRating} handleComment={handleComment} submitComment={submitComment} />
}

export default BoardCommentsContainer;