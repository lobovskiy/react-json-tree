import classNames from 'classnames/bind';
import Spinner from '../spinner';

function TreeNode({ data, async, level = 1 }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="tree__node-children">
      {
        data.map((item, i) => {
          const branchLoader = item.isLoading
            ? <Spinner />
            : null;

          return (
            <div
              className={
                classNames(
                  'tree__node',
                  { 'tree__node_no-children': (!async && !item?.children?.length) || (async && item?.isLoaded && !item?.children?.length) }
                )
              }
              key={ i } data-level={ level }
            >
              <div className="tree__node-name" data-id={ item.id }>
                { item.firstName } { item.lastName } { branchLoader }
              </div>
              <TreeNode data={ item.children } level={ level + 1 } async={ async } />
            </div>
          )
        })
      }
    </div>
  )
}

export default TreeNode;
