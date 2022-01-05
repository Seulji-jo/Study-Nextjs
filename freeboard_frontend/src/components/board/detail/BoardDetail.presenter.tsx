import Image from 'next/image'
import dayjs from 'dayjs';
import {Main, BoardContainer, WriterSection, WriterContainer, AvatarWrapper, WriterName, Date, IconWrapper, IconContainer, HoverMsg, ContentSection, ContentTitle, ContentTxt, VideoContainer, EvaluationSection, EvaluationBox, TextContainer, ButtonWrapper, Button} from './BoardDetail.styles';
import LinkIcon from '../../../../assets/img/linkIcon.png'
import PlaceIcon from '../../../../assets/img/place.png'
import Avatar from '../../../../assets/img/avatar.png';
import Like from '../../../../assets/img/like.png'
import Dislike from '../../../../assets/img/dislike.png'

import ReactPlayer from 'react-player'

const BoardDetailPresenter = ({data, isHover, handleHover, handleLikeBoard, handleDislikeBoard, handleDeleteBoard}) => {

  return (
    <Main>
      <BoardContainer>
        <WriterSection>
          <WriterContainer>
            <AvatarWrapper avatar={Avatar.src} />
            <div>
              <WriterName>{data?.writer}</WriterName>
              <Date dateTime="2021-02-18">
                Date : {dayjs(data?.createdAt).format('YYYY.MM.DD')}
              </Date>
            </div>
          </WriterContainer>
          <IconWrapper>
            <IconContainer>
              <Image src={LinkIcon} alt='link icon' />
            </IconContainer>
            <IconContainer>
              <Image src={PlaceIcon} alt='place icon' onMouseEnter={handleHover} onMouseLeave={handleHover} />
            </IconContainer>
          </IconWrapper>
          {isHover && data?.boardAddress.address && (<HoverMsg>
            {/* <p>서울특별시 영등포구 양산로 200</p>
            <p>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</p> */}
            <p>{data?.boardAddress.address}</p>
            <p>{data?.boardAddress.addressDetail}</p>
          </HoverMsg>)}
        </WriterSection>
        <ContentSection>
          <ContentTitle>
            {data?.title}
          </ContentTitle>
          <Image src="https://dummyimage.com/996x480/f2f2f2/000000" alt="img1" width={996} height={480} />
          <ContentTxt>
            {data?.contents}
          </ContentTxt>
          {data?.youtubeUrl && (<VideoContainer>
            <ReactPlayer url={data?.youtubeUrl} width="486px" height="240px" />
          </VideoContainer>)}
        </ContentSection>
        <EvaluationSection>
          <EvaluationBox onClick={handleLikeBoard}>
            <Image src={Like} alt="like image" width='20px' height={18} />
            <TextContainer color='#FFD600'>{data?.likeCount}</TextContainer>
          </EvaluationBox>
          <EvaluationBox onClick={handleDislikeBoard}>
            <Image src={Dislike} alt="dislike img" width='20px' height={18} />
            <TextContainer>{data?.dislikeCount}</TextContainer>
          </EvaluationBox>
        </EvaluationSection>
      </BoardContainer>
      <ButtonWrapper>
        <Button padding='14px 60px' bgColor='#fff' color='#333' border='1px solid #bdbdbd'>목록으로</Button>
        <Button padding='14px 60px' bgColor='#fff' color='#333' border='1px solid #bdbdbd'>수정하기</Button>
        <Button padding='14px 60px' bgColor='#fff' color='#333' border='1px solid #bdbdbd' onClick={handleDeleteBoard}>삭제하기</Button>
      </ButtonWrapper>
    </Main>
  )
}

export default BoardDetailPresenter;