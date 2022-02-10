import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Row, Button } from '../../../commons/styles'
import { InputBox, CmntWriteWrapper, CmntWrite, CmntWriteRow, WriteTypeCnt, CmntList, UpdateCmntList, CmntContent, CmntUser, CmntTime, CmntEditWrapper, ModalDim, Modal, ModalHeader, CloseBtn, ModalMain, ModalFooter } from './BoardComments.style';
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from './BoardComments.queries';
import { Mutation, MutationCreateBoardCommentArgs, MutationDeleteBoardCommentArgs, MutationUpdateBoardCommentArgs } from '../../../commons/types/generated/types';
import { useMutation } from '@apollo/client';
import { IupdateCmnt } from './BoardComments.types';
// import { Modal } from 'antd';
// import 'antd/dist/antd.css';

import Avatar from '../../../../assets/img/avatar.png'
import Edit from '../../../../assets/img/modifyIcon.png'
import Close from '../../../../assets/img/closeIcon.png'
import Image from 'next/image';
import dayjs from 'dayjs';

const BoardCommentItem = ({data}: any) => {
  const router = useRouter();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updateCmnt, setUpdateCmnt] = useState<IupdateCmnt>({password: '', contents: '', rating: 0});
  const [password, setPassword] = useState('')

  const [updateBoardComment] = useMutation<Mutation, MutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<Mutation, MutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

  useEffect(() => {
    if (isUpdate) {
      const {contents, rating} = data;
      setUpdateCmnt(cmntData => ({...cmntData, contents, rating}))
    }
  }, [isUpdate, data])

  const handleIsUpdate = () => {
    setIsUpdate(!isUpdate);
  }
  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
    setPassword('')
  }

  const changeCmntVal = ({target}: any) => {
    if (target.alt === '별점') setUpdateCmnt({...updateCmnt, rating: Number(target.id)})
    else setUpdateCmnt({...updateCmnt, [target.name]: target.value})
  }
  const handlePassword = ({target}: any) => {
    setPassword(target.value);
  }
  

  const updateComment = async () => {
    try {
      const {_id} = data;
      const {password, contents, rating} = updateCmnt
      await updateBoardComment({
        variables: {
        updateBoardCommentInput: {
          contents, rating
        },
        password,
        boardCommentId: String(_id)
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.id)
            }
          }
        ]
      })
      setIsUpdate(!isUpdate)
    } catch (error) {
      console.log(error);
    }
  }
  //* 댓글삭제
  const deleteComment = async() => {
    try {
      const {_id} = data;
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: _id
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.id)
            }
          }
        ]
      })
      setIsModalVisible(false)
      setPassword('')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
    {isModalVisible && (
      <ModalDim onClick={handleModal}>
        <Modal>
          <ModalHeader>
            <p>삭제</p>
            <CloseBtn onClick={handleModal}>&times;</CloseBtn>
          </ModalHeader>
          <ModalMain>
            <p>해당 댓글을 삭제하고 싶으신 경우 댓글 비밀번호를 입력하세요.</p>
            <InputBox placeholder='비밀번호' onChange={handlePassword} value={password} type='password' />
          </ModalMain>
          <ModalFooter>
            <Button fontSize="12px" bgColor='#BDBDBD' color='#333' fontWeight={500} onClick={handleModal}>취소</Button>
            <Button fontSize="12px" bgColor='#333' color='#fff' fontWeight={500} onClick={deleteComment}>삭제</Button>
          </ModalFooter>
        </Modal>
      </ModalDim>
    )}
    {isUpdate ? (
      <UpdateCmntList>
        <Row marginLeft='20px'>
          <InputBox placeholder='작성자' value={data.writer} disabled />
          <InputBox placeholder='비밀번호' onChange={changeCmntVal} type='password' name='password' />
          <div>
            {[1,2,3,4,5].map((num:number) => (
              <Image key={num} id={String(num)} alt='별점' src={updateCmnt.rating >= num ? '/star_fill.png' : '/star.png'} width={20} height={20} onClick={changeCmntVal} />
            ))}
          </div>
        </Row>
        <CmntWriteWrapper>
          <CmntWrite height='64px' placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' defaultValue={updateCmnt.contents} onChange={changeCmntVal} name='contents'/>
          <CmntWriteRow justify='space-between'>
            <WriteTypeCnt>{data.contents.length ?? '0'}/100</WriteTypeCnt>
            <Button fontSize="12px" bgColor='#FFD600' color='#333' fontWeight={500} onClick={updateComment}>수정하기</Button>
          </CmntWriteRow>
        </CmntWriteWrapper>
      </UpdateCmntList>
    ) : (
      <CmntList>
        <Image src={Avatar} alt='avatar' width={40} height={40} />
        <CmntContent>
          <CmntUser>
            <div>{data.writer}</div>
            <div>
              {[1,2,3,4,5].map((num:number) => (
                <Image key={num} id={String(num)} alt='별점' src={data.rating >= num ? '/star_fill.png' : '/star.png'} width={20} height={20} />
              ))}
            </div>
          </CmntUser>
          <div>{data.contents}</div>
          <CmntTime>{dayjs(data.createdAt).format('YYYY.MM.DD')}</CmntTime>
        </CmntContent>
        <CmntEditWrapper>
          <Image className='img--button' src={Edit} alt='댓글편집' width={18} height={18} onClick={handleIsUpdate} />
          <Image className='img--button' src={Close} alt='댓글편집' width={14} height={14} onClick={handleModal} />
        </CmntEditWrapper>
      </CmntList>
    )}
    </>
  )
}
export default BoardCommentItem;