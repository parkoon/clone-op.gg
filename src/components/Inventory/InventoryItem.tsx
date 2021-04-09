import styled from 'styled-components'
import Image from '../Image'
import Tooltip from '../Tooltip'
type Props = {
  /**
   * Item Image URL
   * Only item valid registered in items directory
   */
  src?: string
}
function InventoryItem({ src }: Props) {
  if (!src) return <Empty />
  return (
    <Tooltip content="아이템 툴팁입니다.">
      <Image src={src} width="22" height="22" shape="square" />
    </Tooltip>
  )
}

const Empty = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.1);
`

export default InventoryItem
