import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

function Search(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper>
      <Input {...props} />
      <Suffix>.GG</Suffix>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  padding: 8px 35px 8px 14px;
  outline: none;
  border: none;
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
