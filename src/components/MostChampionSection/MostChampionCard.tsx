import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import calculator from '../../lib/calculator'
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
  return (
    <Wrapper>
      <ChampionProfile
        title={name}
        subtitle={`CS ${cs} (${calculator.csPerMinute(cs)})`}
        src={imageUrl}
      />
      <Column>
        <Text color={theme.color.grey[6]} fontSize={13} block bold>
          2.47:1 평점
        </Text>
        <Text fontSize={11} color={theme.color.disabled}>
          {kills} / {deaths} / {assists}
        </Text>
      </Column>
      <Column>
        <Text color={theme.color.grey[6]} fontSize={13} block bold>
          {calculator.winRate(wins, losses)}%
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
