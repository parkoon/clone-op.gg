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
            <TabMenu
              key={index}
              onClick={() => handleMenuClick(child.props.id)}
              active={child.props.id === activeTabId}
            >
              {child.props.label}
            </TabMenu>
          )
        })}
      </Header>
      <Body>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child) || child.props.id !== activeTabId) return
          return <div key={index}>{child}</div>
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

const TabMenu = styled.div<{ active: boolean }>`
  font-size: 12px;
  padding: 15px 35px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.grey[6]};

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.grey[3]};
  }

  ${({ active }) =>
    active
      ? css`
          font-weight: bold;
          color: ${({ theme }) => theme.color.disabled};
          background: ${({ theme }) => theme.color.grey[1]};
        `
      : css`
          color: ${({ theme }) => theme.color.disabled};
          border-bottom: 1px solid ${({ theme }) => theme.color.grey[3]};
        `}
`

const Body = styled.section`
  background: ${({ theme }) => theme.color.grey[1]};
`
export default Tabs
