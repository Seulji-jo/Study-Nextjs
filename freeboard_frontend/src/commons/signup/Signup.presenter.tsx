import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { Isignup } from './Signup.types';
import {Background, CloseBtn, SignupForm, Form, InputContainer, Input, ErrorMsg} from './Signup.style'
import { Text, Button } from '../styles';

import bgImg from '../../../assets/img/signupBg.png';
import closeBtn from '../../../assets/img/ic_cancel.png'

const SignupPresenter:React.FC<Isignup> = ({closePage, submitSignupForm}) => {
  const schema = yup.object({
    email: yup.string().required('이메일은 필수 입력입니다.').email('이메일 형식을 지켜주세요!'),
    name: yup.string().required('이름은 필수 입력입니다.').min(5, '이름은 5자 이상 작성해주세요.'),
    password: yup.string().required('비밀번호는 필수 입력입니다.').matches(/(?=.*\d)(?=.*[a-z]).{8,}/, '비밀번호는 영어 소문자, 숫자 포함 8자 이상이 되어야합니다.'),
    passwordConfirm : yup.string().required('비밀번호는 필수 입력입니다.').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
  });

  const {register, handleSubmit, formState:{errors},getValues} = useForm({resolver: yupResolver(schema)});
  //getValues: 폼의 value확인 -> 꼭 필요한것은 아니다!

  console.log(errors);
  const handleCreateUser = async() => {
    const formVal = getValues();
    submitSignupForm(formVal)
    try {
      console.log(getValues())
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background bgImg={bgImg.src}>
      <CloseBtn btnSrc={closeBtn.src} onClick={closePage}>close</CloseBtn>
      <SignupForm>
        <Text fontWeight='700' color='#fff'>회원가입</Text>
        <Form onSubmit={handleSubmit(handleCreateUser)}>
          <InputContainer>
            <Text fontSize='14px' color='#fff'>이메일</Text>
            <Input type="text" {...register('email')} placeholder='이메일을 입력해주세요.' />
            {errors?.email?.message && <ErrorMsg>{errors?.email?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Text fontSize='14px' color='#fff'>이름</Text>
            <Input type="text" {...register('name')} placeholder='이름을 입력해주세요.' />
            {errors?.name?.message && <ErrorMsg>{errors?.name?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Text fontSize='14px' color='#fff'>비밀번호</Text>
            <Input type="password" {...register('password')} placeholder='비밀번호를 입력해주세요.' />
            {errors?.password?.message && <ErrorMsg>{errors?.password?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Text fontSize='14px' color='#fff'>비밀번호 확인</Text>
            <Input type="password" {...register('passwordConfirm')} placeholder='비밀번호 확인을 입력해주세요.' />
            {errors?.passwordConfirm?.message && <ErrorMsg>{errors?.passwordConfirm?.message}</ErrorMsg>}
          </InputContainer>
          <Button type='submit' width='100%' radius='8px' bgColor='#4f4f4f' color='#bdbdbd' fontWeight={700} padding='14px'>회원가입하기</Button>
        </Form>
      </SignupForm>
    </Background>
    
  )
}

export default SignupPresenter;