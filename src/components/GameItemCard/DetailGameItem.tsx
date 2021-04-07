import React from 'react'
import styled from 'styled-components'
import useFetchMatchDetail from '../../hooks/useMatchDetail'
import formatter from '../../lib/formatter'
import Image from '../Image'
import { Text } from '../Typography'

type Props = {
  gameId: string
}
function DetailGameItem({ gameId }: Props) {
  const { initialLoading, teams } = useFetchMatchDetail(gameId)

  if (initialLoading) return <span>로딩중</span>
  return (
    <Wrapper>
      <Column>
        {teams[0].players.map(({ summonerId, summonerName, champion }, index) => (
          <Image
            key={summonerId}
            src={champion.imageUrl}
            width="20"
            height="20"
            label={<Text>{formatter.dotdotdot(summonerName)}</Text>}
            shape="square"
            wrapperStyle={{ marginBottom: 2 }}
          />
        ))}
      </Column>
      <Column>
        {teams[1].players.map(({ summonerId, summonerName, champion }, index) => (
          <Image
            key={summonerId}
            src={champion.imageUrl}
            width="20"
            height="20"
            label={<Text>{formatter.dotdotdot(summonerName)}</Text>}
            shape="square"
            wrapperStyle={{ marginBottom: 2 }}
          />
        ))}
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const Column = styled.div`
  width: 85px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`

export default DetailGameItem
