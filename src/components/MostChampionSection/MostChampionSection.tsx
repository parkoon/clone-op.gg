import { useMostChampionInfo } from '../../hooks/fetch/useMostChampionInfo'
import { MostChampionSectionLoading } from '../Loading'
import { Tab, Tabs } from '../Tabs'
import MostChampionCard from './MostChampionCard'
import MostChampionWeekCard from './MostChampionWeekCard'

function MostChampionSection() {
  const { mostChampions, recentWinRate, initialLoading } = useMostChampionInfo()

  return (
    <Tabs defaultActiveId="champion" reverseColor={initialLoading}>
      <Tab label="챔피언 승률" id="champion">
        {initialLoading ? (
          <MostChampionSectionLoading />
        ) : (
          mostChampions.map((champion, index) => (
            <MostChampionCard {...champion} key={`mc-${index}`} />
          ))
        )}
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
