import tape from 'tape'
import tableMock from './utils/table-mock'
import sorta from '../src/'

tape('this works', (t) => {
  t.plan(2)
  const table = tableMock()
  const sortaTable = sorta(table)
  table.querySelector('th').click()
  table.querySelector('th').click()
  table.querySelector('th:last-of-type').click()

  t.ok(sortaTable, 'table renders')

  sortaTable.destroy()
  table.querySelector('th').click()
  t.ok(true, 'passing test')
})
