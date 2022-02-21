const menuConfig = {
  items: [
    {
      url: 'table',
      icon: 'icon-table.svg',
      text: 'navigation.table'
    }
  ]
}

const tableConfig = {
  columns: [
    // 'id',
    {
      dataField: 'first_name',
      text: 'First name'
    },
    {
      dataField: 'last_name',
      text: 'Last name'
    },
    {
      dataField: 'gender',
      text: 'Gender'
    }
  ]
}

export {
  menuConfig,
  tableConfig
}
