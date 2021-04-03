import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = {
  onChange?(value: string): void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

function Search({ onChange, ...props }: Props) {
  return (
    <Wrapper>
      <Input {...props} />
      <Suffix>.GG</Suffix>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 260px;
`
const Input = styled.input`
  padding: 8px 35px 8px 14px;
  outline: none;
  width: 100%;

  &::placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.color.grey[2]};
  }
`

const Suffix = styled.div`
  position: absolute;
  font-size: 14px;
  right: 10px;
  top: 10px;
  /* top: 50%; */
  color: ${({ theme }) => theme.color.blue};
  font-weight: bold;
`

export default Search
