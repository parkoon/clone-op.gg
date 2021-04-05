import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  /**
   * Result Item Title
   */
  label: string

  /**
   * Result Item Id
   */
  id: string
}

const ResultItem: FC<Props> = ({ children, ...props }) => {
  return <span {...props} />
}

export default ResultItem
