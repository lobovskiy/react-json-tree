import classNames from 'classnames/bind';

function TreeNode({ data, level = 1 }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="tree__node-children">
      {
        data.map((item, i) => {
          return (
            <div
              className={
                classNames(
                  'tree__node hidden',
                  { 'tree__node_no-children': !item?.children?.length }
                )
              }
              key={ i } data-level={ level }
            >
              <div className="tree__node-name">
                { item.firstName } { item.lastName }
              </div>
                <TreeNode data={ item.children } level={ level + 1 } />
              </div>
          )
        })
      }
    </div>
  )
}

export default TreeNode;
