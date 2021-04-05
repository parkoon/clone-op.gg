import styled from 'styled-components'
import Badge from '../components/Badge'
import ChampionRankRateCard from '../components/ChampionRankRateCard'
import ChampionWinRateCard from '../components/ChampionWinRateCard'
import { HorizontalDivider } from '../components/Divider'
import GameAverageSection from '../components/GameAverageSection'
import GameItemCard from '../components/GameItemCard'
import RankCard from '../components/RankCard'
import UnRankCard from '../components/RankCard/UnRankCard'
import { ResultItem, ResultNavigation } from '../components/ResultNavigation'
import SummonerProfile from '../components/SummonerProfile'
import { Tab, Tabs } from '../components/Tabs'
import { Text } from '../components/Typography'
import useQuery from '../hooks/useQuery'
import Container from '../layout/Container'

function SearchSummoner() {
  let query = useQuery()

  return (
    <>
      <Container>
        <SummonerProfile
          src="https://picsum.photos/id/237/200/300"
          level={32}
          title="플레이어아이디"
          rank={638882}
        />
      </Container>

      <HorizontalDivider />

      <Container>
        <Content>
          <article>
            <RankCard
              solo
              gameCount={44}
              loss={4}
              lp={80}
              rank="Silver"
              win={5}
              position="top"
              winningRate={51}
              wrapperStyle={{ marginBottom: 8 }}
            />
            <UnRankCard wrapperStyle={{ marginBottom: 8 }} />

            <Tabs defaultActiveId="1">
              <Tab label="챔피언 승률" id="1">
                <ChampionWinRateCard />
                <ChampionWinRateCard />
                <ChampionWinRateCard />
                <ChampionWinRateCard />
              </Tab>
              <Tab label="7일간 랭크 승률" id="2">
                <ChampionRankRateCard />
                <ChampionRankRateCard />
                <ChampionRankRateCard />
              </Tab>
            </Tabs>
          </article>
          <article>
            <ResultNavigation defaultActiveId="1">
              <ResultItem label="전체" id="1" />
              <ResultItem label="솔로게임" id="2" />
              <ResultItem label="자유랭크" id="3" />
            </ResultNavigation>
            <GameAverageSection />

            <GameItemWrapper>
              <GameItemCard />
              <GameItemCard />
              <GameItemCard />
              <GameItemCard />
            </GameItemWrapper>
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
const GameItemWrapper = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-row-gap: 8px;
  margin-top: 16px;
`

export default SearchSummoner
