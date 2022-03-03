import styled from "@emotion/styled";
import { backgroundProps, CloseBtnProps } from "./Signup.types";

export const Background = styled.div<backgroundProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => `no-repeat url(${props.bgImg})`} rgba(0,0,0,0.8);
  background-size: cover;
  background-blend-mode: multiply;
`
export const CloseBtn = styled.button<CloseBtnProps>`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 80px;
  right: 80px;
  background: ${props => `no-repeat url(${props.btnSrc})`};

  /* Hide the text. */
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`
export const SignupForm = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & > button {
    margin-top: 20px;
  }
`
export const InputContainer = styled.div`
  width: 100%;
`
export const Input = styled.input`
  width: 100%;
  margin-top: 12px;
  padding: 14px 16px;
  font-size: 1.4rem;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  border-radius: 8px;
`
export const ErrorMsg = styled.div`
  padding-top: 8px;
  font-size: 12px;
  color: #FF0000;
`