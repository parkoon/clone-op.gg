import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import ChampionProfile from '../ChampionProfile'
import { Text } from '../Typography'

function ChampionWinRateCard() {
  return (
    <Wrapper>
      <ChampionProfile title="신지드" subtitle="CS 67.8 (2.4)" src="" />
      <Column>
        <Text color={theme.color.grey[6]} fontSize={13} block bold>
          2.47:1 평점
        </Text>
        <Text fontSize={11} color={theme.color.grey[4]}>
          6.6 / 3.0 / 6.8
        </Text>
      </Column>
      <Column>
        <Text color={theme.color.grey[6]} fontSize={13} block bold>
          69%
        </Text>
        <Text fontSize={11} color={theme.color.grey[4]}>
          35게임
        </Text>
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  padding: 10px 15px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.grey[3]};
  }
`

const Column = styled.div`
  > span {
    margin-bottom: 4px;
  }
`

export default ChampionWinRateCard
