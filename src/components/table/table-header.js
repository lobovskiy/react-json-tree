import { getConfigPropertyValue } from './table-helpers';

function TableHeader({ columnsConfig }) {

  if (columnsConfig?.length) {
    return (
      <div className="table__row table__row_head">
        {
          columnsConfig.map((column, columnIndex) => {
            return (
              <div key={columnIndex}>{getConfigPropertyValue(column, 'text')}</div>
            )
          })
        }
      </div>
    )
  }

  else {
    return null;
  }
}

export default TableHeader;
