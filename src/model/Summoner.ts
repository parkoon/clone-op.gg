export type Summoner = {
  ladderRank: LadderRank
  leagues: League[]
  level: number
  name: string
  previousTiers: PreviousTier[]
  profileBackgroundImageUrl: string
  profileBorderImageUrl: string
  profileImageUrl: string
  url: string
}

type TierRank = {
  division: string
  imageUrl: string
  lp: number
  name: string
  season: number
  shortString: string
  string: string
  tier: string
  tierDivision: string
  tierRankPoint: number
}

export type League = {
  hasResults: true
  losses: number
  tierRank: TierRank
  wins: number
}

type LadderRank = { rank: number; rankPercentOfTop: number }
export type PreviousTier = {
  division: string
  imageUrl: string
  lp: number
  name: string
  season: number
  shortString: string
  string: string
  tier: string
  tierDivision: string
  tierRankPoint: number
}
