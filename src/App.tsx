import { UserAvatar } from './components/Avatar'
import Badge from './components/Badge'
import ChampionProfile from './components/ChampionProfile'
import ChampionRankRateCard from './components/ChampionRankRateCard'
import ChampionWinRateCard from './components/ChampionWinRateCard'
import CircularRateBar from './components/CircularRateBar'
import RankCard from './components/RankCard'
import UnRankCard from './components/RankCard/UnRankCard'
import { RankRateBar } from './components/RankRate'
import { ResultItem, ResultNavigation } from './components/ResultNavigation'
import Search from './components/Search'
import { Tabs, Tab } from './components/Tabs'
import { Text } from './components/Typography'

function App() {
  return (
    <div style={{ padding: 30 }}>
      <Badge>
        <Text bold>S3</Text> Bronze
      </Badge>

      <Search placeholder="소환사명, 챔피언..." />
      <RankRateBar win={3} loss={8} />

      <UserAvatar
        src="https://picsum.photos/id/237/200/300"
        level={32}
        title="플레이어아이디"
        subtitle={
          <>
            레더 랭킹 <Text bold>363,499</Text>위 (상위 40.7%)
          </>
        }
      />

      <RankCard
        solo
        gameCount={44}
        loss={4}
        lp={80}
        rank="Silver"
        win={5}
        position="top"
        winningRate={51}
      />
      <UnRankCard solo />

      <br />
      <br />

      <CircularRateBar win={14} loss={9} />

      <Tabs defaultActiveId="1">
        <Tab label="챔피언 승률" id="1">
          <ChampionWinRateCard />
          <ChampionWinRateCard />
          <ChampionWinRateCard />
          <ChampionWinRateCard />
        </Tab>
        <Tab label="7일간 랭크 승률" id="2">
          <ChampionRankRateCard />
        </Tab>
      </Tabs>

      <br />
      <br />
      <br />
      <ResultNavigation defaultActiveId="1">
        <ResultItem label="전체" id="1">
          <ChampionWinRateCard />
        </ResultItem>
        <Tab label="솔로게임" id="2">
          <ChampionRankRateCard />
        </Tab>
        <Tab label="자유랭크" id="3">
          <ChampionRankRateCard />
        </Tab>
      </ResultNavigation>
    </div>
  )
}

export default App
