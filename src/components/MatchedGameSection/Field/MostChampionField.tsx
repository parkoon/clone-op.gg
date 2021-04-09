import styled from 'styled-components'
import theme from '../../../assets/styles/theme'
import calculator from '../../../lib/calculator'
import colorGenerator from '../../../lib/colorGenerator'
import ChampionProfile from '../../ChampionProfile'
import { VerticalDivider } from '../../Divider'
import { DefaultChampion } from '../../Icons'
import { Text } from '../../Typography'
import { ReduceChampion } from '../helper'

type Props = {
  champion: ReduceChampion
}

const MAX_CHAMPION = 3
function MostChampionField({ champion }: Props) {
  const mostChampions = Object.keys(champion)
    .sort((a, b) => champion[b].pickCount - champion[a].pickCount)
    .slice(0, 3)

  return (
    <>
      {mostChampions.map((championName, index) => {
        const { win, pickCount, kill, assist, death, imageUrl } = champion[championName]

        const loss = Math.abs(pickCount - win)
        const winRate = calculator.winRate(win, loss)
        const kda = calculator.kda(kill, assist, death)

        return (
          <ChampionProfile
            key={index}
            title={championName}
            subtitle={
              <>
                <Text fontSize={11} color={colorGenerator.winRate(winRate)} bold>
                  {winRate}%
                </Text>
                <Text fontSize={11}>
                  ({win}승 {loss}패)
                </Text>
                <VerticalDivider size={10} gutter={7} />
                <Text fontSize={11} color={colorGenerator.kda(Number(kda))} bold>
                  {kda}평점
                </Text>
              </>
            }
            src={imageUrl}
            size="sm"
          />
        )
      })}
      {Array.from({ length: MAX_CHAMPION - mostChampions.length }).map((_, index) => (
        <EmptyChampion key={index} />
      ))}
    </>
  )
}

function EmptyChampion() {
  return (
    <EmptyWrapper>
      <IconWrapper>
        <DefaultChampion />
      </IconWrapper>
      <Text fontSize={11} color={theme.color.grey[4]}>
        챔피언 정보가 없습니다.
      </Text>
    </EmptyWrapper>
  )
}

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-right: 10px;

  background: ${({ theme }) => theme.color.grey[2]};
`

export default MostChampionField
