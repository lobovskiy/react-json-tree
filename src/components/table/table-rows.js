import TableCells from './table-cells';

function TableRows({ rows, configColumns }) {
  return (
    rows.map(row => {
      return (
        <div key={ row.id } className="table__row">
          <TableCells row={ row } configColumns={ configColumns } />
        </div>
      )
    })
  )
}

export default TableRows;
