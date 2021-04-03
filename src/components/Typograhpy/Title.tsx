import { FC } from 'react'

type Props = {
  /**
   * Title Level (h1, h2, h3, h4)
   * Default - 1
   */
  level: 1 | 2 | 3 | 4

  /**
   * Disable Font Weight Bold
   * Default - false
   */
  light: boolean
}

const Title: FC<Props> = () => {
  return <div>Title Components</div>
}

export default Title
