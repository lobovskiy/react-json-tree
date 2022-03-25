import TableHeader from './table-header';
import TableRows from './table-rows';
import './table.scss';

function Table({ data, columns }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="table">
      <TableHeader configColumns={ columns } />
      <TableRows data={ data } configColumns={ columns } />
    </div>
  )
}

export default Table;
