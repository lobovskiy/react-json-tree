import { TablePage, TreePage } from '../pages';

const configMenu = {
  items: [
    {
      url: 'table',
      page: <TablePage />,
      icon: 'icon-table.svg',
      text: 'navigation.table'
    },
    {
      url: 'tree',
      page: <TreePage />,
      icon: 'icon-tree.svg',
      text: 'navigation.tree'
    }
  ]
}

export default configMenu;
