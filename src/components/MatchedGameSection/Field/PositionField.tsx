import { ReactNode } from 'react'
import theme from '../../../assets/styles/theme'
import calculator from '../../../lib/calculator'
import { Position } from '../../../model/Position'
import ChampionProfile from '../../ChampionProfile'
import { VerticalDivider } from '../../Divider'
import { ADCPosition, JunglePosition, MidPosition, SupportPosition } from '../../Icons'
import TopPosition from '../../Icons/TopPosition'
import { Text } from '../../Typography'

type Props = {
  positions: Position[]
  totalGameCount: number
}

function PositionField({ positions, totalGameCount }: Props) {
  console.log('positions', positions, totalGameCount)
  return (
    <>
      <Text fontSize={12} color={theme.color.grey[6]}>
        선호 포지션 (랭크)
      </Text>

      {positions.map(({ position, wins, losses, games }, index) => (
        <ChampionProfile
          key={index}
          title={positionMap[position].title}
          subtitle={
            <>
              <Text fontSize={11} color={theme.color.blue} bold>
                {calculator.positionRate(games, totalGameCount)}%
              </Text>
              <VerticalDivider size={10} gutter={7} />
              <Text fontSize={11} color={theme.color.grey[7]}>
                Win Rate
              </Text>{' '}
              <Text fontSize={11} color={theme.color.grey[7]} bold>
                {calculator.winRate(wins, losses)}%
              </Text>
            </>
          }
          icon={positionMap[position].icon}
          size="sm"
        />
      ))}
    </>
  )
}

const positionMap: Record<string, { title: string; icon: ReactNode }> = {
  ADC: {
    title: '원딜',
    icon: <ADCPosition />,
  },
  TOP: {
    title: '탑',
    icon: <TopPosition />,
  },
  MID: {
    title: '미드',
    icon: <MidPosition />,
  },
  SUP: {
    title: '서포트',
    icon: <SupportPosition />,
  },
  JNG: {
    title: '정글',
    icon: <JunglePosition />,
  },
}

export default PositionField
