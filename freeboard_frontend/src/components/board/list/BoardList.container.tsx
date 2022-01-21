import { useCallback, useEffect, useState } from 'react';
import BoardListPresenter from './BoardList.presenter';
import _ from 'lodash';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Query, QueryFetchBoardsArgs } from '../../../commons/types/generated/types';
import { BEST_BOARDS, BOARDS_COUNT, FETCH_BOARDS } from './BoardList.queries';

const BoardListContainer = () => {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [pageArr, setPageArr] = useState([1]);
  const [currPageArr, setCurrPageArr] = useState<number>(0)

  const {data:bestBoards} = useQuery<Query>(BEST_BOARDS);
  const [fetchBoards, {data:boardLists}] = useLazyQuery<Query, QueryFetchBoardsArgs>(FETCH_BOARDS, {
    variables: {
      startDate: date[0],
      endDate: date[1],
      search:search,
      page: currPage
    }
  });
  const [countBoards, {data:boardPages}] = useLazyQuery<Query>(BOARDS_COUNT, {
    variables: {
      startDate: date[0],
      endDate: date[1],
      search:search
    }
  })

  const handlePageArr = () => {
    const countPages = Math.ceil(boardPages?.fetchBoardsCount / 10);
    // const countPages = 3
    let pages = [1];
    let start = currPageArr * 5 + 1; 
    const remaining = countPages - (currPageArr * 5 + 5);
    let end = remaining <= 0 ? countPages : countPages - remaining;
    for (let i = start; i <= end; i++) {
      pages = [...pages, i]
    }
    setPageArr(pages)
  }
  // 페이지 리스트 페이지바뀔때 
  useEffect(() => {
    console.log('change Page');
    countBoards()
    handlePageArr()
  }, [currPageArr])

  // 페이지 리스트 변경될때 페이지의 첫번째 숫자로 설정(n1페이지)
  useEffect(() => {
    console.log('페이지배열변경된후');
    setCurrPage(pageArr[0])
  }, [pageArr])

  // 서치하면 페이지 제일 처음으로 이동
  // useEffect(() => {
  //   setCurrPageArr(0);
  //   setCurrPage(1)
  // }, [search])

  // 페이지 로딩시 보드리스트, 총 보드갯수 Fetch
  useEffect(() => {
    console.log('onload');
    
    fetchBoards()
    countBoards()
  }, [])

  // countBoards로 보드 총개수를 Fetch해오면 페이지 핸들링 함수 실행
  // useEffect(() => {
  //   console.log('check');
  //   handlePageArr()
  // }, [boardPages])
  
  // 배열의 갯수는 전체 페이지 수 / 5 했을 때 나머지

  // 페이지네이션
  // 1. 전체 페이지 수 -> 백엔드가 따로 만들어 둠 (FETCH_BOARDS_COUNT)
  // 2. 1 ~ 5 / 전체 페이지 수가 14일 경우 -> 1~5 / 11~14
  // 3. 화살표 2개 -> 1개는 1페이지씩 넘어감, 나머지 1개는 5페이지씩 넘어감.
  // 4. 전체페이지가 14 / 현재페이지가 7 => 5페이지 넘어가는 버튼 누르면 => 11 => 5페이지 넘어가는 버튼 => 14 => 5페이지 넘어가는 버튼 => alert('마지막 페이지 입니다.') => 초과 x
  // 5.마찬가지로 현제페이지 7 => 5p 전으로 가는 버튼 => 1페이지로 이동 => 한번 더 누르면 => alert('첫페이지 입니다.') => -로 안가면됨
  // rightArrowPage함수, leftArrowPage함수 필요
  // 6. 현재페이지 숫자는 노란색으로 변경

  // Debounce함수 -> lodash이용
  // onChange -> 타자 하나하나 입력할때마다 바로바로 실행
  // -> react 특성상 계속 컨테이너를 업데이트 (상태 변화로 인한 업데이트
  // debounce -> 마지막 한 번만 함수를 실행하도록 도와줌
  // 서치에 주로 쓰인다. -> 서버를 계속 호출하지 않기 위해  

  const handleSearch = (e:any) => {
    console.log(e.target.value);
    
    e.preventDefault();
    setSearch(e.target.value); 
  }
  const debounce = _.debounce(handleSearch, 500) // 0.5초동안 아무런 실행이 없으면 실행
  // const debounce = _.debounce((e) => {setInput(~)}, 500)
  const handleDate = (dates, dateStrings) => {
    const newDateForm = dateStrings.map(date => {
      const [year, month, day] = date.split('.')
      return new Date(Date.UTC(year, month, day)).toUTCString()
    })
    setDate(newDateForm)
  }
    
  const clickSearchBtn = () => {
    console.log(search);
    console.log(currPage);
  }

  const changeCurrPage = (pageNum: number) => {
    console.log(pageNum);
    
    setCurrPage(pageNum)
  }
  const prevPageArr = () => {
    if (currPageArr > 0) {
      setCurrPageArr(currPageArr - 1)
      return true;
    } else {
      return false;
    }
  }
  const changeStartPage = () => {
    if (currPageArr > 0) {
      setCurrPageArr(0)
    } 
  }
  const nextPageArr = () => {
    if (pageArr.length === 5) {
      setCurrPageArr(currPageArr + 1)
      return true;
    } else {
      return false;
    }
  }
  const changeEndPage = () => {
    console.log('end');
    
    const countPages = Math.ceil(boardPages?.fetchBoardsCount / 10);
    if (pageArr.length === 5) {
      setCurrPageArr(Math.floor(countPages / 5))
    } 
  }

  return <BoardListPresenter bestBoards={bestBoards?.fetchBoardsOfTheBest} boardLists={boardLists?.fetchBoards} searchVal={search} handleSearch={debounce} handleDate={handleDate} pageArr={pageArr} currPage={currPage} changeCurrPage={changeCurrPage} prevPageArr={prevPageArr} nextPageArr={nextPageArr} changeStartPage={changeStartPage} changeEndPage={changeEndPage} clickSearchBtn={clickSearchBtn} />
}

export default BoardListContainer;