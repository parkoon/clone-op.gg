import { FC } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  /**
   * Text Color
   * Default - black
   */
  color?: 'grey' | 'blue' | 'red' | 'green' | 'orange' | 'black' | 'white'

  /**
   * Font Weight
   * Default - false
   */
  bold?: boolean

  /**
   * Font Size
   * Default - 14
   */
  fontSize?: number
}

const Text = styled.span<Props>`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};

  color: ${({ color, theme }) => (color ? theme.color[color] : theme.color.black)};
`

export default Text
