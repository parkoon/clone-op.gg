import styled from 'styled-components'
import { Text } from '../Typography'
import { BaseRankCardProps } from './types'

function UnRankCard({ solo }: Partial<BaseRankCardProps>) {
  return (
    <Wrapper>
      <Image src="https://picsum.photos/id/237/200/300" />

      <InfoWrapper>
        <Text fontSize={11}>{solo ? '솔로' : '자유 5:5'} 랭크</Text>
        <Text fontSize={13} bold>
          Unranked
        </Text>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  min-width: 300px;
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.color.grey[3]};
  background: ${({ theme }) => theme.color.grey[0]};
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`

const Image = styled.img`
  width: 104px;
  height: 104px;
  object-fit: cover;
`
export default UnRankCard
