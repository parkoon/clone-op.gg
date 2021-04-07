export type Match = {
  champions: [
    {
      imageUrl: 'string'
      level: 0
    }
  ]
  games: [
    {
      champion: {
        imageUrl: 'string'
        level: 0
      }
      createDate: 0
      gameId: 'string'
      gameLength: 0
      gameType: 'string'
      isWin: true
      items: [
        {
          imageUrl: 'string'
        }
      ]
      mapInfo: {
        imageUrl: 'string'
        mapId: 0
      }
      mmr: 0
      needRenew: true
      peak: ['string']
      spells: [
        {
          imageUrl: 'string'
        }
      ]
      stats: {
        general: {
          assist: 0
          contributionForKillRate: 'string'
          cs: 0
          csPerMin: 0
          death: 0
          goldEarned: 0
          kdaString: 'string'
          kill: 0
          largestMultiKillString: 'string'
          opScoreBadge: 'string'
          totalDamageDealtToChampions: 0
        }
        ward: {
          sightWardsBought: 0
          visionWardsBought: 0
        }
      }
      summonerId: 'string'
      summonerName: 'string'
      tierRankShort: 'string'
    }
  ]
  positions: [
    {
      games: 0
      losses: 0
      position: 'string'
      positionName: 'string'
      wins: 0
    }
  ]
  summary: {
    assists: 0
    deaths: 0
    kills: 0
    losses: 0
    wins: 0
  }
}
