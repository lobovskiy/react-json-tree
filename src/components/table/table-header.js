import { getConfigPropertyValue } from './table-helpers';

function TableHeader({ configColumns }) {
  if (!configColumns?.length) {
    return null;
  }

  return (
    <div className="table__row table__row_head">
      {
        configColumns.map((column, columnIndex) => {
          return (
            <div key={ columnIndex }>
              { getConfigPropertyValue(column, 'text') }
            </div>
          )
        })
      }
    </div>
  )
}

export default TableHeader;
