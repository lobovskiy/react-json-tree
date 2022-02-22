function TableHeader({ configColumns }) {
  if (!configColumns?.length) {
    return null;
  }

  return (
    <div className="table__row table__row_head">
      {
        configColumns.map((columnParameters, columnIndex) => {
          const { text = '' } = columnParameters;

          return (
            <div key={ columnIndex }>
              { text }
            </div>
          )
        })
      }
    </div>
  )
}

export default TableHeader;
