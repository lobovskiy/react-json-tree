import TreeNode from './tree-node';
import { handleExpandSync, handleExpandAsync } from './tree-handlers';
import './tree.scss';

function Tree({ data, expandFunc = 'handleExpandSync' }) {

  if (!data?.length) {
    return null;
  }

  const handleClick = {
    handleExpandSync: handleExpandSync,
    handleExpandAsync: handleExpandAsync
  }

  return (
    <div className="app-tree">
      {
        data.map((item, i) => {
          return (
            <div className="tree__node" key={ i } onClick={ handleClick[expandFunc] }>
              <div className="tree__node-name" data-id={ item.id }>
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
