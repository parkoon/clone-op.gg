export type Game = {
  mmr: number
  champion: {
    imageUrl: string
    level: number
  }
  spells: Array<{ imageUrl: string }>
  items: Array<{ imageUrl: string }>
  needRenew: boolean
  gameId: string
  createDate: number
  gameLength: number
  gameType: string
  summonerId: string
  summonerName: string
  tierRankShort: string
  stats: {
    general: GeneralStat
    ward: WardStat
  }
  mapInfo: null
  peak: string[]
  isWin: boolean
}

type GeneralStat = {
  kill: 6
  death: 10
  assist: 1
  kdaString: string
  cs: 174
  csPerMin: 7.5
  contributionForKillRate: string
  goldEarned: 1358
  totalDamageDealtToChampions: 4017
  largestMultiKillString: ''
  opScoreBadge: ''
}

type WardStat = {
  sightWardsBought: number
  visionWardsBought: number
}
