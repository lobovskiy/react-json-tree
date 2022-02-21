function TableColumns({ row, rowKeys }) {

  if (!rowKeys?.length) {
    return null;
  }

  return (
    rowKeys.map((rowKey, i) => {
      return (
        <div key={i}>{row[rowKey]}</div>
      )
    })
  )
}

export default TableColumns;
