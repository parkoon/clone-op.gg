import { AxiosResponse } from 'axios'
import { createContext, FC, useContext, useState } from 'react'
import useSWR from 'swr'
import useQuery from './useQuery'
import { Summoner } from '../model/Summoner'
import fetcher from '../lib/fetcher'

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
    { revalidateOnMount: !!query.get('username') }
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
