import styled, { css } from 'styled-components'

const BaseDivider = styled.div<{ gutter?: number; size: number }>`
  display: inline-block;
  background: ${({ theme }) => theme.color.grey[3]};
`
export const VerticalDivider = styled(BaseDivider)`
  width: 1px;
  height: ${({ size }) => `${size}px`};

  ${({ gutter }) =>
    gutter &&
    css`
      margin-left: ${gutter}px;
      margin-right: ${gutter}px;
    `}
`

export const HorizontalDivider = styled(BaseDivider)`
  width: ${({ size }) => `${size}px`};
  height: 1px;

  ${({ gutter }) =>
    gutter &&
    css`
      margin-top: ${gutter}px;
      margin-bottom: ${gutter}px;
    `}
`
