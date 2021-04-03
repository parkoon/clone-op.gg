import ITEMS from './Items'
type Props = {
  /**
   * Item name
   * Only item valid registered in items directory
   */
  name: keyof typeof ITEMS
}
function InventoryItem() {
  return <div></div>
}

export default InventoryItem
