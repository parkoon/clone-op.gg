import CHAMPIONS from './Champions'
import { BaseAvatarProps } from './type'

type Props = {
  /**
   * Eclipse of Avatar Title
   * Default - false
   */
  eclipse?: boolean

  /**
   * Champion Name
   */
  name: keyof typeof CHAMPIONS
} & BaseAvatarProps

function ChampionAvatar() {
  return <div>ChampionAvatar Components</div>
}

export default ChampionAvatar
