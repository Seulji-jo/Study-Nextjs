import styled from '@emotion/styled'
import { InputContainerProps, InputProps, ButtonProps, TextAreaProps } from "./BoardWrite.types";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
`
export const Dim = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
`
export const Modal = styled.div`
  width: 532px;
  height: 500px;
  display: flex;
  align-items: start;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 999;
`
export const Close = styled.button`
  width: 47px;
  height: 47px;

  margin-left: 5px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before, &:after {
    display: block;
    content:'';
    width: 1px;
    height: 35px;
    background-color: #fff;
  }
  &:before { transform: rotate(45deg); }
  &:after { transform: rotate(-45deg); }
`

export const BoardContainer = styled.section`
  width: 65%;
  max-width: 960px;
  margin: 100px 0;
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
  & > * + * {
    margin-left: 24px;
  }
`

export const InputContainer = styled.div<InputContainerProps>`
  width: ${props => props.width ?? '100%'};
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

export const Input = styled.input<InputProps>`
  width: ${props => props.width ?? '100%'};
  height: 42px;
  
  padding: 0 8px;
  border: none;
  border-bottom: 1px solid ${props => props.isAvailable ? '#BDBDBD' : '#f44336'};
  
  &:focus {
    border-color: ${props => props.isAvailable ? '#333' : '#f44336'};
  }
`
export const Warning = styled.div`
  padding-left: 8px;
  font-size: 1.2rem;
  color: #f44336;
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
  &:hover > button{
    display: block;
  }
`
export const DeleteBtn = styled.button`
  width: 18px;
  height: 18px;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  font-size: 12px;
  line-height: 1px;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
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
  
  visibility: hidden;
`

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 380px;
  resize: none;
  
  padding: 14px 16px;
  font-size: 1.4rem;
  border: 1px solid ${props => props.isAvailable ? '#BDBDBD' : '#f44336'};
  border-radius: 0;
  &:focus {
    border-color: ${props => props.isAvailable ? '#333' : '#f44336'};
  }
`

export const Button = styled.button<ButtonProps>`
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

