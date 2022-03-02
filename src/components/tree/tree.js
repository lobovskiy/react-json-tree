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

          const handleClick = event => {
            const target = event.target;

            if (target && target.classList.contains('tree__node-name')) {
              target.parentNode.classList.toggle('tree__node_expanded');
              target.parentNode.childNodes.forEach(node => {
                if (node.classList.contains('tree__node')) {
                  if (node.classList.contains('hidden')) {
                    node.classList.remove('hidden');
                  } else {
                    node.classList.add('hidden');
                  }
                }
              });
            }
          }

          return (
            <div className="tree__node" key={ i } onClick={ handleClick }>
              <div className="tree__node-name">
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
