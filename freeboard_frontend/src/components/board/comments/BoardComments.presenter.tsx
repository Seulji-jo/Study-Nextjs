import Image from 'next/image';
import { Main, BoardContainer, Row, Button } from '../../../commons/styles';
import { CmntTitleWrapper, CmntTitle, InputBox, CmntWriteWrapper, CmntWrite, CmntWriteRow, WriteTypeCnt, CmntLists, CmntList, CmntContent, CmntUser, CmntTime, CmntEditWrapper } from './BoardComments.style';
import CmntIcon from '../../../../assets/img/cmnt.png'
import Avatar from '../../../../assets/img/avatar.png'
import Edit from '../../../../assets/img/modifyIcon.png'
import Close from '../../../../assets/img/closeIcon.png'
import { IboardCommentsProps } from './BoardComments.types';
import dayjs from 'dayjs';

const BoardCommentsPresenter:React.FC<IboardCommentsProps> = ({rating, handleSaveRating, comment, handleComment, submitComment, commentLists, handleModify}) => {
  return (
    <Main>
      <BoardContainer>
        <CmntTitleWrapper>
          <Image src={CmntIcon} alt='댓글 아이콘' />
          <CmntTitle>댓글</CmntTitle>
        </CmntTitleWrapper>
        <Row marginLeft='20px'>
          <InputBox placeholder='작성자' onChange={handleComment} value={comment?.writer} name='writer' />
          <InputBox placeholder='비밀번호' type='password' onChange={handleComment} value={comment?.password} name='password' />
          <div>
            {[1,2,3,4,5].map((data:number) => (
              <Image key={data} onClick={handleSaveRating} id={String(data)} alt='별점' src={Number(rating) >= data ? '/star_fill.png' : '/star.png'} width={20} height={20} />
            ))}
          {/* next /하면 public폴더로 이동이 된다. */}
          </div>
        </Row>
        <CmntWriteWrapper>
          <CmntWrite placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' onChange={handleComment} value={comment?.contents} name='contents'/>
          <CmntWriteRow justify='space-between'>
            <WriteTypeCnt>{comment?.contents.length ?? '0'}/100</WriteTypeCnt>
            <Button fontSize="12px" onClick={submitComment}>등록하기</Button>
          </CmntWriteRow>
        </CmntWriteWrapper>
        <CmntLists>
          {commentLists?.map((list) => (
            <CmntList key={list._id}>
              <Image src={Avatar} alt='avatar' width={40} height={40} />
              <CmntContent>
                <CmntUser>
                  <div>{list.writer}</div>
                  <div>
                    {[1,2,3,4,5].map((data:number) => (
                      <Image key={data} id={String(data)} alt='별점' src={Number(list.rating) >= data ? '/star_fill.png' : '/star.png'} width={20} height={20} />
                    ))}
                  </div>
                </CmntUser>
                <div>{list.contents}</div>
                <CmntTime>{dayjs(list.createdAt).format('YYYY.MM.DD')}</CmntTime>
              </CmntContent>
              <CmntEditWrapper>
                <Image src={Edit} alt='댓글편집' width={18} height={18} onClick={handleModify} />
                <Image src={Close} alt='댓글편집' width={14} height={14} />
              </CmntEditWrapper>
            </CmntList>
          ))}
          <Row marginLeft='20px'>
          <InputBox placeholder='작성자' onChange={handleComment} value={comment?.writer} name='writer' />
          <InputBox placeholder='비밀번호' type='password' onChange={handleComment} value={comment?.password} name='password' />
          <div>
            {[1,2,3,4,5].map((data:number) => (
              <Image key={data} onClick={handleSaveRating} id={String(data)} alt='별점' src={Number(rating) >= data ? '/star_fill.png' : '/star.png'} width={20} height={20} />
            ))}
          {/* next /하면 public폴더로 이동이 된다. */}
          </div>
        </Row>
        <CmntWriteWrapper>
          <CmntWrite placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' onChange={handleComment} value={comment?.contents} name='contents'/>
          <CmntWriteRow justify='space-between'>
            <WriteTypeCnt>{comment?.contents.length ?? '0'}/100</WriteTypeCnt>
            <Button fontSize="12px" onClick={submitComment}>수정하기</Button>
          </CmntWriteRow>
        </CmntWriteWrapper>
        </CmntLists>
        
      </BoardContainer>
    </Main>
  )
}

export default BoardCommentsPresenter;