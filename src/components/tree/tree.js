import TreeNode from './tree-node';
import { expandChildNodes as handleClick } from './tree-handlers';
import './tree.scss';

function Tree({ data }) {

  if (!data?.length) {
    return null;
  }

  return (
    <div className="app-tree">
      {
        data.map((item, i) => {
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
