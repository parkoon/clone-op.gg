import { Summoner } from '../../model/Summoner'

export type SummonerHistory = { favorite: -1 | 0 } & Pick<
  Summoner,
  'name' | 'profileImageUrl' | 'previousTiers'
>
const KEY = 'SUMMONER_HISTORY'
const historyStorage = {
  get() {
    const historyString = localStorage.getItem(KEY)

    try {
      if (!historyString) return []

      const parsed = JSON.parse(historyString) as SummonerHistory[]
      return parsed
    } catch (err) {
      return []
    }
  },
  set(data: SummonerHistory[]) {
    localStorage.setItem(KEY, JSON.stringify(data))
  },
}

export default historyStorage
