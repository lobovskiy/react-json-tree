function TableColumns({ row, configColumns }) {

  if (!configColumns?.length) {
    return null;
  }

  return (
    configColumns.map((columnParameters, i) => {
      const { formatter, dataField } = columnParameters;
      const key = `${row.id}${row[dataField]}`;

      if (formatter) {
        return formatter(row[dataField], key);
      } else {
        return (
          <div key={ key }>
            { row[dataField] }
          </div>
        );
      }
    })
  )
}

export default TableColumns;
