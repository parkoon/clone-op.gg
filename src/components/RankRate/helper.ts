export const calcPercentage = (win: number, loss: number) => {
  const total = win + loss
  const winPercent = (win / total) * 100
  const lossPercent = (loss / total) * 100
  return {
    win: win > loss ? Math.ceil(winPercent) : Math.floor(winPercent),
    loss: win > loss ? Math.floor(lossPercent) : Math.ceil(lossPercent),
  }
}
