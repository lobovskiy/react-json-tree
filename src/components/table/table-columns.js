function TableColumns({ row, rowKeys }) {

  if (rowKeys?.length) {
    return (
      rowKeys.map((rowKey, i) => {
        return (
          <div key={i}>{row[rowKey]}</div>
        )
      })
    )
  }

  else {
    return null;
  }
}

export default TableColumns;
