import TableColumns from './table-columns';
import { getConfigPropertyValue } from './table-helpers';

function TableRows({ data, configColumns }) {
  const rowKeys = configColumns.map(columnParameters => getConfigPropertyValue(columnParameters, 'dataField'));

  return (
    data.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="table__row">
          <TableColumns row={ row } rowKeys={ rowKeys } />
        </div>
      )
    })
  )
}

export default TableRows;
