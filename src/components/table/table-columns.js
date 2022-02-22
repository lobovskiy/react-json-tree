function TableColumns({ row, configColumns }) {

  if (!configColumns?.length) {
    return null;
  }

  return (
    configColumns.map((columnParameters, i) => {
      const { formatter, dataField } = columnParameters;

      const cell = row[dataField];
      let className = '';

      if (formatter) {
        className = formatter(cell);
      }

      return (
        <div className={ className } key={ i }>
          { cell }
        </div>
      );
    })
  )
}

export default TableColumns;
