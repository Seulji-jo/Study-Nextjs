import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Mutation, MutationCreateBoardCommentArgs, Query, QueryFetchBoardCommentsArgs } from '../../../commons/types/generated/types';
import BoardCommentsPresenter from './BoardComments.presenter'
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from './BoardComments.queries';

const BoardCommentsContainer = () => {
  const router = useRouter();
  const {id} = router.query
  const [rating, setRating] = useState('0');
  const [comment, setComment] = useState({writer: '', password: '', contents: ''});

  const [createBoardComment] = useMutation<Mutation, MutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
  
  const {data:commentLists, refetch, fetchMore} = useQuery<Query>(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 0,
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
      setComment({writer: '', password: '', contents: ''});
      setRating('0')
      refetch();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const loadMore = () => {
    // 10개 미만인 경우 쿼리를 돌릴 필요가 없어서 -> 마지막 페이지에서 실행될 필요가 없어서 빈 리턴
    if (commentLists?.fetchBoardComments.length % 10 !== 0) return;
    fetchMore({ // fetchMore: fetch를 더하겠다, fetchboardComnt에서 불러와 자동적으로 페치보드커멘츠가 실행이 된다.
      variables: { // 페치보드커멘츠와 인자가 같다.
        page: Math.floor(commentLists?.fetchBoardComments.length / 10) + 1
      },
      // updateQuery: commentLists?.fetchBoardComments의 값을 업데이트 해주는 역할
      // commentLists?.fetchBoardComments의 초기값은 0페이지
      updateQuery: (prev, {fetchMoreResult}) => ({ //prev: 이전값/기존값, fetchMoreResult: fetchMore로 불러온 값은 fetchMoreResult에 들어온다.
        fetchBoardComments: [
          ...prev.fetchBoardComments,
          ...fetchMoreResult.fetchBoardComments
        ]
      })
    });
  }
  return <BoardCommentsPresenter rating={rating} handleSaveRating={handleSaveRating} comment={comment} handleComment={handleComment} submitComment={submitComment} commentLists={commentLists?.fetchBoardComments}loadMore={loadMore} refetch={refetch} />
}

export default BoardCommentsContainer;