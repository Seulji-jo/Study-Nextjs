import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import 'antd/dist/antd.css';
import Image from 'next/image'

import { Main, BoardContainer, BestBoardSection, ContentTitle, BestBoardLists, BestBoardContainer, BestBoard, BestBoardImg, BestBoardData, Text, BestBoardUserWrapper, BbUserInfo, BbUserAvatar, LikeWrapper, LikeIcon, BoardListSection, SearchContainer, SearchBox, SearchIcon, SearchInput, Button, BoardListTable, TableTitle, BoardTitleList, TableData, PaginationContainer, Pagination, CreationBtnWrapper} from './BoardList.styles'
import Avatar from '../../../../assets/img/avatar.png'
import Like from '../../../../assets/img/like.png'
import Image1 from '../../../../assets/img/img1.png'
import Image2 from '../../../../assets/img/img2.png'
import Image3 from '../../../../assets/img/img3.png'
import Image4 from '../../../../assets/img/img4.png'
import Search from '../../../../assets/img/search.png'
import Prev from '../../../../assets/img/prev.png'
import Next from '../../../../assets/img/next.png'
import Write from '../../../../assets/img/writeIcon.png'
import { IboardListProps } from './BoardList.types'

const BoardListPresenter:React.FC<IboardListProps> = ({handleInput}) => {
  return (
    <Main>
      <BoardContainer>
        <BestBoardSection>
          <ContentTitle>베스트 게시글</ContentTitle>
          <BestBoardLists>
            <BestBoardContainer>
              <BestBoard>
              <BestBoardImg src={Image1.src} alt='img1' />
                <BestBoardData>
                  <Text fontSize='16px'>게시물 제목입니다.</Text>
                  <BestBoardUserWrapper>
                    <div>
                      <BbUserInfo>
                        <BbUserAvatar img={Avatar.src} />
                        <Text fontSize='14px'>노원두</Text>
                      </BbUserInfo>
                      <Text fontSize='12px' color='#828282'>Date : 2021.02.18</Text>
                    </div>
                    <LikeWrapper>
                      <LikeIcon src={Like.src} alt='like icon' />
                      <Text fontSize='14px'>365</Text>
                    </LikeWrapper>
                  </BestBoardUserWrapper>
                </BestBoardData>
              </BestBoard>
            </BestBoardContainer>
            <BestBoardContainer>
              <BestBoard>
              <BestBoardImg src={Image2.src} alt='img2' />
                <BestBoardData>
                  <Text fontSize='16px'>게시물 제목입니다.</Text>
                  <BestBoardUserWrapper>
                    <div>
                      <BbUserInfo>
                        <BbUserAvatar img={Avatar.src} />
                        <Text fontSize='14px'>노원두</Text>
                      </BbUserInfo>
                      <Text fontSize='12px' color='#828282'>Date : 2021.02.18</Text>
                    </div>
                    <LikeWrapper>
                      <LikeIcon src={Like.src} alt='like icon' />
                      <Text fontSize='14px'>365</Text>
                    </LikeWrapper>
                  </BestBoardUserWrapper>
                </BestBoardData>
              </BestBoard>
            </BestBoardContainer>
            <BestBoardContainer>
              <BestBoard>
              <BestBoardImg src={Image3.src} alt='img3' />
                <BestBoardData>
                  <Text fontSize='16px'>게시물 제목입니다.</Text>
                  <BestBoardUserWrapper>
                    <div>
                      <BbUserInfo>
                        <BbUserAvatar img={Avatar.src} />
                        <Text fontSize='14px'>노원두</Text>
                      </BbUserInfo>
                      <Text fontSize='12px' color='#828282'>Date : 2021.02.18</Text>
                    </div>
                    <LikeWrapper>
                      <LikeIcon src={Like.src} alt='like icon' />
                      <Text fontSize='14px'>365</Text>
                    </LikeWrapper>
                  </BestBoardUserWrapper>
                </BestBoardData>
              </BestBoard>
            </BestBoardContainer>
            <BestBoardContainer>
              <BestBoard>
              <BestBoardImg src={Image4.src} alt='img4' />
                <BestBoardData>
                  <Text fontSize='16px'>게시물 제목입니다.</Text>
                  <BestBoardUserWrapper>
                    <div>
                      <BbUserInfo>
                        <BbUserAvatar img={Avatar.src} />
                        <Text fontSize='14px'>노원두</Text>
                      </BbUserInfo>
                      <Text fontSize='12px' color='#828282'>Date : 2021.02.18</Text>
                    </div>
                    <LikeWrapper>
                      <LikeIcon src={Like.src} alt='like icon' />
                      <Text fontSize='14px'>365</Text>
                    </LikeWrapper>
                  </BestBoardUserWrapper>
                </BestBoardData>
              </BestBoard>
            </BestBoardContainer>
          </BestBoardLists>
        </BestBoardSection>
        <BoardListSection>
          <SearchContainer>
            <SearchBox>
              <SearchIcon img={Search.src}></SearchIcon>
              <SearchInput placeholder='제목을 검색해주세요' onChange={handleInput} name='search' />
            </SearchBox>
            <Space className='search-date--wrapper'>
              <RangePicker className='search-date' placeholder={['YYYY. MM.DD', 'YYYY. MM.DD']} format='YYYY. MM.DD' suffixIcon={null} />
            </Space>
            <Button>검색하기</Button>
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
                <tr>
                    <TableData>10</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>9</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>8</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>7</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>6</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>5</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>4</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>3</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>2</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
                <tr>
                    <TableData>1</TableData>
                    <TableData>게시물 제목입니다.</TableData>
                    <TableData>노원두</TableData>
                    <TableData>2020.09.28</TableData>
                </tr>
            </tbody>
          </BoardListTable>
          <PaginationContainer>
            <li>
              <Image src={Prev} alt='preview' />
            </li>
            <li>
              <Pagination>
                <div onClick={handleInput}>1</div>
                <div className='active' onClick={handleInput}>2</div>
              </Pagination>
            </li>
            <li>
              <Image src={Next} alt='next' />
            </li>
          </PaginationContainer>
          <CreationBtnWrapper>
            <Button backgroundColor='#fff' color='#333' border='1px solid #F2F2F2'>
              <Image src={Write} alt='write icon' width={16} height={16} />
              <span>게시물 등록하기</span>
            </Button>
          </CreationBtnWrapper>
        </BoardListSection>
      </BoardContainer>
    </Main>
  )
}

export default BoardListPresenter