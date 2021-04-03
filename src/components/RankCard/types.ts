import { POSITION_MAP } from './constants'

export type BaseRankCardProps = {
  unRank?: boolean
  solo?: boolean
  position: keyof typeof POSITION_MAP
  gameCount: number
  rank: string
  lp: number
  win: number
  loss: number
  winningRate: number
}
