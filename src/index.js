import sortRows from './sort-rows'
import arrows from './arrows'

export default sorta

function sorta (table) {
  const tableChildren = [].slice.call(table.children)
  const thead = tableChildren[0]
  const tbody = tableChildren[1]

  const headers = ([].slice.call(thead.querySelectorAll('th')))
    .map((th) => ({
      el: th,
      key: th.getAttribute('data-sortKey'),
      order: 'asc'
    }))
    .filter(({key}) => !!key)

  const rows = ([].slice.call(tbody.querySelectorAll('tr')))
    .map((tr) => ({el: tr}))

  headers.forEach((header) => {
    const { el } = header

    el.addEventListener('click', sortRows.bind(null, tbody, headers, rows))
    header.arrows = el.appendChild(arrows.createArrows())
  })

  return {
    destroy () {
      headers.forEach(({el, arrows}) => {
        el.removeEventListener('click', sortRows)
        el.removeChild(arrows)
      })
    }
  }
}
