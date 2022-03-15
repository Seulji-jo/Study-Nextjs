import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react';
import {ModalDim, Modal, ModalHeader, CloseBtn, ModalMain} from './Modal.style'

import Close from '../../../assets/img/b_close.png'

interface ImodalPresenter {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}
const ModalPresenter:React.FC<ImodalPresenter> = ({isModalVisible, setIsModalVisible, children}) => {
  
  const closeModal = () => {
    setIsModalVisible(false)
  }
  const handleModal = (e:any) => {
    const clickedModal = e.target.closest('.modal');
    
    if (!clickedModal){
      setIsModalVisible(!isModalVisible)
    }
  }

  return (
    <ModalDim onClick={handleModal}>
      <Modal className='modal'>
        <ModalHeader>
          <CloseBtn onClick={closeModal}>
            <Image src={Close} alt='close button' />
          </CloseBtn>
        </ModalHeader>
        <ModalMain>
          {children}
        </ModalMain>
      </Modal>
    </ModalDim>
  )
}

export default ModalPresenter;