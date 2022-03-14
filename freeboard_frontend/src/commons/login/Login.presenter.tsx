import Image from 'next/image';
import Link from 'next/link';
import {Background, CloseBtn, SignupForm, Form, InputContainer, Input, ErrorMsg} from '../signup/Signup.style';
import { Text, Button } from '../styles';
import {Label, CheckboxContainer, StyledCheckbox, HiddenCheckbox, Icon, SignUpContainer} from './Login.style'
import bgImg from '../../../assets/img/signupBg.png';
import closeBtn from '../../../assets/img/login_cancel.png';
import Logo from '../../../assets/img/login_logo.png'
import { Ilogin } from './Login.types';
const LoginPresenter:React.FC<Ilogin> = ({isChecked, handleCheckbox}) => {
  return (
  <Background bgImg={bgImg.src}>
    <CloseBtn btnSrc={closeBtn.src}>close</CloseBtn>
    <SignupForm>
      <Image src={Logo} alt='코드캠프 로고' />
      <Form>
        <Input placeholder='이메일을 입력해주세요.'></Input>
        <Input placeholder='비밀번호를 입력해주세요.'></Input>
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
        <Button type='submit' width='100%' radius='8px' bgColor='#4f4f4f' color='#bdbdbd' fontWeight={700} padding='14px'>로그인하기</Button>
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