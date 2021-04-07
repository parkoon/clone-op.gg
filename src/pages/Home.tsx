import styled from 'styled-components'
import { HorizontalDivider } from '../components/Divider'
import LeagueSection from '../components/LeagueSection'
import MatchedGameSection from '../components/MatchedGameSection'
import MostChampionSection from '../components/MostChampionSection'
import SummonerProfile from '../components/SummonerProfile'
import Container from '../layout/Container'

function SearchSummoner() {
  return (
    <>
      <Container>
        <SummonerProfile />
      </Container>

      <HorizontalDivider />

      <Container>
        <Content>
          <article>
            <LeagueSection />

            <MostChampionSection />
          </article>
          <article>
            <MatchedGameSection />
          </article>
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
