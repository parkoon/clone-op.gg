import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      header: string
      black: string
      white: string
      blue: string
      red: string
      green: string
      orange: string
      cement: string
      purple: string
      gold: string
      disabled: string
      grey: {
        0: string
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
      }
    }
  }
}
