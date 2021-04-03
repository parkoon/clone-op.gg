type Props = {
  /**
   * Badge Share
   * Default - round
   */
  shape: 'round' | 'square'

  /**
   * Badge Background Color
   * Default - Grey
   */
  backgroundColor: 'grey' | 'orange' | 'tomato'

  /**
   * Reverse of Font Color
   * Default - false
   *
   * When False, Font color will be darken
   */
  reverse?: boolean
}

function Badge() {
  return <div>Badge Components</div>
}

export default Badge
