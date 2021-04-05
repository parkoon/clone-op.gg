import { lighten } from 'polished'
import { AiFillCaretDown } from 'react-icons/ai'
import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import Badge from '../Badge'
import { HorizontalDivider } from '../Divider'
import Image from '../Image'
import { Inventory, InventoryItem } from '../Inventory'
import KDAPoint from '../KDAPoint'
import { Text } from '../Typography'
function GameItemCard() {
  return (
    <Wrapper>
      <FlexColumn>
        <Text bold>솔랭</Text>
        <Text>하루전</Text>
        <HorizontalDivider size={23} gutter={4} />
        <Text bold>패배</Text>
        <Text>15분 53초</Text>
      </FlexColumn>
      <Column>
        <Row style={{ marginBottom: 14 }}>
          <Image src="src" width="46px" height="46px" style={{ marginRight: 7 }} />
          <Inventory>
            <InventoryItem src="src" />
            <InventoryItem src="src" />
            <InventoryItem src="src" />
            <InventoryItem src="src" />
          </Inventory>
        </Row>
        <Text align="center" block>
          레오나
        </Text>
      </Column>
      <FlexColumn>
        <KDAPoint kill={2} death={4} assist={1} />
        <Text bold>1.59:1 평점</Text>

        <BadgeWrapper>
          <Badge backgroundColor="red" shape="round">
            트리플킬
          </Badge>
          <Badge backgroundColor="purple" shape="round">
            ACE
          </Badge>
        </BadgeWrapper>
      </FlexColumn>
      <FlexColumn>
        <Text>레벨 8</Text>
        <Text>20 (1.3) CS</Text>
        <Text color="red">킬관여 38%</Text>
      </FlexColumn>
      <Column>
        <Inventory>
          <InventoryItem src="src" />
          <InventoryItem src="src" />
          <InventoryItem src="src" />
          <InventoryItem src="src" />
          <InventoryItem src="src" />
          <InventoryItem src="src" />
          <InventoryItem src="src" />
          <InventoryItem src="src" />
        </Inventory>
        {/* <WardWrapper> */}
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>제어와드 1</Text>}
          wrapperStyle={{ justifyContent: 'center', marginTop: 10 }}
        />
        {/* </WardWrapper> */}
      </Column>
      <Column style={{ padding: '10px 0' }}>
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />

        <Image src="src" width="20" height="20" label={<Text>혜민아사랑해</Text>} shape="square" />
      </Column>
      <Column style={{ padding: '10px 0' }}>
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />
        <Image
          src="src"
          width="20"
          height="20"
          label={<Text>혜민아사랑해</Text>}
          shape="square"
          wrapperStyle={{ marginBottom: 2 }}
        />
        <Image src="src" width="20" height="20" label={<Text>혜민아사랑해</Text>} shape="square" />
      </Column>
      <Column>
        <More>
          <AiFillCaretDown size={14} color={theme.color.red} />
        </More>
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 110px 1fr 80px 110px 100px 100px 30px;
  border: 1px solid ${({ theme }) => theme.color.grey[2]};

  background: ${({ theme }) => lighten(0.25, theme.color.red)};
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

const More = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid ${({ theme }) => lighten(0.15, theme.color.red)};
  cursor: pointer;
  padding-bottom: 7px;

  background: ${({ theme }) => lighten(0.18, theme.color.red)};
`

export default GameItemCard
