import { ReactNode } from 'react'
import styled from 'styled-components'
import { Text } from '../Typography'

type Props = {
  content: string | ReactNode
}
function EmptyHistory({ content }: Props) {
  return (
    <Wrapper>
      <Text align="center" style={{ lineHeight: 1.5 }}>
        {content}
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.grey[4]};
  font-size: 13px;
  padding: 15px;
  min-height: 80px;
`

export default EmptyHistory
