import {Main, BoardContainer, WriterSection, WriterContainer, AvatarWrapper, WriterName, Date, IconWrapper, ContentTitle} from './BoardArticle.styles';
import LinkIcon from '../../../../assets/img/linkIcon.png'
import Avatar from '../../../../assets/img/avatar.png';

const BoardArticlePresenter = () => {
  return (
    <Main>
      <BoardContainer>
        <WriterSection>
          <WriterContainer>
            <AvatarWrapper avatar={Avatar.src} />
            <div>
              <WriterName>노원두</WriterName>
              <Date datetime="2021-02-18">Date : 2021.02.18</Date>
            </div>
          </WriterContainer>
          <IconWrapper>
            <img src={LinkIcon.src} alt='link icon' />
            <img src={LinkIcon.src} alt='link icon' />
          </IconWrapper>
        </WriterSection>
      </BoardContainer>
    </Main>
  )
}

export default BoardArticlePresenter;