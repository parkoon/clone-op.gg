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
  average(kill: number, assist: number, death: number) {
    return ((kill + assist) / death).toFixed(2)
  },
}

export default calculator
