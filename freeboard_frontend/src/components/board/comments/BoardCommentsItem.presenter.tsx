import { useRouter } from 'next/router';
import { useState } from 'react';
import { FETCH_BOARD_COMMENTS } from './BoardComments.queries';

const BoardCommentItem = ({data}: any) => {
  const router = useRouter();
  const [isUpdate, setIsUpdate] = useState(false);

  const handleIsUpdate = () => {
    setIsUpdate(!isUpdate);
  }

  //* 댓글삭제
  const handleDeleteComment = async() => {
    try {
      const result = await deleteBoardComment({
        variables: {
          password: '',
          boardCommentId: ''
        },
        // 뮤테이션에서 리페치를 사용하는 방법
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.id)
            }
          }
        ]
      })
    } catch (error) {
      console.log(error);
    }
  }
  // handleRating도 만들어줘야댐

  return (
    <div onClick={handleIsUpdate}>{isUpdate ? '수정' : data?.writer}</div>
  )
}
{/* <CmntList key={list._id}>
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
                <Image src={Edit} alt='댓글편집' width={18} height={18} onClick={changeModifyStatus} />
                <Image src={Close} alt='댓글편집' width={14} height={14} />
              </CmntEditWrapper>
            </CmntList> */}
export default BoardCommentItem;