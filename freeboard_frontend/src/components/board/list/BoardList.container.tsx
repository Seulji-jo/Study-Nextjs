import { useState } from 'react';
import BoardListPresenter from './BoardList.presenter';
import _ from 'lodash';
import { useQuery } from '@apollo/client';
import { Query, QueryFetchBoardsArgs } from '../../../commons/types/generated/types';
import { BEST_BOARDS, FETCH_BOARDS } from './BoardList.queries';

const BoardListContainer = () => {
  const [input, setInput] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [pageArr, setPageArr] = useState([]);

  const {data:bestBoards} = useQuery<Query>(BEST_BOARDS);
  const {data:boardLists} = useQuery<Query, QueryFetchBoardsArgs>(FETCH_BOARDS);
  console.log(boardLists);
  

  // 배열의 갯수는 전체 페이지 수 / 10 했을 때 나머지

  // 페이지네이션
  // 1. 전체 페이지 수 -> 백엔드가 따로 만들어 둠 (FETCH_BOARDS_COUNT)
  // 2. 1 ~ 10 / 전체 페이지 수가 14일 경우 -> 1~10 / 11~14
  // 3. 화살표 2개 -> 1개는 1페이지씩 넘어감, 나머지 1개는 10페이지씩 넘어감.
  // 4. 전체페이지가 14 / 현재페이지가 7 => 10페이지 넘어가는 버튼 누르면 => 11 => 10페이지 넘어가는 버튼 => 14 => 10페이지 넘어가는 버튼 => alert('마지막 페이지 입니다.') => 초과 x
  // 5.마찬가지로 현제페이지 7 => 10p 전으로 가는 버튼 => 1페이지로 이동 => 한번 더 누르면 => alert('첫페이지 입니다.') => -로 안가면됨
  // rightArrowPage함수, leftArrowPage함수 필요
  // 6. 현재페이지 숫자는 노란색으로 변경

  // Debounce함수 -> lodash이용
  // onChange -> 타자 하나하나 입력할때마다 바로바로 실행
  // -> react 특성상 계속 컨테이너를 업데이트 (상태 변화로 인한 업데이트
  // debounce -> 마지막 한 번만 함수를 실행하도록 도와줌
  // 서치에 주로 쓰인다. -> 서버를 계속 호출하지 않기 위해

  const handleInput = (e:any) => {
    console.log(e)
    setInput({...input, [e.target.name]: e.target.value});
  }
  
  const debounce = _.debounce(handleInput, 500) // 0.5초동안 아무런 실행이 없으면 실행
  // const debounce = _.debounce((e) => {setInput(~)}, 500)
  
  return <BoardListPresenter handleInput={debounce} bestBoards={bestBoards?.fetchBoardsOfTheBest} boardLists={boardLists?.fetchBoards} />
}

export default BoardListContainer;