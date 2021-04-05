import styled from 'styled-components'
import Search from '../../components/Search'

function Header() {
  return (
    <Wrapper>
      <div />
      <Search placeholder="소환사명, 챔피언..." />
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
`

export default Header
