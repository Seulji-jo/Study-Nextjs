import styled from '@emotion/styled';
import {Itext, Iimg, Ibutton} from './BoardList.types'


export const Main = styled.main`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * + * {
    margin-top: 80px;
  }
`
export const BoardContainer = styled.article`
  width: 65%;
  max-width: 960px;
  & > * + * {
    margin-top: 80px;
  }
`

export const BestBoardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * + * {
    margin-top: 40px;
  }
`

export const ContentTitle = styled.h3`
  font-size: 36px;
`
export const BestBoardLists = styled.ul`
  display: flex;
  margin: 0 -12px;
`
export const BestBoardContainer = styled.li`
  width: 25%;
  padding: 0 12px;
`
export const BestBoard = styled.div`
  width: 100%;
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
export const BestBoardImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`
export const BestBoardData = styled.div`
  padding: 20px;
  & > * + * {
    margin-top: 20px;
  }
`
export const Text = styled.div<Itext>`
  font-size: ${props => props.fontSize ?? '1.8rem'};
  color: ${props => props.color ?? '#333'}
`
export const BestBoardUserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div > * + * {
    margin-top: 8px;
  }
`
export const BbUserInfo = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 6px;
  }
`
export const BbUserAvatar = styled.div<Iimg>`
  width: 20px;
  height: 20px;
  background: center / contain no-repeat url(${props => props.img ?? '../../../../assets/img/avatar.png'});
  border: ${props => props.img ? '1px solid #bdbdbd' : 'none'};
  border-radius: 50%;
`
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LikeIcon = styled.img`
  width: 20px;
  height: 18px;
  object-fit: contain;
`

export const BoardListSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  & > * + * {
    margin-top: 40px;
  }
`
export const SearchContainer = styled.form`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
`
export const SearchBox = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #F2F2F2;
  border-radius: 2px;
  & > * + * {
    margin-left: 12px;
  }
`
export const SearchIcon = styled.div<Iimg>`
  width: 18px;
  height: 18px;
  background: center / contain no-repeat url(${props => props.img});
`
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
`
export const Button = styled.button<Ibutton>`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background-color: ${props => props.backgroundColor ?? '#333'};
  color: ${props => props.color ?? '#fff'};
  border: ${props => props.border ?? 'none'};
  border-radius: 2px;
  & > * + * {
    margin-left: 11px;
  }
`

export const BoardListTable = styled.table`
  width: 100%;
  text-align: center;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`
export const TableTitle = styled.th`
  padding: 12px 0;
  font-size: 1.6rem;
  font-weight: 700;
`
export const BoardTitleList = styled(TableTitle)`
  width: 65%;
`
export const TableData = styled.td`
  padding: 14px 0;
  color: #4F4F4F;
  border-top: 1px solid #bdbdbd;
`
export const BoardListFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const PaginationContainer = styled.ul`
  display: flex;
  line-height: 12px;
`
export const Pagination = styled.div`
  padding: 0 28px;
  display: flex;
  color: #4F4F4F;
  & > * + * {
    margin-left: 20px; 
  }
  & > *.active{
    color: #FFD600;
    font-weight: 700;
    text-decoration: underline;
  }
`
export const CreationBtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`