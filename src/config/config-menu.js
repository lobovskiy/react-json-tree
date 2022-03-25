import { TablePage, TreePage, TreeAsyncPage } from '../pages';

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
    },
    {
      url: 'async-tree',
      page: <TreeAsyncPage />,
      icon: 'icon-tree.svg',
      text: 'navigation.async-tree'
    }
  ]
}

export default configMenu;
