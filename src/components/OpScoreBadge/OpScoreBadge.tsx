import { darken } from 'polished'
import { FC } from 'react'
import styled from 'styled-components'
import theme from '../../assets/styles/theme'
type Props = {
  /**
   * OpScoreBadge Background Color
   */
  backgroundColor: keyof typeof theme.color
}

const OpScoreBadge: FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.span<Props>`
  border-radius: 100px;
  background: ${({ backgroundColor, theme }) => theme.color[backgroundColor]};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid
    ${({ theme, backgroundColor }) => darken(0.2, theme.color[backgroundColor] as string)};
  font-size: 10px;
  padding: 3px 5px;
`

export default OpScoreBadge
