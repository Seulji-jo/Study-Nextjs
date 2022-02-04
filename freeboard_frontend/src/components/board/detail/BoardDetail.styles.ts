import styled from "@emotion/styled";
import {Avartar, Text, ButtonProps} from './BoardDetail.types'

export const Main = styled.main`
  padding: 100px 0 80px;
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
  padding: 80px 102px;
  
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export const WriterSection = styled.section`
  width: 100%;
  padding-bottom: 20px;
  position: relative;
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
export const AvatarWrapper = styled.div<Avartar>`
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
    margin-left: 30px !important;
  }
`
export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HoverMsg = styled.div`
  padding: 8px 16px;
  background-color: #C4C4C4;
  position: absolute;
  bottom: 70px;
  right: 15px;
  line-height: 24px;
  text-align: right;
  color: #fff;
  & > * {
    width: 100%;
  }
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    bottom: -8px;
    right: 0;
    border-top: 8px solid #C4C4C4;
    border-left: 12px solid transparent;
  }
`

export const ContentSection = styled.section`
  padding: 80px 0;
  & > * + * {
    margin-top: 40px !important;
  }
`
export const ContentTitle = styled.h3`
  font-size: 36px;
`
export const ContentTxt = styled.div`
  font-size: 1.6rem;
`
export const VideoContainer = styled.div`
  padding: 80px 0 40px;
  display: flex;
  justify-content: center;
`

export const EvaluationSection = styled.div`
  display: flex;
  justify-content: center;
`
export const EvaluationBox = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  & > * + * {
    padding-top: 12px;
  }
`
export const TextContainer = styled.div<Text>`
  font-size: ${props => props.fontSize ?? '1.8rem'};
  color: ${props => props.color ?? '#333'}
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > * + * {
    margin-left: 24px;
  }
`

export const Button = styled.button<ButtonProps>`
  
  padding: ${props => props.padding ?? '12px 16px'};
  font-size: 1.4rem;
  background-color: ${props => props.bgColor ?? '#333'};
  color: ${props => props.color ?? '#fff'};
  border: ${props => props.border ?? 'none'};
  font-weight: ${props => props.fontWeight ?? 400};
`