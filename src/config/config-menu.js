import { TablePage, TreePage, TreeAsyncPage } from '../pages';

const iconCatalog = 'assets/img/icons/';

function getMenuIcon(fileName) {
  return require(`../${iconCatalog}${fileName}`);
}

export const configMenu = {
  items: [
    {
      url: 'table',
      page: <TablePage />,
      icon: getMenuIcon('icon-table.svg'),
      text: 'navigation.table'
    },
    {
      url: 'tree',
      page: <TreePage />,
      icon: getMenuIcon('icon-tree.svg'),
      text: 'navigation.tree'
    },
    {
      url: 'async-tree',
      page: <TreeAsyncPage />,
      icon: getMenuIcon('icon-tree.svg'),
      text: 'navigation.async-tree'
    }
  ]
}
