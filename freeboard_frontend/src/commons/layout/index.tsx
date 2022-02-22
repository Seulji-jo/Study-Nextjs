import HeaderContainer from './header/Header.container';
import MenuContainer from './menu/Menu.container';
import SlideContainer from './slide/Slide.container';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({children}: ILayout) => {
  return (
  <div>
    <HeaderContainer></HeaderContainer>
    <SlideContainer></SlideContainer>
    <MenuContainer></MenuContainer>
    <div>{children}</div>
  </div>
  )
}

export default Layout;