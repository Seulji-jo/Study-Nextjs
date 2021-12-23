import styled from '@emotion/styled'
import { IinputContainerProps, IinputProps, Ibutton } from "./BoardWrite.types";

export const Main = styled.main`
  padding: 100px 0;
  display: flex;
  justify-content: center;
`

export const BoardContainer = styled.section`
  width: 65%;
  max-width: 960px;
  
  padding: 120px 102px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export const ContentTitle = styled.h3`
  font-size: 36px;
  text-align: center;
`
export const ContentContainer = styled.div`
  margin: 40px 0 80px;
`

export const RowContainer = styled.div`
  display: flex;
  & > *+* {
    margin-left: 24px;
  }
`
export const RowCenterAlign = styled.div`
  display: flex;
  justify-content: center;
`

export const InputContainer = styled.div<IinputContainerProps>`
  width: ${props => props.width};
  & > *+* {
    margin-top: 8px;
  }
`

export const InputTitle = styled.div`
  padding-top: 40px;
  padding-bottom: 8px;
  font-size: 1.4rem;
  font-weight: bold;
`

export const Input = styled.input<IinputProps>`
  width: ${props => props.width ?? '100%'};
  height: 42px;
  
  padding: 0 8px;
  border: none;
  border-bottom: 1px solid #BDBDBD;
  
  &:focus {
    
    border-bottom: 1px solid #333;
  }
`

export const ImgUploader = styled.label`
  width: 78px;
  height: 78px;
  margin-top: 8px;
  display: inline-block;
  position: relative;
  overflow:hidden;
  border: 1px solid #BDBDBD;
  cursor: pointer;
`
export const UploadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`
export const UploadIcon = styled.div`
  position: relative;
  &:before, &:after {
    display: block;
    content: '';
    position: absolute;
    background-color: #4F4F4F;;
  }
  &:before {
    width: 14px;
    height: 2px;
    margin-top: 6px;
  }
  &:after {
    width: 2px;
    height: 14px;
    margin-left: 6px;
  }
`
export const ImgInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  visibility: hidden
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 380px;
  resize: none;
  
  padding: 14px 16px;
  font-size: 1.4rem;
  border: 1px solid #BDBDBD;
  border-radius: 0;
  &:focus {
    border: 1px solid #333;
  }
`

export const Button = styled.button<Ibutton>`
  
  padding: ${props => props.padding ?? '12px 16px'};
  font-size: 1.4rem;
  background-color: ${props => props.bgColor ?? '#333'};
  color: ${props => props.color ?? '#fff'};
  font-weight: ${props => props.fontWeight ?? 400}
`

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 10px;
  }
`
export const Radio = styled.input`
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  border: 1px solid #BDBDBD;
  border-radius: 50%;
  
  &:checked {
    background: radial-gradient(#FFD600 0%, #FFD600 40%, transparent 50%, transparent);
    border-color: #FFD600;
  }
  
`

