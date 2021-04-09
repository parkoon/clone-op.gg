import { AxiosResponse } from 'axios'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Team } from '../../model/Team'
import useQuery from '../useQuery'

function useFetchMatchDetail(gameId: string) {
  const query = useQuery()

  const { data, error } = useSWR<AxiosResponse<{ gameId: string; teams: Team[] }>>(
    `/api/summoner/${query.get('username')}/matchDetail/${gameId}`,
    fetcher,
    {
      revalidateOnMount: !!query.get('username'),
      revalidateOnFocus: false,
    }
  )

  const initialLoading = !data && !error

  const teams = data?.data.teams || ([] as Team[])

  return {
    initialLoading,
    teams,
  }
}

export default useFetchMatchDetail
