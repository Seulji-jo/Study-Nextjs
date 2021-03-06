// presenter는 ui만 그려줌

import { Main, Dim, Close, Modal, BoardContainer, ContentTitle, ContentContainer, RowContainer, RowCenterAlign, InputContainer, InputTitle, Input, ImgUploader, UploadImg, ImgInput, DeleteBtn, TextArea, Button, RadioContainer, Radio, Warning } from "./BoardWrite.styles";
import { IboardWirteProps } from "./BoardWrite.types";
import DaumPostcode from 'react-daum-postcode';

import Icon from "../../../../assets/img/uploadIcon.png";

const BoardWritePresenter:React.FC<IboardWirteProps> = ({handleInput, inputData, handleAddressModal, handleComplete, isModal, submitBoardForm, requirements, imgArr, removeImg, onChangeImage, isEditPage, cancelToUpdate}) => {
  return (
    <Main>
      {isModal && (<Dim onClick={handleAddressModal}>
        <Modal>
          <DaumPostcode onComplete={handleComplete} onClose={handleAddressModal} style={{width: '480px', height: '100%'}} animation={true} errorMessage></DaumPostcode>
          <Close onClick={handleAddressModal}></Close>
        </Modal>
      </Dim>)}
      <BoardContainer>
        <ContentTitle>게시물 등록</ContentTitle>
        <ContentContainer>
        <RowContainer>
          <InputContainer width={'50%'}>
            <InputTitle>작성자</InputTitle>
            <Input placeholder="이름을 적어주세요." onChange={handleInput} value={inputData.writer} isAvailable={requirements.writer} name="writer" disabled={isEditPage} />
            {!requirements.writer && <Warning>⚠ 필수 입력입니다.</Warning>}
          </InputContainer>
          <InputContainer width={'50%'}>
            <InputTitle>비밀번호</InputTitle>
            {/* password는 defaultValue를 넣으면 안된다 */}
            <Input placeholder="비밀번호를 입력해주세요." type="password" onChange={handleInput} value={inputData.password} isAvailable={requirements.password} name="password" />
            {!requirements.password && <Warning>⚠ 필수 입력입니다.</Warning>}
          </InputContainer>
        </RowContainer>
        <InputContainer width={'100%'}>
          <InputTitle>제목</InputTitle>
          <Input placeholder="제목을 작성해주세요." onChange={handleInput} value={inputData.title} isAvailable={requirements.title} name="title" />
          {!requirements.title && <Warning>⚠ 필수 입력입니다.</Warning>}
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>내용</InputTitle>
          <TextArea placeholder="내용을 작성해주세요." onChange={handleInput} value={inputData.contents} isAvailable={requirements.contents} name="contents" />
          {!requirements.contents && <Warning>⚠ 필수 입력입니다.</Warning>}
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>주소</InputTitle>
          <RowContainer>
            <Input placeholder="07250" value={inputData.boardAddress.zipcode} readOnly width={'80px'} isAvailable={true} />
            <Button bgColor={'#333'} onClick={handleAddressModal}>우편번호 검색</Button>
          </RowContainer>
          <Input value={inputData.boardAddress.address} readOnly isAvailable={true} />
          <Input onChange={handleInput} value={inputData.boardAddress.addressDetail} name="addressDetail" isAvailable={true} />
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>유튜브</InputTitle>
          <Input placeholder="링크를 복사해주세요." onChange={handleInput} value={inputData.youtubeUrl} name="youtubeUrl" isAvailable={true} />
        </InputContainer>
        <InputContainer width={'100%'}>
          <InputTitle>사진 첨부</InputTitle>
          <RowContainer>
            {imgArr?.map((img,i) => (
              <ImgUploader key={i}>
                <UploadImg src={img} alt='img3' />
                <ImgInput type="file" accept="image/*" onChange={onChangeImage} name="img3 " multiple></ImgInput>
                <DeleteBtn onClick={() => removeImg(img)}>X</DeleteBtn>
              </ImgUploader>
            ))}
            {new Array(3 - imgArr.length).fill(1).map((img,i) => (
              <ImgUploader key={i}>
              <UploadImg src={Icon.src} alt='img3' />
              <ImgInput type="file" accept="image/*" onChange={onChangeImage} name="img3" multiple></ImgInput>
            </ImgUploader>
            ))}
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
          {isEditPage && <Button padding='14px 60px' bgColor="#bdbdbd" color='#333' fontWeight={700} onClick={cancelToUpdate}>
            취소하기
          </Button>}
          <Button padding='14px 60px' bgColor="#FFD600" color='#333' fontWeight={700} onClick={submitBoardForm}>
            {isEditPage ? '수정하기' : '등록하기'}
          </Button>
        </RowCenterAlign>
      </BoardContainer>
    </Main>
  );
};

export default BoardWritePresenter; 