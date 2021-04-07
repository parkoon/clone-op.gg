import theme from '../../../assets/styles/theme'
import calculator from '../../../lib/calculator'
import { Position } from '../../../model/Position'
import ChampionProfile from '../../ChampionProfile'
import { VerticalDivider } from '../../Divider'
import { Text } from '../../Typography'

type Props = {
  positions: Position[]
}

const positionMap: Record<string, string> = {
  ADC: '원딜',
  TOP: '탑',
  MID: '미드',
  SUP: '서포트',
  JNG: '정글',
}
function PositionField({ positions }: Props) {
  return (
    <>
      <Text fontSize={12} color={theme.color.grey[6]}>
        선호 포지션 (랭크)
      </Text>

      {positions.map(({ position, wins, losses }, index) => (
        <ChampionProfile
          key={index}
          title={positionMap[position]}
          subtitle={
            <>
              <Text fontSize={11} color="red" bold>
                ?
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
          src=""
          size="sm"
        />
      ))}
    </>
  )
}

export default PositionField
