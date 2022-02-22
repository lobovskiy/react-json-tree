import TableColumns from './table-columns';

function TableRows({ data, configColumns }) {
  return (
    data.map((row, rowIndex) => {
      return (
        <div key={ rowIndex } className="table__row">
          <TableColumns row={ row } configColumns={ configColumns } />
        </div>
      )
    })
  )
}

export default TableRows;
