const formatter = {
  mmss(time: number) {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60

    return `${minutes}분 ${seconds}초`
  },
  dotdotdot(value: string) {
    if (value.length > 5) {
      return `${value.slice(0, 5)}...`
    }

    return value
  },
}

export default formatter
