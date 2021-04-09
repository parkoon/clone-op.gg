import styled from 'styled-components'
import ShimmerEffect from '../ShimmerEffect'

function SummonerProfileLoading() {
  return (
    <Wrapper>
      <Flex>
        <ShimmerEffect width={58} />
        <ShimmerEffect width={58} />
        <ShimmerEffect width={58} />
      </Flex>
      <Row>
        <div>
          <ShimmerEffect rounded width={120} height={120} />
        </div>
        <div>
          <ShimmerEffect height={32} style={{ marginBottom: 12 }} />
          <ShimmerEffect />
        </div>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 18px 1fr;
  grid-row-gap: 18px;
`

const Flex = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;

  padding-left: 12px;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 120px 200px;
  grid-gap: 17px;
`

export default SummonerProfileLoading
