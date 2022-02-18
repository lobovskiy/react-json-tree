import './table.scss';

function Table({ t, data, columns }) {

  if (data?.length) {
    const tableRows = data.map((item, itemIndex) => {
      return (
        <div key={itemIndex} className="table__row">
          {columns.map((column, columnIndex) => <div key={`${itemIndex}${columnIndex}`}>{item[column]}</div>)}
        </div>
      )
    });

    return (
      <div className="table">
        {tableRows}
      </div>
    )
  }
  
  else {
    return null;
  }
}

export default Table;