import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string
      white: string
      grey: string
      blue: string
      red: string
      green: string
      orange: string
    }
  }
}
