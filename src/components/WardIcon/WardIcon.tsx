import styled, { CSSProperties } from 'styled-components'
import { Text } from '../Typography'
import * as Icons from './Icons'

type Props = {
  type: keyof typeof Icons
  count: number
  wrapperStyle?: CSSProperties
}
function WardIcon({ type, count, wrapperStyle }: Props) {
  if (count === 0) return null

  const Icon = Icons[type]
  return (
    <Wrapper style={wrapperStyle}>
      <Icon />
      <Text fontSize={11} style={{ marginLeft: 4 }}>
        제어와드 {count}
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export default WardIcon
