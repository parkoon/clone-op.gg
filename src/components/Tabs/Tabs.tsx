import { FC } from 'react'

type Props = {
  /**
   * Default Active Tab key
   *
   * Default - First tab key
   */
  defaultActiveKey?: string

  /**
   * Tab Change Event
   */
  onChange?(key: string): void
}
const Tabs: FC<Props> = () => {
  return <div>Tabs Components</div>
}

export default Tabs
