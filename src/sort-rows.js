import getCellData from './get-cell-data'
import arrows from './arrows'

export default function sortRows (tbody, headers, rows, {target}) {
  const sortKey = target.getAttribute('data-sortKey')
  const header = headers.filter((th) => {
    const { key } = th
    const matchesKey = key === sortKey

    if (matchesKey) {
      return matchesKey
    } else {
      th.order = 'asc'
      arrows.setArrows(th.arrows.childNodes.item(0), 'both')
      return matchesKey
    }
  })[0]

  const { order } = header

  rows.sort((row1, row2) => {
    const value1 = getCellData(row1, sortKey)
    const value2 = getCellData(row2, sortKey)

    if (isNaN(Number(value1))) {
      return value1.localeCompare(value2)
    } else {
      return Number(value1) - Number(value2)
    }
  })

  if (order === 'desc') {
    rows.reverse()
    arrows.setArrows(header.arrows.childNodes.item(0), 'down')
  } else {
    arrows.setArrows(header.arrows.childNodes.item(0), 'up')
  }

  header.order = order === 'desc' ? 'asc' : 'desc'

  rows.forEach(({el}) => {
    tbody.appendChild(el)
  })
}
