import styled from 'styled-components'
import Image from '../Image'
type Props = {
  /**
   * Item Image URL
   * Only item valid registered in items directory
   */
  src?: string
}
function InventoryItem({ src }: Props) {
  if (!src) return <Empty />
  return <Image src="https://picsum.photos/id/237/200/300" width="22" height="22" shape="square" />
}

const Empty = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.1);
`

export default InventoryItem
