function TableCells({ row, configColumns }) {

  if (!configColumns?.length) {
    return null;
  }

  return (
    configColumns.map(columnParameters => {
      const { formatter, dataField } = columnParameters;
      const key = `${row.id}${row[dataField]}`;

      if (formatter) {
        return formatter(row[dataField], key);
      }

      return (
        <div key={ key }>
          { row[dataField] }
        </div>
      )
    })
  )
}

export default TableCells;
