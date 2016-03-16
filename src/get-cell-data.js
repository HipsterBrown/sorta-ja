export default getCellData

function getCellData (row, key) {
  let value = row[key]
  const { el } = row

  if (!value) {
    ([].slice.call(el.children)).forEach((child) => {
      const data = child.getAttribute(`data-${key}`)

      if (data) {
        row[key] = data
        value = data
      }
    })
  }

  return value
}
