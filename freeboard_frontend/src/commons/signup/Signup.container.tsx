import { useRouter } from 'next/router';
import SignupPresenter from './Signup.presenter';

const SignupContainer = () => {
  const router = useRouter()
  const closeSignupPage = () => {
    router.back()
  };
  return <SignupPresenter closePage={closeSignupPage} />
}

export default SignupContainer;