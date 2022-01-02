import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    // 서버 클라이언트 연결
    uri: 'http://backend03.codebootcamp.co.kr/graphql',
    // 데이터를 가져오기전에 캐시메모리를 먼저 확인해 동일한 쿼리나 뮤테이션이 있다면 캐시메모리에서 가져옴
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
