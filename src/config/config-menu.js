import { FamilyTablePage, FamilyTreePage, FamilyTreeAsyncPage } from '../pages';

const configMenu = {
  items: [
    {
      url: 'table',
      page: <FamilyTablePage />,
      icon: 'icon-table.svg',
      text: 'navigation.table'
    },
    {
      url: 'tree',
      page: <FamilyTreePage />,
      icon: 'icon-tree.svg',
      text: 'navigation.tree'
    },
    {
      url: 'async-tree',
      page: <FamilyTreeAsyncPage />,
      icon: 'icon-tree.svg',
      text: 'navigation.async-tree'
    }
  ]
}

export default configMenu;
