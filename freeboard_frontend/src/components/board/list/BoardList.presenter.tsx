import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import 'antd/dist/antd.css';
import Image from 'next/image'

import { Main, BoardContainer, BestBoardSection, ContentTitle, BestBoardLists, BestBoardContainer, BestBoard, BestBoardImg, BestBoardData, Text, BestBoardUserWrapper, BbUserInfo, BbUserAvatar, LikeWrapper, LikeIcon, BoardListSection, SearchContainer, SearchBox, SearchIcon, SearchInput, Button, BoardListTable, TableTitle, BoardTitleList, TableData, PaginationContainer, Pagination, PageBtn, CreationBtnWrapper} from './BoardList.styles'
import Avatar from '../../../../assets/img/avatar.png'
import Like from '../../../../assets/img/like.png'
import Image1 from '../../../../assets/img/img1.png'
import Search from '../../../../assets/img/search.png'
import Prev from '../../../../assets/img/prev.png'
import Next from '../../../../assets/img/next.png'
import Write from '../../../../assets/img/writeIcon.png'
import { IboardListProps } from './BoardList.types'
import dayjs from 'dayjs';
import Link from 'next/link';

const BoardListPresenter:React.FC<IboardListProps> = ({bestBoards, boardLists, openBoard, searchVal, handleSearch, handleDate, pageArr, currPage, changeCurrPage, prevPageArr, nextPageArr, changeStartPage, changeEndPage, clickSearchBtn}) => {
  return (
    <Main>
      <BoardContainer>
        <BestBoardSection>
          <ContentTitle>베스트 게시글</ContentTitle>
          <BestBoardLists>
            {bestBoards?.map(board => (
            <BestBoardContainer key={board._id}>
              <BestBoard>
                <BestBoardImg className='change--page' src={Image1.src} alt='best board image' onClick={() => openBoard(board._id)} />
                <BestBoardData>
                  <Text className='change--page' fontSize='16px' onClick={() => openBoard(board._id)}>{board.title}</Text>
                  <BestBoardUserWrapper>
                    <div>
                      <BbUserInfo>
                        <BbUserAvatar img={Avatar.src} />
                        <Text fontSize='14px'>{board.writer}</Text>
                      </BbUserInfo>
                      <Text fontSize='12px' color='#828282'>Date : {dayjs(board.updatedAt).format('YYYY.MM.DD')}</Text>
                    </div>
                    <LikeWrapper>
                      <LikeIcon src={Like.src} alt='like icon' />
                      <Text fontSize='14px'>{board.likeCount}</Text>
                    </LikeWrapper>
                  </BestBoardUserWrapper>
                </BestBoardData>
              </BestBoard>
            </BestBoardContainer>
            ))}
          </BestBoardLists>
        </BestBoardSection>
        <BoardListSection>
          <SearchContainer>
            <SearchBox>
              <SearchIcon img={Search.src}></SearchIcon>
              <SearchInput placeholder='제목을 검색해주세요' defaultValue={searchVal} onChange={handleSearch} />
            </SearchBox>
            <Space className='search-date--wrapper'>
              <RangePicker className='search-date' placeholder={['YYYY.MM.DD', 'YYYY.MM.DD']} format='YYYY.MM.DD' onChange={handleDate} suffixIcon={null} />
            </Space>
            <Button onClick={clickSearchBtn}>검색하기</Button>
          </SearchContainer>
          <BoardListTable>
            <thead>
                <tr>
                    <TableTitle>번호</TableTitle>
                    <BoardTitleList>제목</BoardTitleList>
                    <TableTitle>작성자</TableTitle>
                    <TableTitle>날짜</TableTitle>
                </tr>
            </thead>
            <tbody>
                {boardLists?.map((list, i) => (<tr key={list._id}>
                    <TableData>{boardLists.length - i}</TableData>
                    <TableData className='table--title' onClick={() => openBoard(list._id)}>{list.title}</TableData>
                    <TableData>{list.writer}</TableData>
                    <TableData>{dayjs(list.updatedAt).format('YYYY.MM.DD')}</TableData>
                </tr>))}
            </tbody>
          </BoardListTable>
          <PaginationContainer>
            <li>
              <PageBtn disabled={!prevPageArr} onClick={changeStartPage}>
                <Image src={Prev} alt='preview' />
                <Image src={Prev} alt='preview' />
              </PageBtn>
            </li>
            <li>
              <PageBtn disabled={!prevPageArr} onClick={prevPageArr}>
                <Image src={Prev} alt='preview' />
              </PageBtn>
            </li>
            <li>
              <Pagination>
                {/* <li onClick={handleInput}>1</li>
                <li className='active' onClick={handleInput}>2</li> */}
                {pageArr.map(page => <li key={page} className={page === currPage ? 'active' : ''} onClick={() => changeCurrPage(page)}>{page}</li>)}
              </Pagination>
            </li>
            <li>
              <PageBtn disabled={!nextPageArr} onClick={nextPageArr}>
                <Image src={Next} alt='next' />
              </PageBtn>
            </li>   
            <li>
              <PageBtn disabled={!nextPageArr} onClick={changeEndPage}>
                <Image src={Next} alt='next' />
                <Image src={Next} alt='next' />
              </PageBtn>
            </li>
          </PaginationContainer>
          <CreationBtnWrapper>
            <Button backgroundColor='#fff' color='#333' border='1px solid #F2F2F2'>
              {/* <Image src={Write} alt='write icon' width={16} height={16} /> */}
              <Text fontSize={'1.4rem'}><Link href='/board'>게시물 등록하기</Link></Text>
            </Button>
          </CreationBtnWrapper>
        </BoardListSection>
      </BoardContainer>
    </Main>
  )
}

export default BoardListPresenter