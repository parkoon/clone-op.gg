import React from 'react'
import styled from 'styled-components'
import Image from '../Image'

type Props = {
  border: string
  icon: string
  level: number
}

function SummonerProfileIcon({ border, icon, level }: Props) {
  return (
    <Wrapper>
      <Border src={border} />
      <Image src={icon} shape="square" width="100" height="100" />
      <Level>12</Level>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Border = styled.div<{ src: string }>`
  left: -10px;
  top: -10px;
  position: absolute;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: ${({ src }) => `url(${src})`};
`

const Level = styled.span`
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100px;
  width: 44px;
  padding: 4px 0;
  text-align: center;
  color: ${({ theme }) => theme.color.gold};
  border: 1px solid ${({ theme }) => theme.color.gold};
  background: ${({ theme }) => theme.color.cement};
`

export default SummonerProfileIcon
