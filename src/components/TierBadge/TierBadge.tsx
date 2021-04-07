import styled from 'styled-components'
import { Text } from '../Typography'

type Props = {
  shortString: string
  tier: string
}
const TierBadge = ({ shortString, tier }: Props) => {
  return (
    <Wrapper>
      <Text bold>{shortString}</Text> <Text>{tier}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.span`
  padding: 1px 5px;
  background: ${({ theme }) => theme.color.grey[2]};
  color: ${({ theme }) => theme.color.grey[6]};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.grey[3]};
  font-size: 11px;
`

export default TierBadge
