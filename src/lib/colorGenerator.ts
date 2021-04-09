import theme from '../assets/styles/theme'

const colorGenerator = {
  kda(value: number) {
    let color = theme.color.grey[6]
    if (value > 3) color = theme.color.green
    if (value > 4) color = theme.color.blue
    if (value > 5) color = theme.color.orange
    return color
  },
  winRate(value: number) {
    let color = theme.color.grey[6]
    if (value > 60) color = theme.color.red
    return color
  },
  average(value: number) {
    let color = theme.color.grey[6]
    if (value > 6) color = theme.color.orange
    return color
  },
}

export default colorGenerator
