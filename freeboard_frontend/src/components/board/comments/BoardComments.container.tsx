import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Mutation, MutationCreateBoardCommentArgs, Query, QueryFetchBoardCommentsArgs } from '../../../commons/types/generated/types';
import BoardCommentsPresenter from './BoardComments.presenter'
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './BoardComments.queries';

const BoardCommentsContainer = () => {
  const router = useRouter();
  const {id} = router.query
  const [rating, setRating] = useState('0');
  const [comment, setComment] = useState({writer: '', password: '', contents: ''});

  const [createBoardComment] = useMutation<Mutation, MutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
  const {data:commentLists} = useQuery<Query>(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: String(id)
    }
  })

  const handleSaveRating = (e: any) => {
    console.log(e.target.id);
    setRating(e.target.id)
  }

  const handleComment = ({target}: any) => {
    // setComment({...comment, [target.name]: target.value})
    // if (target.name === 'contents') {
    //   if (comment.contents.length >= 5) {
    //     const contentsVal = comment.contents.substring(0, 5);
    //     setComment({...comment, contents: contentsVal})
    //   }
    // } 
    if (target.name === 'contents') {
      if (comment.contents.length < 100) {
        setComment({...comment, contents: target.value})
      }
    } else {
      setComment({...comment, [target.name]: target.value})
    }
    
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
  return <BoardCommentsPresenter rating={rating} handleSaveRating={handleSaveRating} comment={comment} handleComment={handleComment} submitComment={submitComment} commentLists={commentLists?.fetchBoardComments} />
}

export default BoardCommentsContainer;