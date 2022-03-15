import classNames from 'classnames/bind';
import Spinner from '../spinner';

function TreeNode({ data, async, handleClick, level = 1 }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="tree__node-children">
      {
        data.map((node, i) => {
          const branchLoader = node.isLoading
            ? <Spinner />
            : null;

          return (
            <div
              className={
                classNames(
                  'tree__node',
                  { 'tree__node_no-children': (!async && !node?.children?.length) || (async && node?.isLoaded && !node?.children?.length) },
                  { tree__node_expanded: node.isExpanded }
                )
              }
              key={ i }
              data-level={ level }
            >
              <div className="tree__node-name" onClick={ () => handleClick(node) } >
                { node.firstName } { node.lastName } { branchLoader }
              </div>
              <TreeNode data={ node.children } level={ level + 1 } async={ async } handleClick={ handleClick } />
            </div>
          )
        })
      }
    </div>
  )
}

export default TreeNode;
