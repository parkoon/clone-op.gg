import { AiOutlineFileSearch } from 'react-icons/ai'
import styled from 'styled-components'
import Container from '../layout/Container'

function Home() {
  return (
    <Wrapper>
      <h2>
        <AiOutlineFileSearch style={{ marginRight: 7 }} />
        소환사를 검색해보세요.
      </h2>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  h2 {
    margin-top: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }
`

export default Home
