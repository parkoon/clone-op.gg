import { FC } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import theme from '../../assets/styles/theme'
type Props = {
  /**
   * Badge Share
   * Default - round
   */
  shape?: 'round' | 'square'

  /**
   * Badge Background Color
   * Default - Grey
   */
  backgroundColor?: keyof typeof theme.color

  /**
   * Reverse of Font Color
   * Default - false
   *
   * When False, Font color will be darken
   */
  reverse?: boolean
}

const Badge: FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.span<Props>`
  border-radius: ${({ shape }) => (shape === 'round' ? '100px' : '2px')};
  padding: 4px 7px;
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.color[backgroundColor] : theme.color.grey[0]};
  color: ${({ theme, reverse }) => (reverse ? theme.color.white : theme.color.grey[1])};
  font-size: 11px;
`

export default Badge
