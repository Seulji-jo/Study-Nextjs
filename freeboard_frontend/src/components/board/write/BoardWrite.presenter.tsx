// presenter는 ui만 그려줌

import { Wrapper, ContentTitle, InputTitle, HalfInput } from "./BoardWrite.styles";
import { IboardWirteProps } from "./BoardWrite.types";

const BoardWritePresenter:React.FC<IboardWirteProps> = ({handleInput}) => {
  return (
    <Wrapper>
      <ContentTitle>게시물 등록</ContentTitle>
      <InputTitle>작성자</InputTitle>
      <HalfInput placeholder="이름을 적어주세요." onChange={handleInput} name="writer"></HalfInput>
    </Wrapper>
  );
};

export default BoardWritePresenter;