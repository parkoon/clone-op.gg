import { AxiosResponse } from 'axios'
import { createContext, FC, useContext, useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Champion } from '../../model/Champion'
import { Game } from '../../model/Game'
import { Position } from '../../model/Position'
import { Summary } from '../../model/Summary'
import useQuery from '../useQuery'

type GameType = 'solo' | 'all' | 'free'
type MatchInfoType = {
  mostChampions: Champion[]
  games: Game[]
  setGameType(type: GameType): void
  positions: Position[]
  summary: Summary
  initialLoading: boolean
}
export const MatchInfo = createContext({} as MatchInfoType)
export const MatchInfoProvider: FC = ({ children }) => {
  const query = useQuery()
  const [gameType, setGameType] = useState<GameType>('all')
  const [games, setGames] = useState<Game[]>([])

  const { data, error } = useSWR<
    AxiosResponse<{ champions: Champion[]; games: Game[]; positions: Position[]; summary: Summary }>
  >(`/api/summoner/${query.get('username')}/matches`, fetcher, {
    revalidateOnMount: !!query.get('username'),
    revalidateOnFocus: false,
  })

  const initialLoading = !data && !error

  const mostChampions = useMemo(() => data?.data.champions || ([] as Champion[]), [data])
  const allGames = useMemo(() => data?.data.games || ([] as Game[]), [data])
  const positions = useMemo(() => data?.data.positions || ([] as Position[]), [data])
  const summary = useMemo(() => data?.data.summary || ({} as Summary), [data])

  useEffect(() => {
    if (initialLoading) return

    if (gameType === 'solo') {
      return setGames(allGames.filter((game) => game.gameType === '솔랭'))
    }

    if (gameType === 'free') {
      return setGames(allGames.filter((game) => game.gameType === '자유 5:5 랭크'))
    }

    setGames(allGames)
  }, [initialLoading, allGames, gameType])

  return (
    <MatchInfo.Provider
      value={{ mostChampions, games, positions, summary, initialLoading, setGameType }}
    >
      {children}
    </MatchInfo.Provider>
  )
}

export const useMatchInfo = () => useContext(MatchInfo)
