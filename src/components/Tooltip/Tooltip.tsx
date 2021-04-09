import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  content: string | ReactNode
}
const Tooltip: FC<Props> = ({ children, content }) => {
  return (
    <Wrapper>
      <Trigger>{children}</Trigger>
      <TooltipBox>
        <span>{content}</span>
      </TooltipBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Trigger = styled.div`
  width: fit-content;
  height: fit-content;

  &:hover ~ div {
    visibility: visible;
  }
`

const TooltipBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(100% + 12px);
  min-width: 120px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};

  visibility: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: -8px;

    left: 50%;
    margin-left: -8px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;

    border-top: 8px solid ${({ theme }) => theme.color.black};
  }
`

export default Tooltip
