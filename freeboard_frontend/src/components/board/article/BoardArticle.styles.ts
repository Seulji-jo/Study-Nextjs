import styled from "@emotion/styled";
import {Iavartar} from './BoardArticle.types'

export const Main = styled.main`
  padding: 100px 0;
  display: flex;
  justify-content: center;
`

export const BoardContainer = styled.article`
  width: 65%;
  max-width: 960px;
  
  padding: 120px 102px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export const WriterSection = styled.section`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`
export const WriterContainer = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    padding-left: 16px;
  }
`
export const AvatarWrapper = styled.div<Iavartar>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: center / cover no-repeat url(${props => props.avatar || '../../../../assets/img/avatar.png'});
  border: ${props => props.avatar ?? '1px solid #bdbdbd'};
`
export const WriterName = styled.div`
  font-size: 2.1rem;
  line-height: 3.4rem;
  color: #333;
`
export const Date = styled.time`
  color: #999;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 30px;
  }
`


export const ContentTitle = styled.h3`
  font-size: 36px;
`