import styled from 'styled-components'
import calculator from '../../../lib/calculator'
import colorGenerator from '../../../lib/colorGenerator'
import CircularRateBar from '../../CircularRateBar'
import KDAPoint from '../../KDAPoint'
import { Text } from '../../Typography'
import { ReduceSummary } from '../helper'

function SummaryField({ totalGame, win, kill, assist, death }: ReduceSummary) {
  const kda = calculator.kda(kill, assist, death)
  const killShare = calculator.killShare(kill, assist, death)
  return (
    <>
      <CircularRateBar win={win} loss={totalGame - win} />
      <Column>
        <KDAPoint kill={kill} assist={assist} death={death} size="sm" />
        <Text fontSize={16} style={{ marginTop: 7 }}>
          <Text color={colorGenerator.kda(Number(kda))}>{kda}:1</Text>{' '}
          <Text color={colorGenerator.winRate(killShare)}>({killShare}%)</Text>
        </Text>
      </Column>
    </>
  )
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 35px;
`

export default SummaryField
