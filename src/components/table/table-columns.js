import { getConfigPropertyValue } from './table-helpers';

function TableColumns({ row, columnsConfig }) {

  if (columnsConfig?.length) {
    return (
      columnsConfig.map((columnParameters, columnIndex) => {
        const rowKey = getConfigPropertyValue(columnParameters, 'dataField');
        return (
          <div key={columnIndex}>{row[rowKey]}</div>
        )
      })
    )
  }

  else {
    return null;
  }
}

export default TableColumns;
