import TableColumns from './table-columns';

function TableRows({ data, configColumns }) {
  return (
    data.map(row => {
      return (
        <div key={ row.id } className="table__row">
          <TableColumns row={ row } configColumns={ configColumns } />
        </div>
      )
    })
  )
}

export default TableRows;
