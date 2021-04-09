import { useCallback, useMemo, useState } from 'react'
import historyStorage, { SummonerHistory } from '../../lib/storage/historyStorage'

function useSummonerHistoryStorage() {
  const [histories, setHistories] = useState<SummonerHistory[]>(historyStorage.get())

  const favoriteHistories = useMemo(() => histories.filter((history) => history.favorite > -1), [
    histories,
  ])

  const toggleFavorite = useCallback(
    (name: string) => {
      const updated = histories.map((history) =>
        history.name === name ? Object.assign(history, { favorite: ~history.favorite }) : history
      )
      setHistories(updated)
      historyStorage.set(updated)
    },
    [histories]
  )

  const addHistory = useCallback(
    (history: SummonerHistory) => {
      // History 중복 처리

      const has = histories.some(({ name }) => name === history.name)

      if (has) return
      setHistories([...histories, history])
      historyStorage.set([...histories, history])
    },
    [histories]
  )

  const removeHistory = useCallback(
    (name: string) => {
      const filtered = histories.filter((h) => h.name !== name)
      setHistories(filtered)
      historyStorage.set(filtered)
    },
    [histories]
  )

  return {
    histories,
    favoriteHistories,
    toggleFavorite,
    addHistory,
    removeHistory,
  }
}

export default useSummonerHistoryStorage
