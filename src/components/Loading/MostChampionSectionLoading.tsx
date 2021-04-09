import styled from 'styled-components'
import ShimmerEffect from '../ShimmerEffect'

function MostChampionSectionLoading() {
  return (
    <Wrapper>
      <Row>
        <div style={{ textAlign: 'center' }}>
          <ShimmerEffect rounded width={45} height={45} />
        </div>
        <div style={{ alignSelf: 'center' }}>
          <ShimmerEffect count={2} />
        </div>
      </Row>
      <Row>
        <div style={{ textAlign: 'center' }}>
          <ShimmerEffect rounded width={45} height={45} />
        </div>
        <div style={{ alignSelf: 'center' }}>
          <ShimmerEffect count={2} />
        </div>
      </Row>
      <Row>
        <div style={{ textAlign: 'center' }}>
          <ShimmerEffect rounded width={45} height={45} />
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
  grid-template-columns: 45px 1fr;
  grid-gap: 17px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  padding: 4px 12px;
`

export default MostChampionSectionLoading
