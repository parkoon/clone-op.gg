import styled from 'styled-components'
import CircularRateBar from '../CircularRateBar'
import { ChampionField, RankField } from './Field'

function GameAverageSection() {
  return (
    <Wrapper>
      <Column>
        <CircularRateBar win={14} loss={9} />
      </Column>

      <ChampionColum>
        <ChampionField />
      </ChampionColum>

      <RankColumn>
        <RankField />
      </RankColumn>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 24px 0 8px;

  border: solid 1px ${({ theme }) => theme.color.grey[3]};
  margin-top: -1px;
`

const Column = styled.div`
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
  grid-template-rows: 34px repeat(2, 1fr);
`

export default GameAverageSection
