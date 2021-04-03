import { FC } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
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
  backgroundColor?: 'grey' | 'orange' | 'tomato'

  /**
   * Reverse of Font Color
   * Default - false
   *
   * When False, Font color will be darken
   */
  reverse?: boolean
}

const Badge: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.span`
  border-radius: 2px;
  padding: 5px;
  background: ${({ theme }) => theme.color.grey[0]};
  color: ${({ theme }) => theme.color.grey[1]};
  font-size: 11px;
`

export default Badge
