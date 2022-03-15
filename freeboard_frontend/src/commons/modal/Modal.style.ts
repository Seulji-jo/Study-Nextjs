import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

export const modalBgShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`
export const ModalDim = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 99;
background-color: rgba(0, 0, 0, 0.6);
animation: modalBgShow 0.3s ease infinite;
`
export const Modal = styled.section`
width: 400px;
padding: 40px;
border-radius: 16px;
background-color: #fff;
overflow: hidden;
`
export const ModalHeader = styled.header`
display: flex;
align-items: center;
justify-content: flex-end;
font-size: 16px;
`
export const CloseBtn = styled.button`
padding: 0;
position: relative;
top: -20px;
right: -20px;
color: #333;
font-size: 24px;
line-height: 21px;
`
export const ModalMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
`
export const ModalFooter = styled.footer`
padding: 16px 24px;
display: flex;
justify-content: center;
gap: 20px;
`