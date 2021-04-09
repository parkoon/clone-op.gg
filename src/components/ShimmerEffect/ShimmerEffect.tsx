import styled, { css, CSSProperties, keyframes } from 'styled-components'

type Props = {
  width?: number
  height?: number
  count?: number
  rounded?: boolean
  style?: CSSProperties
}
function ShimmerEffect({ count = 1, width, height, rounded = false, style: customStyle }: Props) {
  const elements = Array.from({ length: count })

  const style = {} as CSSProperties

  if (width) {
    style.width = width
  }

  if (height) {
    style.height = height
  }

  if (rounded) {
    style.width = width || '45px'
    style.height = height || '45px'
    style.borderRadius = '50%'
  }

  return (
    <>
      {elements.map((_, index) => (
        <Simmer count={count} key={index} style={{ ...style, ...customStyle }}>
          &zwnj;
        </Simmer>
      ))}
    </>
  )
}

export const ShimmerAnim = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`
const Simmer = styled.span<{ count: number }>`
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 1;
  width: 100%;
  animation: ${ShimmerAnim} 1.2s ease-in-out infinite;

  ${({ count }) =>
    count > 1 &&
    css`
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    `}
`

export default ShimmerEffect
