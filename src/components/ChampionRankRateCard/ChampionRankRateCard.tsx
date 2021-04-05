import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import ChampionProfile from '../ChampionProfile'
import { RankRateBar } from '../RankRate'
import { Text } from '../Typography'

function ChampionRankRateCard() {
  return (
    <Wrapper>
      <ChampionProfile title="신지드" src="" />
      <Column>
        <Text color={theme.color.grey[6]} fontSize={13} block bold>
          69%
        </Text>
      </Column>
      <Column>
        <RankRateBar win={6} loss={7} />
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

export default ChampionRankRateCard
