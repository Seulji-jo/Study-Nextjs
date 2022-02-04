import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BoardListPresenter from './BoardList.presenter';
import _ from 'lodash';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Query, QueryFetchBoardsArgs } from '../../../commons/types/generated/types';
import { BEST_BOARDS, BOARDS_COUNT, FETCH_BOARDS } from './BoardList.queries';

const BoardListContainer = () => {
  const router = useRouter();
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

  const openBoard = (id: string) => {
    router.push(`${id}`);
  }

  const handlePageArr = () => {
    const countPages = Math.ceil(boardPages?.fetchBoardsCount / 10);
    // const countPages = 3
    let pages = [];
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
    // console.log('change Page');
    countBoards()
    handlePageArr()
  }, [currPageArr])

  // 페이지 리스트 변경될때 페이지의 첫번째 숫자로 설정(n1페이지)
  useEffect(() => {
    setCurrPage(pageArr[0])
  }, [pageArr])

  // 서치하면 페이지 제일 처음으로 이동
  useEffect(() => {
    setCurrPageArr(0);
    setCurrPage(1)
  }, [search])

  // 페이지 로딩시 보드리스트, 총 보드갯수 Fetch
  useEffect(() => {
    fetchBoards()
    countBoards()
  }, [])

  // countBoards로 보드 총개수를 Fetch해오면 페이지 핸들링 함수 실행
  useEffect(() => {
    handlePageArr()
  }, [boardPages])

  const handleSearch = (e:any) => {
    // console.log(e.target.value);
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
    // console.log(search);
    // console.log(currPage);
  }

  const changeCurrPage = (pageNum: number) => {
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
    const countPages = Math.ceil(boardPages?.fetchBoardsCount / 10);
    if (pageArr.length === 5) {
      setCurrPageArr(Math.floor(countPages / 5))
    } 
  }

  return <BoardListPresenter bestBoards={bestBoards?.fetchBoardsOfTheBest} boardLists={boardLists?.fetchBoards} openBoard={openBoard} searchVal={search} handleSearch={debounce} handleDate={handleDate} pageArr={pageArr} currPage={currPage} changeCurrPage={changeCurrPage} prevPageArr={prevPageArr} nextPageArr={nextPageArr} changeStartPage={changeStartPage} changeEndPage={changeEndPage} clickSearchBtn={clickSearchBtn} />
}

export default BoardListContainer;