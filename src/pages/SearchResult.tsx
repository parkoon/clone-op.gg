import { useEffect } from 'react'
import styled from 'styled-components'
import { HorizontalDivider } from '../components/Divider'
import Empty from '../components/Empty'
import LeagueSection from '../components/LeagueSection'
import MatchedGameSection from '../components/MatchedGameSection'
import MostChampionSection from '../components/MostChampionSection'
import SummonerProfile from '../components/SummonerProfile'
import { useSummonerInfo } from '../hooks/fetch/useSummonerInfo'
import useSummonerHistoryStorage from '../hooks/storage/useSummonerHistoryStorage'
import Container from '../layout/Container'

function SearchSummoner() {
  const { summoner } = useSummonerInfo()
  const { addHistory } = useSummonerHistoryStorage()

  useEffect(() => {
    if (summoner && summoner.name) {
      addHistory({
        favorite: -1,
        name: summoner.name,
        previousTiers: summoner.previousTiers,
        profileImageUrl: summoner.profileImageUrl,
      })
    }
  }, [summoner, addHistory])

  if (!summoner) {
    return <Empty />
  }
  return (
    <>
      <Container>
        <SummonerProfile />
      </Container>
      <HorizontalDivider />
      <Container>
        <Content>
          <div>
            <LeagueSection />
            <MostChampionSection />
          </div>
          <div>
            <MatchedGameSection />
          </div>
        </Content>
      </Container>
    </>
  )
}

const Content = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 10px;
`

export default SearchSummoner
