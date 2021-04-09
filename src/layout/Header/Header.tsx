import { lighten } from 'polished'
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import ChampionProfile from '../../components/ChampionProfile'
import Search from '../../components/Search'
import SearchHistory from '../../components/SearchHistory'
import { useSummonerSearch } from '../../hooks/fetch/useSummonerSearch'
import useInteractOutside from '../../hooks/useInteractOutside'

function Header() {
  const history = useHistory()

  const [summonerName, setSummonerName] = useState('')
  const [searchHistoryVisibility, setSearchHistoryVisibility] = useState(false)

  const { summoner, hasResult, initialLoading, delayedQuery, resetQuery } = useSummonerSearch()

  const [focused, setFocused] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const historyRef = useRef<HTMLUListElement>(null)

  useInteractOutside({
    ref: historyRef,
    excludedRefs: [searchRef],
    onInteractOutside() {
      setSearchHistoryVisibility(false)
    },
  })

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return

    const target = e.target as HTMLInputElement

    if (!target.value) return alert('소환사 이름을 입력해주세요.')

    reset()
    history.push({
      pathname: '/search',
      search: `?username=${target.value}`,
    })
  }

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setSummonerName(target.value)
    delayedQuery(target.value)
  }

  const handleSummonerClick = (name: string) => {
    history.push({
      pathname: '/search',
      search: `?username=${name}`,
    })
    reset()
  }

  const reset = () => {
    setSummonerName('')
    resetQuery()
    setSearchHistoryVisibility(false)
    searchRef.current?.blur()
  }

  return (
    <Wrapper>
      <div />

      <SearchWrapper>
        <Search
          ref={searchRef}
          value={summonerName}
          placeholder="소환사명, 챔피언..."
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onFocus={() => {
            setFocused(true)
            setSearchHistoryVisibility(true)
          }}
          onBlur={() => setTimeout(() => setFocused(false), 300)}
        />

        {!initialLoading && hasResult && focused && (
          <SummonerList>
            <SummonerItem onClick={() => handleSummonerClick(summoner.name)}>
              <ChampionProfile
                title={summoner.name}
                subtitle={
                  summoner.previousTiers
                    ? summoner.previousTiers[0].string
                    : `Level ${summoner.level}`
                }
                src={summoner.profileImageUrl}
              />
            </SummonerItem>
          </SummonerList>
        )}

        {!summonerName && searchHistoryVisibility && (
          <SearchHistory ref={historyRef} onHistoryClick={handleSummonerClick} />
        )}
      </SearchWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 260px;
  align-items: flex-end;
  height: 97px;
  padding: 12px 32px;
  background: ${({ theme }) => theme.color.header};
  min-width: 1000px;
`
const SearchWrapper = styled.div`
  position: relative; ;
`

const SummonerList = styled.ul`
  position: absolute;
  width: 100%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  z-index: 999;
  top: 35px;
  padding-top: 10px;
`

const SummonerItem = styled.li`
  cursor: pointer;
  transition: 0.2s;
  padding: 4px;
  &:hover {
    background: ${({ theme }) => lighten(0.4, theme.color.blue)};
  }
`

export default Header
