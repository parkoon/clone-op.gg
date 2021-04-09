import styled from 'styled-components'
import theme from '../../../assets/styles/theme'
import calculator from '../../../lib/calculator'
import CircularRateBar from '../../CircularRateBar'
import KDAPoint from '../../KDAPoint'
import { Text } from '../../Typography'
import { ReduceSummary } from '../helper'

function SummaryField({ totalGame, win, kill, assist, death }: ReduceSummary) {
  return (
    <>
      <CircularRateBar win={win} loss={totalGame - win} />
      <Column>
        <KDAPoint kill={kill} assist={assist} death={death} size="sm" />
        <Text fontSize={16} style={{ marginTop: 7 }}>
          <Text color={theme.color.green}>{calculator.kda(kill, assist, death)}:1</Text>{' '}
          <Text color={theme.color.red}>({calculator.killShare(kill, assist, death)}%)</Text>
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
