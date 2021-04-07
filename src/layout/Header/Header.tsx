import { KeyboardEvent } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Search from '../../components/Search'

function Header() {
  const history = useHistory()
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return

    const target = e.target as HTMLInputElement

    history.push({
      pathname: '/',
      search: `?username=${target.value}`,
    })
  }
  return (
    <Wrapper>
      <div />
      <Search placeholder="소환사명, 챔피언..." onKeyDown={handleKeyDown} />
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

export default Header
