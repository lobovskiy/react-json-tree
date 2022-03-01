import TreeNode from './tree-node';
import { ReactComponent as Arrow } from './arrow-right.svg';
import './tree.scss';

function Tree({ data }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="app-tree">
      {
        data.map((item, i) => {
          let arrow = null;
          if (item?.children?.length) {
            arrow = <Arrow />;
          }

          return (
            <div className="tree__node" key={ i }>
              <div className="tree__node-name">
                <div className="tree__node-arrow">{ arrow }</div>
                { item.firstName } { item.lastName }
              </div>
              <TreeNode data={ item.children } />
            </div>
          )
        })
      }
    </div>
  )
}

export default Tree;
