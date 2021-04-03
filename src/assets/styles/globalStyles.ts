import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.color.black};
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
