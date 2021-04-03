import { FC } from 'react'

type Props = {
  /**
   * Text Color
   * Default - black
   */
  color: 'grey' | 'blue' | 'red' | 'green' | 'orange' | 'black' | 'white'

  /**
   * Font Weight
   * Default - false
   */
  bold: boolean

  /**
   * Font Size
   * Default - 14
   */
  fontSize: number
}
const Text: FC<Props> = () => {
  return <div>Text Components</div>
}

export default Text
