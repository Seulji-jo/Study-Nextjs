import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {CmntContentRowProps, CmntWriteProps} from './BoardComments.types'

export const CmntTitleWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 14px;
  }
`
export const CmntTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`

export const InputBox = styled.input`
  width: 180px;
  height: 46px;
  padding: 0 14px;
  font-size: 12px;
  border: 1px solid #BDBDBD;
`

export const CmntWriteWrapper = styled.div`
  width: 100%;

  margin: 20px 0;
  border: 1px solid #BDBDBD;
`
export const CmntWrite = styled.textarea<CmntWriteProps>`
  width: 100%;
  height: ${props => props.height ?? '108px'};
  display: block;
  padding: 14px;
  font-size: 12px;
  border: none;
  border-bottom: 1px solid #F2F2F2;
  resize: none;
`
export const CmntWriteRow = styled.div<CmntContentRowProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify ?? 'flex-start'}
`
export const WriteTypeCnt = styled.div`
  padding-left: 14px;
  color: #BDBDBD;
  font-size: 12px;
`

export const CmntLists = styled.ul`
  $ > * {
    
  }
`
export const CmntList = styled.li`
  padding: 20px 0;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 1px solid #BDBDBD;
`
export const UpdateCmntList = styled.li`
  padding-top: 20px;
  border-bottom: 1px solid #BDBDBD;
`
export const CmntContent = styled.div`
  width: calc(100% - 120px);
  & > * + * {
    margin-top: 4px;
  }
`
export const CmntUser = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 10px;
  }
`
export const CmntTime = styled.time`
  margin-top: 20px;
  display: inline-block;
  font-size: 12px;
  color: #BDBDBD;
`
export const CmntEditWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    display: block !important;
  }
  & > * + * {
    margin-left: 16px !important;
  }
`

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
  width: 90%;
  max-width: 450px;
  border-radius: 0.3rem;
  background-color: #fff;
  overflow: hidden;
`
export const ModalHeader = styled.header`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`
export const CloseBtn = styled.button`
  margin-top: -4px;
  color: #333;
  font-size: 21px;
  line-height: 21px;
`
export const ModalMain = styled.main`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid #dbdbdb;
  border-top: 1px solid #dbdbdb;
`
export const ModalFooter = styled.footer`
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  gap: 20px;
`