import { Children, FC, isValidElement, useState } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  /**
   * Default Active Tab key
   *
   * Default - First tab key
   */
  defaultActiveId?: string

  /**
   * Tab Change Event
   */
  onChange?(key: string): void
}

const ResultNavigation: FC<Props> = ({ defaultActiveId, children, onChange }) => {
  const [activeResultId, setActiveResultId] = useState(defaultActiveId)

  const handleMenuClick = (id: string) => {
    setActiveResultId(id)
    onChange?.(id)
  }

  return (
    <Wrapper length={Children.toArray(children).length}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return
        return (
          <Menu
            key={index}
            onClick={() => handleMenuClick(child.props.id)}
            active={child.props.id === activeResultId}
          >
            {child.props.label}
          </Menu>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.nav<{ length: number }>`
  display: flex;
  border: solid 1px ${({ theme }) => theme.color.grey[3]};
`

const Menu = styled.div<{ active: boolean }>`
  font-size: 12px;
  padding: 10px 0px;
  margin: 0 15px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.color.blue};
    transition: 0.2s;
  }

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: ${({ theme }) => theme.color.blue};

      &::after {
        width: 100%;
      }
    `}
`

export default ResultNavigation
