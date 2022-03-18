import classNames from 'classnames/bind';
import Spinner from '../spinner';

function TreeNode({ data, async, onClick, level = 1 }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="tree__node-children">
      {
        data.map((node, i) => {
          const branchLoader = node.isLoading
            ? <Spinner size={ Spinner.sizes.S } />
            : null;

          return (
            <div
              className={ classNames(
                'tree__node',
                { 'tree__node_no-children': (!async && !node?.children?.length) || (async && node?.isLoaded && !node?.children?.length) },
                { tree__node_expanded: node.isExpanded }
              ) }
              key={ i }
              data-level={ level }
            >
              <div className="tree__node-name" onClick={ () => onClick(node) } >
                { node.firstName } { node.lastName } { branchLoader }
              </div>
              <TreeNode data={ node.children } level={ level + 1 } onClick={ onClick } />
            </div>
          )
        })
      }
    </div>
  )
}

export default TreeNode;
