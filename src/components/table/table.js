import TableHeader from './table-header';
import TableRows from './table-rows';
import './table.scss';

function Table({ data, columns }) {

  if (data?.length) {
    return (
      <div className="table">
        <TableHeader columnsConfig={columns} />
        <TableRows data={data} columnsConfig={columns} />
      </div>
    )
  }

  else {
    return null;
  }
}

export default Table;
