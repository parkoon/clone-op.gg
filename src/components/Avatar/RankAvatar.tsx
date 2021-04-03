import { BaseAvatarProps } from './type'
import RANK from './Rank'

type Props = {
  /**
   * Eclipse of Avatar Title
   * Default - false
   */
  level: number
  rank: keyof typeof RANK
} & BaseAvatarProps

function RankAvatar() {
  return <div>RankAvatar Components</div>
}

export default RankAvatar
