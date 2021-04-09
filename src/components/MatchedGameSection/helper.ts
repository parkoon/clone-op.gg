import { Game } from '../../model/Game'

const getChampionNameFromImageURL = (value: string) =>
  value.slice(value.lastIndexOf('/') + 1, value.lastIndexOf('.'))
export type ReduceSummary = {
  totalGame: number
  win: number
  kill: number
  assist: number
  death: number
}
export type ReduceChampion = Record<
  string,
  {
    imageUrl: string
    pickCount: number
    win: number
    kill: number
    death: number
    assist: number
  }
>
export const reduceGames = (games: Game[]) =>
  games.reduce(
    (prev, curr) => {
      const championName = getChampionNameFromImageURL(curr.champion.imageUrl)

      const champion = prev.champion[championName]

      if (champion) {
        prev.champion[championName] = {
          pickCount: champion.pickCount += 1,
          win: curr.isWin ? (champion.win += 1) : champion.win,
          kill: champion.kill + curr.stats.general.kill,
          death: champion.death + curr.stats.general.death,
          assist: champion.assist + curr.stats.general.assist,
          imageUrl: champion.imageUrl,
        }
      } else {
        prev.champion[championName] = {
          pickCount: 1,
          win: 0,
          kill: 0,
          death: 0,
          assist: 0,
          imageUrl: curr.champion.imageUrl,
        }
      }

      prev.summary = {
        totalGame: prev.summary.totalGame += 1,
        win: curr.isWin ? (prev.summary.win += 1) : prev.summary.win,
        kill: prev.summary.kill += curr.stats.general.kill,
        assist: prev.summary.assist += curr.stats.general.assist,
        death: prev.summary.death += curr.stats.general.death,
      }

      return prev
    },
    {
      summary: {
        totalGame: 0,
        win: 0,
        kill: 0,
        assist: 0,
        death: 0,
      },
      champion: {},
    } as {
      summary: ReduceSummary
      champion: ReduceChampion
    }
  )
