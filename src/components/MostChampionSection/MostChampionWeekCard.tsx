import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import calculator from '../../lib/calculator'
import { WinRate } from '../../model/WinRate'
import ChampionProfile from '../ChampionProfile'
import { RankRateBar } from '../RankRate'
import { Text } from '../Typography'

function MostChampionWeekCard({ name, imageUrl, wins, losses }: WinRate) {
  return (
    <Wrapper>
      <ChampionProfile title={name} src={imageUrl} />
      <Column>
        <Text color={theme.color.disabled} fontSize={13} block bold>
          {calculator.winRate(wins, losses)}%
        </Text>
      </Column>
      <Column>
        <RankRateBar win={wins} loss={losses} />
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 27px 124px;
  align-items: center;
  grid-gap: 7px;

  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.grey[3]};
  }
`

const Column = styled.div`
  > span {
    margin-bottom: 4px;
  }
`

export default MostChampionWeekCard
