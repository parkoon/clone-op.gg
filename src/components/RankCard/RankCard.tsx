import styled from 'styled-components'
import { Text } from '../Typography'
import { POSITION_MAP } from './constants'
import { BaseRankCardProps } from './types'

function RankCard({
  solo,
  unRank,
  position,
  gameCount,
  rank,
  lp,
  win,
  loss,
  winningRate,
}: BaseRankCardProps) {
  if (unRank) {
    return (
      <Wrapper>
        <Image src="https://picsum.photos/id/237/200/300" />

        <InfoWrapper>
          <Text fontSize={11}>{solo ? '솔로' : '자유 5:5'} 랭크</Text>
          <Text fontSize={12} bold>
            {POSITION_MAP[position]} (총 {gameCount}게임)
          </Text>
          <Text fontSize={15} bold color="blue">
            {rank}
          </Text>
          <div>
            <Text fontSize={12} bold>
              {lp} LP
            </Text>
            <Text fontSize={12}>
              / {win}승 {loss}패
            </Text>
          </div>
          <Text fontSize={12}>승률 {winningRate}%</Text>
        </InfoWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Image src="https://picsum.photos/id/237/200/300" />

      <InfoWrapper>
        <Text fontSize={11}>{solo ? '솔로' : '자유 5:5'} 랭크</Text>
        <Text fontSize={12} bold>
          {POSITION_MAP[position]} (총 {gameCount}게임)
        </Text>
        <Text fontSize={15} bold color="blue">
          {rank}
        </Text>
        <div>
          <Text fontSize={12} bold>
            {lp} LP
          </Text>
          <Text fontSize={12}>
            / {win}승 {loss}패
          </Text>
        </div>
        <Text fontSize={12}>승률 {winningRate}%</Text>
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
`
const InfoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  padding-left: 8px;
`

const Image = styled.img`
  width: 104px;
  height: 104px;
  object-fit: cover;
`
export default RankCard
