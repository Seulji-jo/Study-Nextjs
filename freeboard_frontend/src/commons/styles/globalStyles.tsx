import {Global, css} from '@emotion/react';

const reset = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Noto Sans Kr, Roboto, OpenSans';
  }
  a {
    color: #333;
    &:hover {
      color: #333;
    }
  }
`

const GlobalStyles = () => {
  return <Global styles={reset} />
}

export default GlobalStyles;