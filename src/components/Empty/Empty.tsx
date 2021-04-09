import styled from 'styled-components'
function Empty() {
  return (
    <Wrapper>
      <h2>OP.GG에 등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 52px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`

export default Empty
