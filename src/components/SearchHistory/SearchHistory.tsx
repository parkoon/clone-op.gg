import { lighten } from 'polished'
import { forwardRef } from 'react'
import { AiFillStar, AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import useSummonerHistoryStorage from '../../hooks/storage/useSummonerHistoryStorage'
import { Tab, Tabs } from '../Tabs'
import EmptyHistory from './EmptyFavoriteHistory'

type Props = {
  onHistoryClick(name: string): void
}
const SearchHistory = forwardRef<HTMLUListElement, Props>(({ onHistoryClick }, ref) => {
  const {
    histories,
    favoriteHistories,
    toggleFavorite,
    removeHistory,
  } = useSummonerHistoryStorage()

  const handleItemClick = (name: string) => {
    onHistoryClick(name)
  }

  return (
    <Wrapper ref={ref}>
      <Tabs defaultActiveId="champion" reverseColor>
        <Tab label="최근검색" id="champion">
          <ul>
            {histories.length > 0 ? (
              histories.map(({ name, favorite }) => (
                <Item key={name}>
                  <ItemTitle onClick={() => handleItemClick(name)}>{name}</ItemTitle>

                  <AiFillStar
                    style={{
                      color: favorite < 0 ? theme.color.grey[4] : theme.color.blue,
                      marginRight: 7,
                      cursor: 'pointer',
                    }}
                    onClick={() => toggleFavorite(name)}
                  />
                  <AiOutlineClose
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      removeHistory(name)
                      e.stopPropagation()
                    }}
                  />
                </Item>
              ))
            ) : (
              <EmptyHistory content="최근에 검색한 사용자가 없습니다." />
            )}
          </ul>
        </Tab>
        <Tab label="즐겨찾기" id="rate">
          <ul>
            {favoriteHistories.length > 0 ? (
              favoriteHistories.map(({ name }) => (
                <Item key={name}>
                  <ItemTitle onClick={() => handleItemClick(name)}>{name}</ItemTitle>

                  <AiOutlineClose
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      toggleFavorite(name)
                      e.stopPropagation()
                    }}
                  />
                </Item>
              ))
            ) : (
              <EmptyHistory
                content={
                  <>
                    관심있는 소환사에 <AiFillStar /> 즐겨찾기를 하여 <br />
                    편리하게 정보를 받아보세요.
                  </>
                }
              />
            )}
          </ul>
        </Tab>
      </Tabs>
    </Wrapper>
  )
})

const Wrapper = styled.ul`
  position: absolute;
  width: 100%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  z-index: 999;
  top: 35px;
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  padding-right: 15px;
`

const ItemTitle = styled.span`
  &:hover {
    font-weight: bold;
  }
  padding: 15px;
  transition: 0.2s;
  flex: 1;
  cursor: pointer;
`

export default SearchHistory
