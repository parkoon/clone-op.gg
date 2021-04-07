import React from 'react'
import { Game } from '../../../model/Game'
import GameItemCard from '../../GameItemCard'

type Props = {
  games: Game[]
}

function GameResultField({ games }: Props) {
  return (
    <div>
      {games.map((game, index) => (
        <GameItemCard key={index} {...game} />
      ))}
    </div>
  )
}

export default GameResultField
