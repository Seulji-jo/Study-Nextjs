// presenter는 ui만 그려줌

import { Main, Dim, Close, Modal, BoardContainer, ContentTitle, ContentContainer, RowContainer, RowCenterAlign, InputContainer, InputTitle, Input, ImgUploader, UploadImg, ImgInput, TextArea, Button, RadioContainer, Radio } from "./BoardWrite.styles";
import { IboardWirteProps } from "./BoardWrite.types";
import DaumPostcode from 'react-daum-postcode';

import Icon from "../../../../assets/img/uploadIcon.png";

const BoardWritePresenter:React.FC<IboardWirteProps> = ({handleInput, handleCreateBoard, handleAddressModal, isModal, inputData, handleComplete}) => {
  return (
    <Main>
      {isModal && (<Dim onClick={handleAddressModal}>
        <Modal>
          <DaumPostcode onComplete={handleComplete} onClose={handleAddressModal} style={{width: '480px', height: '100%'}}></DaumPostcode>
          <Close onClick={handleAddressModal}></Close>
        </Modal>
      </Dim>)}
      <BoardContainer>
        <ContentTitle>게시물 등록</ContentTitle>
        <ContentContainer>
        <RowContainer>
          <InputContainer width={'50%'}>
            <InputTitle>작성자</InputTitle>
            <Input placeholder="이름을 적어주세요." onChange={handleInput} value={inputData.writer} name="writer"></Input>
          </InputContainer>
          <InputContainer width={'50%'}>
            <InputTitle>비밀번호</InputTitle>
            <Input placeholder="비밀번호를 입력해주세요." type="password" onChange={handleInput} value={inputData.password} name="password"></Input>
          </InputContainer>
        </RowContainer>
        <InputContainer width={'100%'}>
          <InputTitle>제목</InputTitle>
          <Input placeholder="제목을 작성해주세요." onChange={handleInput} value={inputData.title} name="title"></Input>
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>내용</InputTitle>
          <TextArea placeholder="내용을 작성해주세요." onChange={handleInput} value={inputData.contents} name="contents" />
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>주소</InputTitle>
          <RowContainer>
            <Input placeholder="07250" value={inputData.zipcode} readOnly width={'80px'} />
            <Button bgColor={'#333'} onClick={handleAddressModal}>우편번호 검색</Button>
          </RowContainer>
          <Input value={inputData.address} readOnly />
          <Input onChange={handleInput} value={inputData.addressDetail} name="addressDetail" />
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>유튜브</InputTitle>
          <Input placeholder="링크를 복사해주세요." onChange={handleInput} value={inputData.youtubeUrl} name="youtubeUrl"></Input>
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>사진 첨부</InputTitle>
          <RowContainer>
            <ImgUploader>
              {/* {inputData.img1 ? <img src={inputData.img1} alt='img1' /> : <UploadIcon></UploadIcon>} */}
              <UploadImg src={inputData.img1 ?? Icon.src} alt='img1' />
              <ImgInput type="file" accept="image/*" onChange={handleInput} name="img1"></ImgInput>
            </ImgUploader>
            <ImgUploader>
              <UploadImg src={inputData.img2 ?? Icon.src} alt='img2' />
              <ImgInput type="file" accept="image/*" onChange={handleInput} name="img2"></ImgInput>
            </ImgUploader>
            <ImgUploader>
              <UploadImg src={inputData.img3 ?? Icon.src} alt='img3' />
              <ImgInput type="file" accept="image/*" onChange={handleInput} name="img3"></ImgInput>
            </ImgUploader>
          </RowContainer>
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>메인 설정</InputTitle>
          <RowContainer>
            <RadioContainer>
              <Radio type='radio' name='mainSetting' value='youtube' onChange={handleInput} checked={inputData.mainSetting === 'youtube'} />
              <span>
              유튜브
              </span>
            </RadioContainer>
            <RadioContainer>
              <Radio type='radio' name='mainSetting' value='picture' onChange={handleInput} checked={inputData.mainSetting === 'picture'} />
              <span>
              사진
              </span>
            </RadioContainer>
          </RowContainer>
        </InputContainer>
        </ContentContainer>
        <RowCenterAlign>
          <Button padding='14px 60px' bgColor="#FFD600" color='#333' fontWeight={700} onClick={handleCreateBoard}>
            등록하기
          </Button>
        </RowCenterAlign>
      </BoardContainer>
    </Main>
  );
};

export default BoardWritePresenter; 