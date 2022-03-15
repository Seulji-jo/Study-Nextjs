import Image from 'next/image'
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Mutation, MutationCreateUserArgs } from '../types/generated/types';
import SignupPresenter from './Signup.presenter';
import { CREATE_USER } from './Signup.queries';
import { IformData } from './Signup.types';
import ModalPresenter from '../modal/Modal.presenter';
import { useState } from 'react';
import { Button } from '../styles';

import Logo from '../../../assets/img/logo.png'

const SignupContainer = () => {
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const confirmModal = () => {
    setIsModalVisible(false)
    router.push('/login')
  }
  
  const closeSignupPage = () => {
    router.back()
    // router.push('/board/list')
  };
  const [createUser] = useMutation<Mutation, MutationCreateUserArgs>(CREATE_USER);

  const submitSignupForm = async (formData: IformData) => {
    try {
      const {email, password, name} = formData;
      await createUser({ variables: {
        createUserInput: {
          email,
          password,
          name
        }
      }})
      setIsModalVisible(true);
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      {isModalVisible && (
        <ModalPresenter isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
          <Image src={Logo} alt='logo' width={236} height={36} />
          <p>회원가입을 축하합니다!</p>
          <Button width='100%' padding='20px' radius='8px' bgColor='#FFD600' color='#333' fontWeight={700} onClick={confirmModal}>확인</Button>
        </ModalPresenter>
      )}
      <SignupPresenter closePage={closeSignupPage} submitSignupForm={submitSignupForm} />
    </>
  )
}

export default SignupContainer;