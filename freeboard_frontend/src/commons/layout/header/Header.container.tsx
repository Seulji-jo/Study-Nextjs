import Image from 'next/image';
import Link from 'next/link';
import { Header, HeaderWrapper, LoginWrapper } from "./Header.style";
import { Button } from "../../styles/index";
import Logo from '../../../../assets/img/logo.png'

const HeaderContainer = () => {
  return (
    <Header>
      <HeaderWrapper>
        <Image src={Logo} alt='logo' width={168} height={25.6} />
        <LoginWrapper>
          <Button padding='0' fontSize='1.4rem' bgColor='transparent' color='#333' fontWeight={700}>
            <Link href='/login'>
            로그인
            </Link>
            </Button>
          <Button padding='10px 16px' fontSize='1.4rem' bgColor='#FFD600' color='#333' radius='10px' fontWeight={700}>
            <Link href='/signup'>
            회원가입
            </Link>
            </Button>
        </LoginWrapper>
      </HeaderWrapper>
    </Header>
  )
}

export default HeaderContainer;