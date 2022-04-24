import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client'
import '../styles/globals.css'
import { createUploadLink } from 'apollo-upload-client';
import { onError } from '@apollo/client/link/error';
import GlobalStyles from '../src/commons/styles/globalStyles'
import Layout from '../src/commons/layout'
import { createContext, useState } from 'react'
import getAccessToken from '../src/commons/getAccessToken/getAccessToken';

// 전역상태로 보낼것들
export const GlobalContext = createContext({
  accessToken: '',
  setAccessToken: (__:string) => {},
  userData: {
    name: '',
    _id: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    userPoint: {
      _id: '',
      amount: '',
      createdAt: '',
      updatedAt: ''
    }
  },
  setUserData: (__:any) => {},
})
// 전역상태를 쓸 것임
// LoginContainer에서 받은 토큰을 _app까지 옮겨야한다.
// 나중에 모든 query랑 mutation에 토큰이 들어가도록 설정한다.

function MyApp({ Component, pageProps }) {
  const[accessToken, setAccessToken] = useState('');
  const[userData, setUserData] = useState();

  const uploadLink = createUploadLink({
    uri: 'https://backend04.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    Credentials: 'include',
  })

  // refresh token 발급용
  const errorLink = onError(({graphQLErrors, operation, forward})=> {
    // graphQLErrors: 쿼리랑 뮤테이션의 모든 에러가 들어가있음
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              // 이 위치는 Apollo & Graphql이 완성되기전에 graphql함수를 쓴다.
              // 그래서 useQuery랑 useMutation을 쓰지 못한다.
              // -> 앱이 만들어지기전에  apollo & graphql을 쓰지 못하기 때문에 axios사용
              authorization: `Bearer ${getAccessToken({setAccessToken})}`
            }
          });
          return forward(operation)
        }
      }
    }
  })

  const client = new ApolloClient({
    // 서버 클라이언트 연결
    link: ApolloLink.from([errorLink, uploadLink]),
    // 데이터를 가져오기전에 캐시메모리를 먼저 확인해 동일한 쿼리나 뮤테이션이 있다면 캐시메모리에서 가져옴
    cache: new InMemoryCache()
  });

  const value = {
    accessToken,
    setAccessToken,
    userData,
    setUserData
  }

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
