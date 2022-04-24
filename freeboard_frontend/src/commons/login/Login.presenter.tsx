import Image from 'next/image';
import Link from 'next/link';
import { Ilogin } from './Login.types';
import {Background, CloseBtn, SignupForm, Form, InputContainer, Input, ErrorMsg} from '../signup/Signup.style';
import { Text, Button } from '../styles';
import {Label, CheckboxContainer, StyledCheckbox, HiddenCheckbox, Icon, SignUpContainer} from './Login.style'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import bgImg from '../../../assets/img/signupBg.png';
import closeBtn from '../../../assets/img/login_cancel.png';
import Logo from '../../../assets/img/login_logo.png'

const LoginPresenter:React.FC<Ilogin> = ({isChecked, handleCheckbox, handleLogin}) => {
  const schema = yup.object({
    email: yup.string().required('이메일은 필수 입력입니다.'),
    password: yup.string().required('비밀번호는 필수 입력입니다.')
  });
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
  <Background bgImg={bgImg.src}>
    <CloseBtn btnSrc={closeBtn.src}>close</CloseBtn>
    <SignupForm>
      <Image src={Logo} alt='코드캠프 로고' />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input {...register("email")} placeholder='이메일을 입력해주세요.' />
          {errors?.email?.message && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
        </InputContainer>
        <InputContainer>
          <Input {...register("password")} placeholder='비밀번호를 입력해주세요.' />
          {errors?.password?.message && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
        </InputContainer>
        
        <Label>
          <CheckboxContainer onChange={handleCheckbox}>
            <HiddenCheckbox type={'checkbox'} />
            <StyledCheckbox isChecked={isChecked}>
              <Icon viewBox="0 0 24 24">
                <polyline points="19 7 10 17 5 12"/>
              </Icon>
            </StyledCheckbox>
          </CheckboxContainer>
          <Text color='#fff' fontSize='14px'>로그인 상태 유지</Text>
        </Label>
        <Button type='submit' width='100%' radius='8px' bgColor='#4f4f4f' color='#bdbdbd' fontWeight={700} padding='14px' onClick={handleLogin}>로그인하기</Button>
      </Form>
      <SignUpContainer>
        <Link href='/'>이메일 찾기</Link>
        <span>|</span>
        <Link href='/'>비밀번호 찾기</Link>
        <span>|</span>
        <Link href='/signup'>회원가입</Link>
      </SignUpContainer>
    </SignupForm>
  </Background>
    )
}

export default LoginPresenter;