import { ReactNode } from 'react'
import styled from 'styled-components'
import theme from '../../assets/styles/theme'
import Image from '../Image'
import { Text } from '../Typography'
import { IMAGE_SIZE } from './constants'

type Props = {
  src: string
  title: string
  subtitle?: string | ReactNode
  size?: keyof typeof IMAGE_SIZE
}
function ChampionProfile({ size = 'md', src, title, subtitle }: Props) {
  return (
    <Wrapper>
      <Image src={src} width={IMAGE_SIZE[size]} height={IMAGE_SIZE[size]} />

      <Info>
        <Text color={theme.color.grey[6]} fontSize={13} block bold>
          {title}
        </Text>

        {typeof subtitle === 'string' ? (
          <Text fontSize={11} color={theme.color.grey[4]}>
            {subtitle}
          </Text>
        ) : (
          <>{subtitle}</>
        )}
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Info = styled.div`
  margin-left: 10px;
  > span {
    margin-bottom: 4px;
  }
  /* display: grid; */
  /* grid-template-rows: 1fr 1fr; */
`

export default ChampionProfile
