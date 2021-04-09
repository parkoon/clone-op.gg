import styled from 'styled-components'
import { useSummonerInfo } from '../../hooks/fetch/useSummonerInfo'
import TierBadge from '../TierBadge'
import { Text } from '../Typography'
import SummonerProfileIcon from './SummonerProfileIcon'

function SummonerProfile() {
  const { summoner, initialLoading } = useSummonerInfo()

  if (initialLoading) return <span>로딩중</span>

  const {
    ladderRank: { rank, rankPercentOfTop },
    previousTiers,
    profileBorderImageUrl,
    profileImageUrl,
    name,
    level,
  } = summoner

  return (
    <section>
      <Header>
        {previousTiers.map(({ tier, shortString }, index) => (
          <TierBadge key={index} tier={tier} shortString={shortString} />
        ))}
      </Header>
      <Body>
        <SummonerProfileIcon border={profileBorderImageUrl} icon={profileImageUrl} level={level} />
        <InfoWrapper>
          <Title>{name}</Title>
          <Subtitle>
            래더 랭킹 <Text bold>{rank.toLocaleString()}</Text>위 (상위
            {rankPercentOfTop}%)
          </Subtitle>
        </InfoWrapper>
      </Body>
    </section>
  )
}

const Header = styled.div`
  margin-bottom: 24px;
  > span {
    margin-right: 7px;
  }
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

export default SummonerProfile
