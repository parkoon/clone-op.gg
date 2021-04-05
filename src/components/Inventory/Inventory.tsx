import { Children, FC } from 'react'
import styled from 'styled-components'

const Inventory: FC = ({ children }) => {
  const columnLength = Children.count(children) / 2
  return <Wrapper columnLength={columnLength}>{children}</Wrapper>
}

const Wrapper = styled.div<{ columnLength: number }>`
  display: grid;
  grid-template-columns: ${({ columnLength }) => `repeat(${columnLength}, 22px);`};
  grid-template-rows: repeat(2, 22px);
  grid-gap: 2px;
`
export default Inventory
