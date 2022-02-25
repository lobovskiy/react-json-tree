import { FamilyTablePage, FamilyTreePage } from '../components/pages';

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
    }
  ]
}

export default configMenu;
