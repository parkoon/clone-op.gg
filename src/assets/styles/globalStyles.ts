import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
