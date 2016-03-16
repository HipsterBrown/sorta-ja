export default function () {
  const table = make('table')
  const thead = make('thead')
  const tbody = make('tbody')

  const headRow = thead.appendChild(make('tr'))
  const headCellOne = make('th')
  headRow.appendChild(headCellOne).setAttribute('data-sortKey', 'name')

  headRow.appendChild(make('th'))

  const headCellThree = make('th')
  headRow.appendChild(headCellThree).setAttribute('data-sortKey', 'bday')

  const firstRow = tbody.appendChild(make('tr'))
  const firstRowCellOne = make('td')
  firstRow.appendChild(firstRowCellOne).setAttribute('data-name', 'sam')

  firstRow.appendChild(make('td'))

  const firstRowCellThree = make('td')
  firstRow.appendChild(firstRowCellThree).setAttribute('data-bday', '692254800000')

  const secondRow = tbody.appendChild(make('tr'))
  const secondRowCellOne = make('td')
  secondRow.appendChild(secondRowCellOne).setAttribute('data-name', 'annie')

  secondRow.appendChild(make('td'))

  const secondRowCellThree = make('td')
  secondRow.appendChild(secondRowCellThree).setAttribute('data-bday', '-6106046400000')

  const thirdRow = tbody.appendChild(make('tr'))
  const thirdRowCellOne = make('td')
  thirdRow.appendChild(thirdRowCellOne).setAttribute('data-name', 'louie')

  thirdRow.appendChild(make('td'))

  const thirdRowCellThree = make('td')
  thirdRow.appendChild(thirdRowCellThree).setAttribute('data-bday', '972878400000')

  table.appendChild(thead)
  table.appendChild(tbody)

  return table
}

function make (elementName) {
  return document.createElement(elementName)
}
