export type Team = {
  teamId: string
  players: Player[]
}

type Player = {
  champion: { imageUrl: string; level: number }
  summonerId: string
  summonerName: string
}
