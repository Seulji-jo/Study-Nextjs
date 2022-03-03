import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { Isignup } from './Signup.types';
import {Background, CloseBtn, SignupForm, Form, InputContainer, Input, ErrorMsg} from './Signup.style'
import { Text, Button } from '../styles';

import bgImg from '../../../assets/img/signupBg.png';
import closeBtn from '../../../assets/img/ic_cancel.png'

const SignupPresenter:React.FC<Isignup> = ({closePage}) => {
  const schema = yup.object({
    email: yup.string().required('이메일은 필수 입력입니다!').email('이메일 형식을 지켜주세요!'),
    name: yup.string().required('이름은 필수 입력입니다!').min(5, '이름은 5자 이상 작성해주세요.'),
    password: yup.string().required('비밀번호는 필수 입력입니다.'),
    // password: yup.string().matches(정규표현식,'error msg'),
    oneOf : yup.string().required('비밀번호는 필수 입력입니다.')
  });

  const {register, handleSubmit, formState:{errors},getValues} = useForm({resolver: yupResolver(schema)});
  //getValues: 폼의 value확인 -> 꼭 필요한것은 아니다!

  console.log(errors);
  const handleCreateUser = async() => {
    
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
            <Input type="text" {...register('email')} />
            {errors?.email?.message&& <ErrorMsg>{errors?.email?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Text fontSize='14px' color='#fff'>이름</Text>
            <Input type="text" {...register('name')} />
            {errors?.name?.message&& <ErrorMsg>{errors?.name?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Text fontSize='14px' color='#fff'>비밀번호</Text>
            <Input type="text" {...register('password')} />
            {errors?.password?.message&& <ErrorMsg>{errors?.password?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Text fontSize='14px' color='#fff'>비밀번호 확인</Text>
            <Input type="text" {...register('oneOf')} />
            {errors?.oneOf?.message&& <ErrorMsg>{errors?.oneOf?.message}</ErrorMsg>}
          </InputContainer>
          <Button type='submit' width='100%' radius='8px' bgColor='#4f4f4f' color='#bdbdbd' fontWeight={700} padding='14px'>회원가입하기</Button>
        </Form>
      </SignupForm>
    </Background>
    
  )
}

export default SignupPresenter;