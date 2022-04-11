import TableHeader from './table-header';
import TableRows from './table-rows';
import './table.scss';

function Table({ rows, columns }) {
  if (!rows?.length) {
    return null;
  }

  return (
    <div className="table">
      <TableHeader configColumns={ columns } />
      <TableRows rows={ rows } configColumns={ columns } />
    </div>
  )
}

export default Table;
