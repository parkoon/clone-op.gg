import React, { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <Wrapper {...props} src="https://picsum.photos/id/237/200/300" />
}

const Wrapper = styled.img`
  object-fit: cover;
  border-radius: 100%;
`

export default Image
