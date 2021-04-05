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

const Tabs: FC<Props> = ({ defaultActiveId, children }) => {
  const [activeTabId, setActiveTabId] = useState(defaultActiveId)

  const handleMenuClick = (id: string) => {
    setActiveTabId(id)
  }

  return (
    <Wrapper>
      <Header length={Children.toArray(children).length}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return
          return (
            <Menu
              key={index}
              onClick={() => handleMenuClick(child.props.id)}
              active={child.props.id === activeTabId}
            >
              {child.props.label}
            </Menu>
          )
        })}
      </Header>
      <Body>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child) || child.props.id !== activeTabId) return
          return <Box key={index}>{child}</Box>
        })}
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey[3]};
`

const Header = styled.header<{ length: number }>`
  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, 1fr)`};
  text-align: center;
`

const Menu = styled.div<{ active: boolean }>`
  padding: 15px 38px;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.grey[3]};
  }

  ${({ active }) =>
    active
      ? css`
          font-weight: bold;
          background: ${({ theme }) => theme.color.grey[1]};
        `
      : css`
          color: ${({ theme }) => theme.color.grey[4]};
          border-bottom: 1px solid ${({ theme }) => theme.color.grey[3]};
        `}
`

const Body = styled.section`
  background: ${({ theme }) => theme.color.grey[1]};
`
const Box = styled.div``

export default Tabs
