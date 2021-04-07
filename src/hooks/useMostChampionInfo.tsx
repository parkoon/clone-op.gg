import { AxiosResponse } from 'axios'
import { createContext, FC, useContext } from 'react'
import useSWR from 'swr'
import useQuery from './useQuery'
import fetcher from '../lib/fetcher'
import { Champion } from '../model/Champion'
import { WinRate } from '../model/WinRate'

type MostChampionInfoContextType = {
  mostChampions: Champion[]
  recentWinRate: WinRate[]
  initialLoading: boolean
}
export const MostChampionInfoContext = createContext({} as MostChampionInfoContextType)

export const MostChampionInfoProvider: FC = ({ children }) => {
  const query = useQuery()

  const { data, error } = useSWR<
    AxiosResponse<{ champions: Champion[]; recentWinRate: WinRate[] }>
  >(`/api/summoner/${query.get('username')}/mostInfo`, fetcher, {
    revalidateOnMount: !!query.get('username'),
  })

  const initialLoading = !data && !error

  const mostChampions = data?.data.champions || ([] as Champion[])
  const recentWinRate = data?.data.recentWinRate || ([] as WinRate[])

  return (
    <MostChampionInfoContext.Provider value={{ mostChampions, recentWinRate, initialLoading }}>
      {children}
    </MostChampionInfoContext.Provider>
  )
}

export const useMostChampionInfo = () => useContext(MostChampionInfoContext)
