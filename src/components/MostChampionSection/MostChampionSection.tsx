import { useMostChampionInfo } from '../../hooks/useMostChampionInfo'
import { Tab, Tabs } from '../Tabs'
import MostChampionCard from './MostChampionCard'
import MostChampionWeekCard from './MostChampionWeekCard'

function MostChampionSection() {
  const { mostChampions, recentWinRate } = useMostChampionInfo()

  return (
    <Tabs defaultActiveId="champion">
      <Tab label="챔피언 승률" id="champion">
        {mostChampions.map((champion, index) => (
          <MostChampionCard {...champion} key={`mc-${index}`} />
        ))}
      </Tab>
      <Tab label="7일간 랭크 승률" id="rate">
        {recentWinRate.map((winRate, index) => (
          <MostChampionWeekCard {...winRate} key={`wr-${index}`} />
        ))}
      </Tab>
    </Tabs>
  )
}

export default MostChampionSection
