import { Children, FC } from 'react'
import styled, { css } from 'styled-components'

const Inventory: FC = ({ children }) => {
  const columnLength = Children.count(children) / 2
  return <Wrapper columnLength={columnLength}>{children}</Wrapper>
}

const Wrapper = styled.div<{ columnLength: number }>`
  display: grid;
  grid-template-columns: ${({ columnLength }) => `repeat(${columnLength}, 22px);`};
  grid-template-rows: repeat(2, 22px);
  grid-gap: 2px;

  ${({ columnLength }) =>
    columnLength === 2 &&
    css`
      & > div:nth-of-type(1) {
        order: 1;
      }
      & > div:nth-of-type(2) {
        order: 3;
      }
      & > div:nth-of-type(3) {
        order: 2;
      }
      & > div:nth-of-type(4) {
        order: 4;
      }
    `}
`
export default Inventory
