import { ReactNode } from 'react'
import styled from 'styled-components'
import Badge from '../Badge'
import { Text } from '../Typography'

type Props = {
  /**
   * Summoner Title
   */
  title: string | ReactNode

  /**
   * Summoner Ranking
   */
  rank: number

  /**
   * Summoner Image
   */
  src: string

  /**
   * Summoner Level
   */
  level: number
}
function SummonerProfile({ src, level, title, rank }: Props) {
  return (
    <section>
      <Header>
        <Badge>
          <Text bold>S3</Text> Bronze
        </Badge>
        <Badge>
          <Text bold>S3</Text> Bronze
        </Badge>
        <Badge>
          <Text bold>S3</Text> Bronze
        </Badge>
      </Header>
      <Body>
        <ImageWrapper>
          <Image src={src} />
          <Level>{level}</Level>
        </ImageWrapper>

        <InfoWrapper>
          <Title>{title}</Title>
          <Subtitle>
            래더 랭킹 <Text bold>{rank.toLocaleString()}</Text>위 (상위 40.7%)
          </Subtitle>
        </InfoWrapper>
      </Body>
    </section>
  )
}

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 68px);
  grid-gap: 7px;
  margin-bottom: 7px;
`

const Body = styled.div`
  display: flex;
`

const InfoWrapper = styled.div`
  margin-left: 17px;
`
const Title = styled.h2`
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: bold;
`
const Subtitle = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.color.grey[6]};
`

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Level = styled.span`
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100px;
  width: 44px;
  padding: 4px 0;
  text-align: center;
  color: ${({ theme }) => theme.color.gold};
  border: 1px solid ${({ theme }) => theme.color.gold};
  background: ${({ theme }) => theme.color.cement};
`

export default SummonerProfile
