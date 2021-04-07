import { lighten } from 'polished'
import { AiFillSmile } from 'react-icons/ai'
import styled from 'styled-components'
import theme from '../../../assets/styles/theme'
import calculator from '../../../lib/calculator'
import { Champion } from '../../../model/Champion'
import ChampionProfile from '../../ChampionProfile'
import { VerticalDivider } from '../../Divider'
import { Text } from '../../Typography'

type Props = {
  champions: Champion[]
}

const MAX_CHAMPION = 3
function MostChampionField({ champions }: Props) {
  return (
    <>
      {champions.map(({ name, imageUrl, wins, losses, kills, assists, deaths }, index) => (
        <ChampionProfile
          key={index}
          title={name}
          subtitle={
            <>
              <Text fontSize={11} color="red" bold>
                70%
              </Text>
              <Text fontSize={11}>
                ({wins}승 {losses}패)
              </Text>
              <VerticalDivider size={10} gutter={7} />
              <Text fontSize={11} color="orange" bold>
                {calculator.average(kills, assists, deaths)}평점
              </Text>
            </>
          }
          src={imageUrl}
          size="sm"
        />
      ))}
      {Array.from({ length: MAX_CHAMPION - champions.length }).map((_, index) => (
        <EmptyChampion key={index} />
      ))}
    </>
  )
}

function EmptyChampion() {
  return (
    <EmptyWrapper>
      <IconWrapper>
        <AiFillSmile size={20} color={lighten(0.2, theme.color.grey[4])} />
      </IconWrapper>
      <Text fontSize={11} color={theme.color.grey[4]}>
        챔피언 정보가 없습니다.
      </Text>
    </EmptyWrapper>
  )
}

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-right: 10px;

  background: ${({ theme }) => theme.color.grey[2]};
`

export default MostChampionField
