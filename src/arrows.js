const arrowsPath = 'M16 17q0 0.406-0.297 0.703l-7 7q-0.297 0.297-0.703 0.297t-0.703-0.297l-7-7q-0.297-0.297-0.297-0.703t0.297-0.703 0.703-0.297h14q0.406 0 0.703 0.297t0.297 0.703zM16 11q0 0.406-0.297 0.703t-0.703 0.297h-14q-0.406 0-0.703-0.297t-0.297-0.703 0.297-0.703l7-7q0.297-0.297 0.703-0.297t0.703 0.297l7 7q0.297 0.297 0.297 0.703z'

const arrowUp = 'M16 11q0 0.406-0.297 0.703t-0.703 0.297h-14q-0.406 0-0.703-0.297t-0.297-0.703 0.297-0.703l7-7q0.297-0.297 0.703-0.297t0.703 0.297l7 7q0.297 0.297 0.297 0.703z'

const arrowDown = 'M16 17q0 0.406-0.297 0.703l-7 7q-0.297 0.297-0.703 0.297t-0.703-0.297l-7-7q-0.297-0.297-0.297-0.703t0.297-0.703 0.703-0.297h14q0.406 0 0.703 0.297t0.297 0.703z'

export default {
  createArrows () {
    const svgNS = 'http://www.w3.org/2000/svg'
    const svg = document.createElementNS(svgNS, 'svg')
    const path = document.createElementNS(svgNS, 'path')

    svg.setAttribute('viewBox', '0 0 16 28')
    svg.setAttribute('width', '10')
    svg.setAttribute('height', '16')
    path.setAttribute('d', arrowsPath)

    svg.appendChild(path)
    return svg
  },

  setArrows (el, direction) {
    let path
    switch (direction) {
      case 'up':
        path = arrowUp
        break
      case 'down':
        path = arrowDown
        break
      default:
        path = arrowsPath
    }

    el.setAttribute('d', path)
  }
}
