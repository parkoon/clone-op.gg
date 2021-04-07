import styled from 'styled-components'
import theme from '../../../assets/styles/theme'
import { Summary } from '../../../model/Summary'
import CircularRateBar from '../../CircularRateBar'
import KDAPoint from '../../KDAPoint'
import { Text } from '../../Typography'

function SummaryField({ kills, assists, losses, wins }: Summary) {
  return (
    <>
      <CircularRateBar win={wins} loss={losses} />
      <Column>
        <KDAPoint kill={kills} assist={assists} death={losses} size="sm" />
        <Text fontSize={16} style={{ marginTop: 7 }}>
          <Text color={theme.color.green}>3.45:1</Text> <Text color={theme.color.red}>(58%)</Text>
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
