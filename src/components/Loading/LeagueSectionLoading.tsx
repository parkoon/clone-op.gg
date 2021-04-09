import styled from 'styled-components'
import ShimmerEffect from '../ShimmerEffect'

function LeagueSectionLoading() {
  return (
    <Wrapper>
      <Row>
        <div>
          <ShimmerEffect rounded width={92} height={92} />
        </div>
        <div>
          <ShimmerEffect count={5} />
        </div>
      </Row>
      <Row>
        <div style={{ textAlign: 'center' }}>
          <ShimmerEffect rounded width={72} height={72} />
        </div>
        <div style={{ alignSelf: 'center' }}>
          <ShimmerEffect count={2} />
        </div>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 8px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 92px 1fr;
  grid-gap: 17px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export default LeagueSectionLoading
