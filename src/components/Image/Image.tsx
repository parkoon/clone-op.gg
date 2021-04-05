import React, { ImgHTMLAttributes, ReactNode } from 'react'
import styled, { CSSProperties } from 'styled-components'

type Props = {
  /**
   * Image Shape
   * Default - round
   */
  shape?: 'round' | 'square'

  /**
   * Image Description
   */
  label?: ReactNode

  /**
   * Wrapper Style
   */
  wrapperStyle?: CSSProperties
} & ImgHTMLAttributes<HTMLImageElement>
function Image({ label, wrapperStyle, ...props }: Props) {
  return (
    <Wrapper style={wrapperStyle}>
      <Img {...props} src="https://picsum.photos/id/237/200/300" />
      {label && <LabelWrapper>{label}</LabelWrapper>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const LabelWrapper = styled.div`
  margin-left: 4px;
`
const Img = styled.img<Props>`
  object-fit: cover;
  border-radius: ${({ shape }) => (shape === 'square' ? '2px' : '100%')};
`

export default Image
