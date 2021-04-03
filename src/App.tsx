import { UserAvatar } from './components/Avatar'
import Badge from './components/Badge'
import RankCard from './components/RankCard'
import UnRankCard from './components/RankCard/UnRankCard'
import { RankRateBar } from './components/RankRate'
import Search from './components/Search'
import { Text } from './components/Typography'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
