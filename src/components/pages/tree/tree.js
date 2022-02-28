import TreeNode from './tree-node';
import './tree.scss';

function Tree({ data }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="app-tree">
      {
        data.map((item, i) => {
          const children = item?.children?.length ?
            <TreeNode data={item.children} /> :
            null;

          return (
            <div key={ i }>
              { item.firstName } { item.lastName }
              { children }
            </div>
          )
        })
      }
    </div>
  )
}

export default Tree;
