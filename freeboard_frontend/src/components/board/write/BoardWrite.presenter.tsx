// presenter는 ui만 그려줌

import { Main, BoardContainer, ContentTitle, ContentContainer, RowContainer, RowCenterAlign, InputContainer, InputTitle, Input, ImgUploader, UploadImg, ImgInput, TextArea, Button, RadioContainer, Radio } from "./BoardWrite.styles";
import { IboardWirteProps } from "./BoardWrite.types";

import Icon from "../../../../assets/img/uploadIcon.png";

const BoardWritePresenter:React.FC<IboardWirteProps> = ({handleInput, inputData, submitBoard}) => {
  return (
    <Main>
      <BoardContainer>
        <ContentTitle>게시물 등록</ContentTitle>
        <ContentContainer>
        <RowContainer>
          <InputContainer width={'50%'}>
            <InputTitle>작성자</InputTitle>
            <Input placeholder="이름을 적어주세요." onChange={handleInput} name="writer"></Input>
          </InputContainer>
          <InputContainer width={'50%'}>
            <InputTitle>비밀번호</InputTitle>
            <Input placeholder="비밀번호를 입력해주세요." type="password" onChange={handleInput} name="password"></Input>
          </InputContainer>
        </RowContainer>
        <InputContainer width={'100%'}>
          <InputTitle>제목</InputTitle>
          <Input placeholder="제목을 작성해주세요." onChange={handleInput} name="title"></Input>
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>내용</InputTitle>
          <TextArea placeholder="내용을 작성해주세요." onChange={handleInput} name="content" />
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>주소</InputTitle>
          <RowContainer>
            <Input placeholder="07250" onChange={handleInput} name='zipCode' readOnly width={'80px'}></Input>
            <Button bgColor={'#333'}>우편번호 검색</Button>
          </RowContainer>
          <Input onChange={handleInput} name="address" readOnly />
          <Input onChange={handleInput} name="detailAdd" />
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>유튜브</InputTitle>
          <Input placeholder="링크를 복사해주세요." onChange={handleInput} name="youTube"></Input>
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>사진 첨부</InputTitle>
          <RowContainer>
            <ImgUploader>
              {/* {inputData.img1 ? <img src={inputData.img1} alt='img1' /> : <UploadIcon></UploadIcon>} */}
              <UploadImg   src={inputData.img1 ?? Icon.src} alt='img1' />
              <ImgInput type="file" accept="image/*" onChange={handleInput} name="img1"></ImgInput>
            </ImgUploader>
            <ImgUploader>
              <UploadImg   src={inputData.img2 ?? Icon.src} alt='img2' />
              <ImgInput type="file" accept="image/*" onChange={handleInput} name="img2"></ImgInput>
            </ImgUploader>
            <ImgUploader>
              <UploadImg   src={inputData.img3 ?? Icon.src} alt='img3' />
              <ImgInput type="file" accept="image/*" onChange={handleInput} name="img3"></ImgInput>
            </ImgUploader>
          </RowContainer>
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>메인 설정</InputTitle>
          <RowContainer>
            <RadioContainer>
              <Radio type='radio' name='mainSetting' value='유튜브' onChange={handleInput} />
              <span>
              유튜브
              </span>
            </RadioContainer>
            <RadioContainer>
              <Radio type='radio' name='mainSetting' value='사진' onChange={handleInput} />
              <span>
              사진
              </span>
            </RadioContainer>
          </RowContainer>
        </InputContainer>
        </ContentContainer>
        <RowCenterAlign>
          <Button padding='14px 60px' bgColor="#FFD600" color='#333' fontWeight={700} onClick={submitBoard}>
            등록하기
          </Button>
        </RowCenterAlign>
      </BoardContainer>
    </Main>
  );
};

export default BoardWritePresenter; 