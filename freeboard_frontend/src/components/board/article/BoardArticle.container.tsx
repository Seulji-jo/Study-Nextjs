import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Query, QueryFetchBoardArgs } from '../../../commons/types/generated/types';
import BoardArticlePresenter from "./BoardArticle.presenter";
import { FETCH_BOARD } from './BoardArticle.queries';

const BoardArticleContainer = () => {
  const router = useRouter();

  const {data} = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id)
    }
  }); // parameter가 있는경우는 두번째 parameter에 중괄호 넣고 variables를 넣는다
  console.log(data);
  
  return <BoardArticlePresenter />
}

export default BoardArticleContainer;