import styled, { css } from 'styled-components'
import { FONT_SIZE } from './constants'

type FontSizeKey = keyof typeof FONT_SIZE
type Props = {
  kill: number
  death: number
  assist: number
  size?: FontSizeKey
}
function KDAPoint({ size = 'md', kill, death, assist }: Props) {
  return (
    <Wrapper size={size}>
      <Point divider>{kill}</Point>
      <DeathPoint divider>{death}</DeathPoint>
      <Point>{assist}</Point>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ size: FontSizeKey }>`
  font-size: ${({ size }) => FONT_SIZE[size]};
  font-weight: bold;
`

const Point = styled.span<{ divider?: boolean }>`
  position: relative;

  ${({ divider }) =>
    divider &&
    css`
      &::after {
        content: '/';
        padding: 0 2px;
        color: ${({ theme }) => theme.color.grey[3]};
      }
    `}
`

const DeathPoint = styled(Point)`
  color: ${({ theme }) => theme.color.red};
`

export default KDAPoint
