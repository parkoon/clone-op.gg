import { FC } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  /**
   * Text Color
   * Default - black
   */
  color?: string

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

  /**
   * Display Block
   * Default - false
   */
  block?: boolean
}

const Text = styled.span<Props>`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
  ${({ block }) =>
    block &&
    css`
      display: block;
    `};

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : 'inherit')};

  color: ${({ color, theme }) => color || theme.color.black};
`

export default Text
