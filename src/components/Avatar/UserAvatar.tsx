import styled from 'styled-components'
import { BaseAvatarProps } from './type'

type Props = {
  level: number
} & BaseAvatarProps
function UserAvatar({ src, level, title, subtitle }: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} />
        <Level>{level}</Level>
      </ImageWrapper>

      <InfoWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
  color: ${({ theme }) => theme.color.grey[2]};
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

export default UserAvatar
