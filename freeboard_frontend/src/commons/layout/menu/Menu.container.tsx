import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type LinkNavProps = {
  isOnPage: boolean;
}

const MenuContainer = () => {
  const Navigation = styled.ul`
    padding: 18px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background-color: #FFD600;

    & > li {
      display: flex;
      align-items: center;
      
      &:not(:first-child):before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 20px;
        background-color: #fff;
        margin-right: 40px;
      }
      
    }
  `
  const LinkNav = styled.li<LinkNavProps>`
    a {
      color: ${props => props.isOnPage ? '#514400' : '#AB9000'};
      font-weight: ${props => props.isOnPage ? '700' : '500'};
    }
    
  `

  const [onPage, setOnPage] = useState({
    boardList: true,
    market: false,
    myPage: false,
  })
  const handlePage = (e, path) => {
    const resetPage = {
      boardList: false,
      market: false,
      myPage: false,
    }
    if (path === '/list') setOnPage({...resetPage, boardList: true});
    else if (path === '/market') setOnPage({...resetPage, market: true});
    else setOnPage({...resetPage, myPage: true});
  }

  return (
    <nav>
      <Navigation>
        <LinkNav isOnPage={onPage.boardList}>
          <Link href="/board/list">
            <a onClick={(e) => handlePage(e, '/list')}>자유게시판</a>
          </Link>
        </LinkNav>
        <LinkNav isOnPage={onPage.market}>
          <Link href="/board/list">
            <a onClick={(e) => handlePage(e, '/market')}>중고마켓</a>
          </Link>
        </LinkNav>
        <LinkNav isOnPage={onPage.myPage}>
          <Link href="/board/list">
            <a onClick={(e) => handlePage(e, '/mypage')}>마이페이지</a>
          </Link>
        </LinkNav>
      </Navigation>
    </nav>
  )
}

export default MenuContainer;