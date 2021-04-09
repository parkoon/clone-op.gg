import styled from 'styled-components'
import calculator from '../../lib/calculator'
import colorGenerator from '../../lib/colorGenerator'
import formatter from '../../lib/formatter'
import { WinRate } from '../../model/WinRate'
import ChampionProfile from '../ChampionProfile'
import { RankRateBar } from '../RankRate'
import { Text } from '../Typography'

function MostChampionWeekCard({ name, imageUrl, wins, losses }: WinRate) {
  const winRate = calculator.winRate(wins, losses)
  return (
    <Wrapper>
      <ChampionProfile title={formatter.dotdotdot(name)} src={imageUrl} />
      <Column>
        <Text color={colorGenerator.winRate(winRate)} fontSize={13} block bold>
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
  grid-template-columns: 1fr 27px 120px;
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
