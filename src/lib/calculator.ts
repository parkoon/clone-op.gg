const calculator = {
  winRate(win: number, loss: number) {
    return loss === 0 ? 100 : Math.floor((win / (win + loss)) * 100)
  },
  csPerMinute(cs: number) {
    return (cs / 60).toFixed(1)
  },
  winLosePercentage(win: number, loss: number) {
    const total = win + loss
    const winPercent = (win / total) * 100
    const lossPercent = (loss / total) * 100
    return {
      win: win > loss ? Math.ceil(winPercent) : Math.floor(winPercent),
      loss: win > loss ? Math.floor(lossPercent) : Math.ceil(lossPercent),
    }
  },
  kda(kill: number, assist: number, death: number) {
    if (kill + assist === 0) return 0
    return ((kill + assist) / death).toFixed(2)
  },
  positionRate(positionCount: number, totalGameCount: number) {
    return Math.floor((positionCount / totalGameCount) * 100)
  },
  killShare(kill: number, assist: number, death: number) {
    return Math.floor((kill / (kill + assist + death)) * 100)
  },
}

export default calculator
