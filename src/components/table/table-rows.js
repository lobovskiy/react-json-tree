import TableColumns from './table-columns';
import { getConfigPropertyValue } from './table-helpers';

function TableRows({ data, columnsConfig }) {
  const rowKeys = columnsConfig.map(columnParameters => getConfigPropertyValue(columnParameters, 'dataField'));

  return (
    data.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="table__row">
          <TableColumns row={row} rowKeys={rowKeys} />
        </div>
      )
    })
  )
}

export default TableRows;
