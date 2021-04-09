import React from 'react'
import { useSummonerInfo } from '../../hooks/fetch/useSummonerInfo'
import LeagueCard from './LeagueCard'
// import UnLeagueCard from '../LeagueCard/UnLeagueCard'

function LeagueSection() {
  const { initialLoading, summoner } = useSummonerInfo()

  if (initialLoading) return <span>로딩중</span>

  const { leagues } = summoner

  return (
    <article>
      {leagues.map((league, index) => (
        <LeagueCard key={index} {...league} />
      ))}

      {/* <UnLeagueCard wrapperStyle={{ marginBottom: 8 }} /> */}
    </article>
  )
}

export default LeagueSection
