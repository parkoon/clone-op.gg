import { AxiosResponse } from 'axios'
import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Summoner } from '../../model/Summoner'

export const useSummonerSearch = () => {
  const [summonerName, setSummonerName] = useState('')

  const { data, error } = useSWR<AxiosResponse<{ summoner: Summoner }>>(
    summonerName ? `/api/summoner/${summonerName}` : null,
    fetcher,
    { revalidateOnMount: false, revalidateOnFocus: false }
  )

  const initialLoading = !data && !error

  const summoner = data?.data.summoner || ({} as Summoner)

  const hasResult = Object.keys(summoner).length > 0

  return {
    summoner,
    hasResult,
    initialLoading,
    setSummonerName,
  }
}
