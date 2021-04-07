import { useMostChampionInfo } from '../../hooks/useMostChampionInfo'
import { Tab, Tabs } from '../Tabs'
import MostChampionCard from './MostChampionCard'
import MostChampionWeekCard from './MostChampionWeekCard'

function MostChampionSection() {
  const { mostChampions, recentWinRate } = useMostChampionInfo()

  return (
    <Tabs defaultActiveId="1">
      <Tab label="챔피언 승률" id="1">
        {mostChampions.map((champion, index) => (
          <MostChampionCard key={index} {...champion} />
        ))}
      </Tab>
      <Tab label="7일간 랭크 승률" id="2">
        {recentWinRate.map((winRate, index) => (
          <MostChampionWeekCard key={index} {...winRate} />
        ))}
      </Tab>
    </Tabs>
  )
}

export default MostChampionSection
