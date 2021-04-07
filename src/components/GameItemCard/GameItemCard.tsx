import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

import { lighten } from 'polished'
import { useMemo } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import styled, { css } from 'styled-components'
import theme from '../../assets/styles/theme'
import formatter from '../../lib/formatter'
import { Game } from '../../model/Game'
import OpScoreBadge from '../OpScoreBadge'
import { HorizontalDivider } from '../Divider'
import Image from '../Image'
import { Inventory, InventoryItem } from '../Inventory'
import KDAPoint from '../KDAPoint'
import { Text } from '../Typography'
import DetailGameItem from './DetailGameItem'

dayjs.locale('ko')
dayjs.extend(relativeTime)

// champion: {imageUrl: "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png", level: 6}
// createDate: 1617738740
// gameId: "12508799"
// gameLength: 597
// gameType: "무작위 총력전"
// isWin: true
// items: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// mapInfo: null
// mmr: 1181
// needRenew: false
// peak: (2) ["https://opgg-static.akamaized.net/images/lol/perk/8229.png", "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png"]
// spells: (2) [{…}, {…}]
// stats: {general: {…}, ward: {…}}
// summonerId: "8497673"
// summonerName: "머치고개"
// tierRankShort: "C1"

const MAX_ITEM_LENGTH = 8
function GameItemCard({
  champion,
  gameType,
  createDate,
  gameLength,
  items,
  stats: { general, ward },
  spells,
  peak,
  gameId,
  needRenew,
  isWin,
}: Game) {
  const itemWithBlank = useMemo(
    () =>
      [
        ...items,
        ...Array.from({ length: MAX_ITEM_LENGTH - items.length }).fill({ imageUrl: '' }),
      ] as Array<{ imageUrl: string }>,
    [items]
  )

  return (
    <Wrapper isWin={isWin} isRetry={needRenew}>
      <FlexColumn>
        <Text bold>{gameType}</Text>
        <Text>{dayjs(createDate).fromNow()}</Text>
        <HorizontalDivider size={23} gutter={4} />
        <Text bold>{needRenew ? '다시하기' : isWin ? '승리' : '패배'}</Text>
        <Text>{formatter.mmss(gameLength)}</Text>
      </FlexColumn>
      <Column>
        <Row style={{ marginBottom: 14 }}>
          <Image src={champion.imageUrl} width="46px" height="46px" style={{ marginRight: 7 }} />
          <Inventory>
            {spells.map(({ imageUrl }, index) => (
              <InventoryItem key={index} src={imageUrl} />
            ))}
            {peak.map((imageUrl, index) => (
              <InventoryItem key={index} src={imageUrl} />
            ))}
          </Inventory>
        </Row>
        <Text align="center" block>
          레오나
        </Text>
      </Column>
      <FlexColumn>
        <KDAPoint kill={general.kill} death={general.death} assist={general.assist} />
        <Text bold>{general.kdaString} 평점</Text>

        {general.opScoreBadge && (
          <BadgeWrapper>
            <OpScoreBadge backgroundColor="purple">{general.opScoreBadge}</OpScoreBadge>
          </BadgeWrapper>
        )}
      </FlexColumn>
      <FlexColumn>
        <Text>레벨 {champion.level}</Text>
        <Text>
          {general.cs} ({general.csPerMin}) CS
        </Text>
        <Text color="red">킬관여 {general.contributionForKillRate}</Text>
      </FlexColumn>
      <Column>
        <Inventory>
          {itemWithBlank.map(({ imageUrl }, index) => (
            <InventoryItem key={index} src={imageUrl} />
          ))}
        </Inventory>

        {ward.sightWardsBought > 0 && (
          <Image
            src="src"
            width="20"
            height="20"
            label={<Text>제어와드 {ward.sightWardsBought}</Text>}
            wrapperStyle={{ justifyContent: 'center', marginTop: 10 }}
          />
        )}
        {ward.visionWardsBought > 0 && (
          <Image
            src="src"
            width="20"
            height="20"
            label={<Text>제어와드 {ward.visionWardsBought}</Text>}
            wrapperStyle={{ justifyContent: 'center', marginTop: 10 }}
          />
        )}
      </Column>
      <Column style={{ padding: '10px 0' }}>
        <DetailGameItem gameId={gameId} />
      </Column>
      <Column>
        <More>
          <AiFillCaretDown size={14} />
        </More>
      </Column>
    </Wrapper>
  )
}

const More = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.color.grey[4]};
  cursor: pointer;
  padding-bottom: 7px;
`
const Wrapper = styled.div<{ isWin: boolean; isRetry: boolean }>`
  display: grid;
  grid-template-columns: 82px 110px 1fr 80px 110px 200px 24px;
  border: 1px solid ${({ theme }) => theme.color.grey[4]};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  ${({ isWin, isRetry, theme }) =>
    isRetry
      ? css`
          border-color: ${({ theme }) => theme.color.retry.border};
          background: ${({ theme }) => theme.color.retry.background};
          ${More} {
            background: ${({ theme }) => theme.color.retry.button};
            border-color: ${({ theme }) => theme.color.retry.border};
            color: ${({ theme }) => theme.color.retry.icon};
          }
        `
      : isWin
      ? css`
          border-color: ${({ theme }) => theme.color.win.border};
          background: ${({ theme }) => theme.color.win.background};
          ${More} {
            background: ${({ theme }) => theme.color.win.button};
            border-color: ${({ theme }) => theme.color.win.border};
            color: ${({ theme }) => theme.color.win.icon};
          }
        `
      : css`
          border-color: ${({ theme }) => theme.color.lose.border};
          background: ${({ theme }) => theme.color.lose.background};
          ${More} {
            background: ${({ theme }) => theme.color.lose.button};
            border-color: ${({ theme }) => theme.color.lose.border};
            color: ${({ theme }) => theme.color.lose.icon};
          }
        `};
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${({ theme }) => theme.color.grey[5]};
`
const FlexColumn = styled(Column)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  span {
    line-height: 1.7;
  }
`

const BadgeWrapper = styled.div`
  margin-top: 10px;
  > span:not(:last-child) {
    margin-right: 5px;
  }
`

const Row = styled.div`
  display: flex;
`

export default GameItemCard
