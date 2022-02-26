import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const SignupPresenter = () => {
  const schema = yup.object({
    email: yup.string().required('이메일은 필수 입력입니다!').email('이메일 형식을 지켜주세요!'),
    // name: yup.string().min(5, 'error msg'),
    // password: yup.string().matches(정규표현식,'error msg'),
    // oneOf : 동일한 비번 체크
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
    <>
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <input type="text" {...register('email')} />
      {errors?.email?.message&& <div>{errors?.email?.message}</div>}
      <button type='submit'>회원 가입</button>
    </form>
    </>
  )
}

export default SignupPresenter;