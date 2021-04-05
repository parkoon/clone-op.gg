import { FC } from 'react'
import styled from 'styled-components'

const BaseLayout: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.main`
  width: 1000px;
  margin: 0 auto;
`

export default BaseLayout
