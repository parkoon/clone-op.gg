import styled, { CSSProperties } from 'styled-components'
import theme from '../../assets/styles/theme'
import { Text } from '../Typography'

import { League } from '../../model/Summoner'
import calculator from '../../lib/calculator'
import Image from '../Image'

type Props = {
  wrapperStyle?: CSSProperties
} & League
function LeagueCard({ tierRank, wins, losses, wrapperStyle }: Props) {
  return (
    <Wrapper style={wrapperStyle}>
      <Image src={tierRank.imageUrl} width="100" height="100" shape="square" />
      <InfoWrapper>
        <Text fontSize={11}>{tierRank.name}</Text>
        <Text bold>탑 (총 {wins + losses}게임)</Text>
        <Text fontSize={15} bold color={theme.color.blue}>
          {tierRank.tier}
        </Text>
        <div>
          <Text bold>{tierRank.lp} LP</Text>
          <Text>
            / {wins}승 {losses}패
          </Text>
        </div>
        <Text fontSize={12}>승률 {calculator.winRate(wins, losses)}%</Text>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  min-width: 300px;
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.color.grey[3]};
  background: ${({ theme }) => theme.color.grey[0]};
  margin-bottom: 8px;
`
const InfoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  padding-left: 8px;
  font-size: 12px;
`

export default LeagueCard
