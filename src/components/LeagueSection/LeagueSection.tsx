import React from 'react'
import { useSummonerInfo } from '../../hooks/fetch/useSummonerInfo'
import { LeagueSectionLoading } from '../Loading'
import LeagueCard from './LeagueCard'
// import UnLeagueCard from '../LeagueCard/UnLeagueCard'

function LeagueSection() {
  const { initialLoading, summoner } = useSummonerInfo()

  if (initialLoading) return <LeagueSectionLoading />

  const { leagues } = summoner

  return (
    <article>
      {leagues.map((league, index) => (
        <LeagueCard key={index} {...league} />
      ))}

      {/* TODO: unranked? */}
      {/* <UnLeagueCard wrapperStyle={{ marginBottom: 8 }} /> */}
    </article>
  )
}

export default LeagueSection
