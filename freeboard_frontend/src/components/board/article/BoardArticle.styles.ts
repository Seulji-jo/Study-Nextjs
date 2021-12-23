import styled from "@emotion/styled";
import {Iavartar} from './BoardArticle.types'

export const Main = styled.main`
  padding: 100px 0;
  display: flex;
  justify-content: center;
`

export const BoardContainer = styled.article`
  width: 65%;
  
  padding: 120px 102px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export const WriterSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const WriterContainer = styled.div`
  display: flex;
`
export const AvatarWrapper = styled.div<Iavartar>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: center / cover no-repeat url(${props => props.avatar || '../../../../assets/img/avatar.png'});
  border: ${props => props.avatar ?? '1px solid #bdbdbd'};
`

export const ContentTitle = styled.h3`
  font-size: 36px;
`