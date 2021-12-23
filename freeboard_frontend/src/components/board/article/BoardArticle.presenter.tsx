import {Main, BoardContainer, WriterSection, WriterContainer, AvatarWrapper, ContentTitle} from './BoardArticle.styles';
import Avatar from '../../../../assets/img/avatar.png';

const BoardArticlePresenter = () => {
  return (
    <Main>
      <BoardContainer>
        <WriterSection>
          <WriterContainer>
            <AvatarWrapper avatar={Avatar.src} />
          </WriterContainer>
        </WriterSection>
      </BoardContainer>
    </Main>
  )
}

export default BoardArticlePresenter;