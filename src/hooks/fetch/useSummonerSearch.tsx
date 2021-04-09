import { AxiosResponse } from 'axios'
import _ from 'lodash'
import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Summoner } from '../../model/Summoner'

export const useSummonerSearch = () => {
  const [query, setQuery] = useState('')

  const { data, error } = useSWR<AxiosResponse<{ summoner: Summoner }>>(
    query ? `/api/summoner/${query}` : null,
    fetcher,
    { revalidateOnMount: false, revalidateOnFocus: false }
  )

  const initialLoading = !data && !error

  const summoner = data?.data.summoner || ({} as Summoner)

  const delayedQuery = _.debounce((q) => setQuery(q), 300)

  const resetQuery = () => setQuery('')

  const hasResult = Object.keys(summoner).length > 0

  return {
    summoner,
    hasResult,
    initialLoading,
    delayedQuery,
    resetQuery,
  }
}
