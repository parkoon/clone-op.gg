import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import calculator from '../../lib/calculator'
import colorGenerator from '../../lib/colorGenerator'
import formatter from '../../lib/formatter'
import { Champion } from '../../model/Champion'
import ChampionProfile from '../ChampionProfile'
import { Text } from '../Typography'

function MostChampionCard({
  assists,
  cs,
  deaths,
  games,
  id,
  imageUrl,
  kills,
  losses,
  name,
  rank,
  wins,
}: Champion) {
  const kda = calculator.kda(kills, assists, deaths)
  const winRate = calculator.winRate(wins, losses)
  return (
    <Wrapper>
      <ChampionProfile
        title={formatter.dotdotdot(name)}
        subtitle={`CS ${cs} (${calculator.csPerMinute(cs)})`}
        src={imageUrl}
      />
      <Column>
        <Text color={colorGenerator.kda(Number(kda))} fontSize={13} block bold>
          {kda} 평점
        </Text>
        <Text fontSize={11} color={theme.color.disabled}>
          {kills} / {deaths} / {assists}
        </Text>
      </Column>
      <Column>
        <Text color={colorGenerator.winRate(winRate)} fontSize={13} block bold>
          {winRate}%
        </Text>
        <Text fontSize={11} color={theme.color.grey[4]}>
          {wins + losses}게임
        </Text>
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 82px 34px;
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

export default MostChampionCard
