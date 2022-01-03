import Image from 'next/image'
import {Main, BoardContainer, WriterSection, WriterContainer, AvatarWrapper, WriterName, Date, IconWrapper, IconContainer, HoverMsg, ContentSection, ContentTitle, ContentTxt, VideoContainer, EvaluationSection, EvaluationBox, TextContainer, ButtonWrapper, Button} from './BoardDetail.styles';
import LinkIcon from '../../../../assets/img/linkIcon.png'
import PlaceIcon from '../../../../assets/img/place.png'
import Avatar from '../../../../assets/img/avatar.png';
import Like from '../../../../assets/img/like.png'
import Dislike from '../../../../assets/img/dislike.png'

const BoardArticlePresenter = ({isHover, handleHover}) => {
  return (
    <Main>
      <BoardContainer>
        {/* <HoverMsg>
          <p>서울특별시 영등포구 양산로 200</p>
          <p>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</p>
        </HoverMsg> */}
        <WriterSection>
          <WriterContainer>
            <AvatarWrapper avatar={Avatar.src} />
            <div>
              <WriterName>노원두</WriterName>
              <Date dateTime="2021-02-18">Date : 2021.02.18</Date>
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
          {isHover && (<HoverMsg>
            <p>서울특별시 영등포구 양산로 200</p>
            <p>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</p>
          </HoverMsg>)}
        </WriterSection>
        <ContentSection>
          <ContentTitle>
            게시글 제목입니다.
          </ContentTitle>
          <Image src="https://dummyimage.com/996x480/f2f2f2/000000" alt="img1" width={996} height={480} />
          <ContentTxt>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </ContentTxt>
          <VideoContainer>
            {/* <video controls width="250">
              <source src="/media/cc0-videos/flower.webm" type="video/webm" />
              <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video> */}
            <iframe width="486" height="240" src="https://www.youtube.com/embed/7_HuJ6VsRho" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </VideoContainer>
        </ContentSection>
        <EvaluationSection>
          <EvaluationBox>
            <Image src={Like.src} alt="like image" width='20px' height={18} />
            <TextContainer color='#FFD600'>1920</TextContainer>
          </EvaluationBox>
          <EvaluationBox>
            <Image src={Dislike.src} alt="dislike img" width='20px' height={18} />
            <TextContainer>1920</TextContainer>
          </EvaluationBox>
        </EvaluationSection>
      </BoardContainer>
      <ButtonWrapper>
        <Button padding='14px 60px' bgColor='#fff' color='#333' border='1px solid #bdbdbd'>목록으로</Button>
        <Button padding='14px 60px' bgColor='#fff' color='#333' border='1px solid #bdbdbd'>수정하기</Button>
        <Button padding='14px 60px' bgColor='#fff' color='#333' border='1px solid #bdbdbd'>삭제하기</Button>
      </ButtonWrapper>
    </Main>
  )
}

export default BoardArticlePresenter;