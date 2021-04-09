import { useMemo } from 'react'
import styled from 'styled-components'
import calculator from '../../lib/calculator'

type Props = {
  win: number
  loss: number
}
const RADIUS = 35
function CircularRateBar({ win, loss }: Props) {
  const circumference = useMemo(() => Math.PI * (RADIUS * 2), [])
  const winRate = useMemo(() => calculator.winRate(win, loss), [win, loss])
  const winDashoffset = useMemo(() => ((100 - winRate) / 100) * circumference, [
    winRate,
    circumference,
  ])

  return (
    <Wrapper data-winrate={`${winRate}`}>
      <Header>
        {win + loss}전 {win}승 {loss}패
      </Header>
      <SVG
        win={winDashoffset}
        width="90"
        height="90"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r={RADIUS}
          cx="45"
          cy="45"
          fill="transparent"
          strokeDasharray="219.9"
          strokeDashoffset="0"
        />
        <circle
          r={RADIUS}
          cx="45"
          cy="45"
          fill="transparent"
          strokeDasharray="219.9"
          strokeDashoffset="170"
        />
      </SVG>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 90px;

  &::after {
    position: absolute;
    display: block;
    left: 50%;
    top: calc(50% + 10px);
    font-weight: bold;
    transform: translate(-50%, -50%);
    content: attr(data-winrate) '%';
  }
`

const Header = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.color.grey[5]};
  margin-bottom: 14px;
`

const SVG = styled.svg<{ win: number }>`
  transform: rotate(90deg);
  stroke: ${({ theme }) => theme.color.red};
  stroke-width: 13px;

  circle:nth-child(2) {
    stroke-dashoffset: ${({ win }) => win};
    stroke: ${({ theme }) => theme.color.blue};
  }
`

export default CircularRateBar
