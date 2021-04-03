import { InputHTMLAttributes } from 'react'

type Props = {
  onChange(value: string): void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

function Search() {
  return <input>Search Components</input>
}

export default Search
