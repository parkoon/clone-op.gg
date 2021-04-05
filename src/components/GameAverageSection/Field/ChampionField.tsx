import ChampionProfile from '../../ChampionProfile'
import { VerticalDivider } from '../../Divider'
import { Text } from '../../Typography'

function ChampionField() {
  return (
    <>
      <ChampionProfile
        title="신지드"
        subtitle={
          <>
            <Text fontSize={11} color="red" bold>
              70%
            </Text>
            <Text fontSize={11}>(7승 3패)</Text>
            <VerticalDivider size={10} gutter={7} />
            <Text fontSize={11} color="orange" bold>
              13.01평점
            </Text>
          </>
        }
        src=""
        size="sm"
      />
      <ChampionProfile
        title="신지드"
        subtitle={
          <>
            <Text fontSize={11} color="red" bold>
              70%
            </Text>
            <Text fontSize={11}>(7승 3패)</Text>
            <VerticalDivider size={10} gutter={7} />
            <Text fontSize={11} color="orange" bold>
              13.01평점
            </Text>
          </>
        }
        src=""
        size="sm"
      />
      <ChampionProfile
        title="신지드"
        subtitle={
          <>
            <Text fontSize={11} color="red" bold>
              70%
            </Text>
            <Text fontSize={11}>(7승 3패)</Text>
            <VerticalDivider size={10} gutter={7} />
            <Text fontSize={11} color="orange" bold>
              13.01평점
            </Text>
          </>
        }
        src=""
        size="sm"
      />
    </>
  )
}

export default ChampionField
