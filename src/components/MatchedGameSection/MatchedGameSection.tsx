import { useMemo } from 'react'
import styled from 'styled-components'
import { useMatchInfo } from '../../hooks/fetch/useMatchInfo'
import { MatchedGameSectionLoading } from '../Loading'
import { ResultItem, ResultNavigation } from '../ResultNavigation'
import { GameResultField, MostChampionField, PositionField, SummaryField } from './Field'
import { reduceGames } from './helper'

function MatchedGameSection() {
  const { games, positions, setGameType, initialLoading } = useMatchInfo()

  const { summary, champion } = useMemo(() => reduceGames(games), [games])

  return (
    <>
      <ResultNavigation defaultActiveId="all" onChange={setGameType}>
        <ResultItem label="전체" id="all" />
        <ResultItem label="솔로게임" id="solo" />
        <ResultItem label="자유랭크" id="free" />
      </ResultNavigation>

      {initialLoading ? (
        <MatchedGameSectionLoading />
      ) : (
        <>
          <Wrapper>
            <Column>
              <SummaryField {...summary} />
            </Column>

            <ChampionColum>
              <MostChampionField champion={champion} />
            </ChampionColum>

            <RankColumn>
              <PositionField positions={positions} />
            </RankColumn>
          </Wrapper>

          <GameItemWrapper>
            <GameResultField games={games} />
          </GameItemWrapper>
        </>
      )}
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 228px 184px;
  padding: 0 24px 0 8px;

  border: solid 1px ${({ theme }) => theme.color.grey[3]};
  margin-top: -1px;
`

const Column = styled.div<{ direction?: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: center;
  &:not(:last-child) {
    border-right: solid 1px ${({ theme }) => theme.color.grey[3]};
  }
  padding: 16px 0 16px 16px;
`

const ChampionColum = styled(Column)`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 14px;
`
export const RankColumn = styled(Column)`
  display: grid;
  align-items: flex-start;
  grid-template-rows: 34px repeat(2, 1fr);
`
const GameItemWrapper = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-row-gap: 8px;
  margin-top: 16px;
`

export default MatchedGameSection
