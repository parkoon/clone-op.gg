import _ from 'lodash'
import { lighten } from 'polished'
import { ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import ChampionProfile from '../../components/ChampionProfile'
import Search from '../../components/Search'
import { useSummonerSearch } from '../../hooks/fetch/useSummonerSearch'

function Header() {
  const history = useHistory()

  const { setSummonerName, summoner, hasResult, initialLoading } = useSummonerSearch()

  console.log('initialLoading', initialLoading)
  console.log('hasResult', hasResult)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return

    const target = e.target as HTMLInputElement

    history.push({
      pathname: '/',
      search: `?username=${target.value}`,
    })
  }

  const delayedSetSummonerName = useCallback(
    _.debounce((q) => setSummonerName(q), 300),
    []
  )

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    delayedSetSummonerName(target.value)
  }

  const handleSummonerClick = (name: string) => {
    setSummonerName('')
    history.push({
      pathname: '/',
      search: `?username=${name}`,
    })
  }

  return (
    <Wrapper>
      <div />

      <SearchWrapper>
        <Search
          placeholder="소환사명, 챔피언..."
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        {!initialLoading && hasResult && (
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
