import React from 'react'
import theme from '../../../assets/styles/theme'
import ChampionProfile from '../../ChampionProfile'
import { Text } from '../../Typography'

function RankField() {
  return (
    <>
      <Text fontSize={12} color={theme.color.grey[6]}>
        선호 포지션 (랭크)
      </Text>
      <ChampionProfile
        title="신지드"
        subtitle={
          <>
            <Text fontSize={11} color="red" bold>
              70%
            </Text>
            <Text fontSize={11}>(7승 3패)</Text> |{' '}
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
            <Text fontSize={11}>(7승 3패)</Text> |{' '}
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

export default RankField
