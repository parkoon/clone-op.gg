import styled from 'styled-components'
import { calcPercentage } from './helper'
import { BaseRankRateProps } from './type'

function RankRateBar({ win, loss }: BaseRankRateProps) {
  const { win: winPercent, loss: lossPercent } = calcPercentage(win, loss)

  console.log('winPercent', winPercent)
  console.log('lossPercent', lossPercent)

  return (
    <Wrapper>
      <Win weight={winPercent}>{win}승</Win>
      <Lose weight={lossPercent}>{loss}패</Lose>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 124px;
  height: 24px;
  display: flex;
  color: ${({ theme }) => theme.color.white};
  font-size: 12px;
`

const Bar = styled.div<{ weight: number }>`
  width: ${({ weight }) => `${weight}%`};
  line-height: 24px;
  height: 100%;
  width: 100%;
`

const Win = styled(Bar)`
  background: ${({ theme }) => theme.color.blue};
  text-align: left;
  padding-left: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
const Lose = styled(Bar)`
  background: ${({ theme }) => theme.color.red};
  text-align: right;
  padding-right: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`

export default RankRateBar