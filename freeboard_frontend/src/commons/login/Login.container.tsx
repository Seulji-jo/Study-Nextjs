import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useState } from "react";
import { GlobalContext } from '../../../pages/_app';
import { Mutation, MutationLoginUserArgs } from '../types/generated/types';
import LoginPresenter from "./Login.presenter";
import { FETCH_USER_LOGGEDIN, LOGIN_USER } from './Login.queries';

const LoginContainer = () => {
  const {setAccessToken, setUserData} = useContext(GlobalContext);
  const router = useRouter();
  // 1. loginUser: 토큰을 받아오는 뮤테이션
  // 2. fetchUserLoggedIn: 토큰을 이용해 사용자 정보를 가져오는 뮤테이션

  // 현재 백엔드 실정
  // 1. 계정마다 고유의 토큰이 존재
  // 2. 내 계정의 토큰은 계속 똑같음
  // 3. loginUser에 인풋으로 email, password를 입력하면, 토큰 리턴
  // 4. 받은 토큰으로 fetchUserLoggedIn 뮤테이션에 인풋으로 넣음
  // 5. fetchUserLoggedIn가 고유의 토큰을 인식해서 유저 정보를 보내줌
  // 6. 유저 정보에는 이름, 결제내역, 등등이 들어가 있음.
  const [loginUser] = useMutation<Mutation, MutationLoginUserArgs>(LOGIN_USER);
  const client = useApolloClient(); 

  // useQuery(GET): useEffect 처럼 컴포넌트가 실행될 때 바로 실행된다.
  // -> 문제점: 우리가 원하는 위치에서 useQuery를 사용하는 게 아님.
  // fetchUserLoggedIn: getdla. useQuery를 써야됨 but loginUser다음에 써야하는데 useQuery의 한계점이 있기 때문에 쓰는것이 useApolloClient()를 쓴다.

  const handleLogin = async() => {
    try {
      const {data} = await loginUser({
        variables: {
          // ...loginInput,
          email: 'hannah1@test.com',
          password: 'abcd1234'
        }
      });
      // 전역상태에 토큰 넣기
      setAccessToken(data?.loginUser.accessToken)

      const {data:userData} = await client.query({
        query: FETCH_USER_LOGGEDIN,
        context: {
          // 원래 context를 안쓰지만 headers에 무언가를 넣어줄때 사용
          headers: {
            authorization: data?.loginUser.accessToken,
          }
        }
      })
      // 전역상태에 유저 데이터 넣기
      setUserData(userData?.fetchUserLoggedIn);
      // router.push('/board/list')
      router.back()

      console.log(data?.loginUser.accessToken);
      console.log(userData);
    } catch (error) {
      console.log(error);
      
    }
  }

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: ''
  })
  const [isChecked, setIsChecked] = useState(false);

  const handleLoginInput = (e:any) => {
    // 이메일이랑 패워가 모두 입력 됐을 때만 버튼 활성화
    // 1. 상태를 하나 새로 만들어도 됨
    // 2. loginInput => 프레젠터로 넘김
    setLoginInput({
      ...loginInput, [e.target.name] : e.target.value
    })
  }
  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }
  // onkeypress
  return <LoginPresenter isChecked={isChecked} handleCheckbox={handleCheckbox} handleLogin={handleLogin} />
}

export default LoginContainer;