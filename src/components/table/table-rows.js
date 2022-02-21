import TableColumns from './table-columns';

function TableRows({ data, columnsConfig }) {
  return (
    data.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="table__row">
          <TableColumns row={row} columnsConfig={columnsConfig} />
        </div>
      )
    })
  )
}

export default TableRows;
