import { AxiosResponse } from 'axios'
import { createContext, FC, useContext } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Summoner } from '../../model/Summoner'
import useQuery from '../useQuery'

type SummonerInfoContextType = {
  summoner: Summoner
  initialLoading: boolean
}
export const SummonerInfoContext = createContext({} as SummonerInfoContextType)

export const SummonerInfoProvider: FC = ({ children }) => {
  const query = useQuery()

  const { data, error } = useSWR<AxiosResponse<{ summoner: Summoner }>>(
    `/api/summoner/${query.get('username')}`,
    fetcher,
    { revalidateOnMount: !!query.get('username'), revalidateOnFocus: false }
  )

  const initialLoading = !data && !error

  const summoner = data?.data.summoner || ({} as Summoner)

  return (
    <SummonerInfoContext.Provider value={{ summoner, initialLoading }}>
      {children}
    </SummonerInfoContext.Provider>
  )
}

export const useSummonerInfo = () => useContext(SummonerInfoContext)
