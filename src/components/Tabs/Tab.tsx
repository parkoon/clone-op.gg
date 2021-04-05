import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  /**
   * Tab Title
   */
  label: string

  /**
   * Tab Id
   */
  id: string
}

const Tab: FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.div``

export default Tab
