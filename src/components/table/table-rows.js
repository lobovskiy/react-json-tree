import TableColumns from './table-columns';

function TableRows({ rows, configColumns }) {
  return (
    rows.map(row => {
      return (
        <div key={ row.id } className="table__row">
          <TableColumns row={ row } configColumns={ configColumns } />
        </div>
      )
    })
  )
}

export default TableRows;
