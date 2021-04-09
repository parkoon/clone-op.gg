import React from 'react'
import { useSummonerInfo } from '../../hooks/fetch/useSummonerInfo'
import { LeagueSectionLoading } from '../Loading'
import LeagueCard from './LeagueCard'

function LeagueSection() {
  const { initialLoading, summoner } = useSummonerInfo()

  if (initialLoading) return <LeagueSectionLoading />

  const { leagues } = summoner

  return (
    <article>
      {leagues.map((league, index) => (
        <LeagueCard key={index} {...league} />
      ))}
    </article>
  )
}

export default LeagueSection
