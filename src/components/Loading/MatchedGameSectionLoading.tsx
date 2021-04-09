import styled from 'styled-components'
import ShimmerEffect from '../ShimmerEffect'

function MatchedGameSectionLoading() {
  return (
    <div>
      <Wrapper>
        <Row>
          <div style={{ textAlign: 'center' }}>
            <ShimmerEffect rounded width={90} height={90} />
          </div>
          <div style={{ alignSelf: 'center' }}>
            <ShimmerEffect count={3} />
          </div>
        </Row>
      </Wrapper>
      <div>
        <ShimmerEffect height={96} count={4} />
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey[2]};
  margin-top: -1px;
  padding: 18px 24px 24px 24px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 17px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export default MatchedGameSectionLoading
