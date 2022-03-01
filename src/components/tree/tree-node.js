import { ReactComponent as Arrow } from './arrow-right.svg';

function TreeNode({ data, level = 1 }) {
  if (!data?.length) {
    return null;
  }

  return (
    data.map((item, i) => {
      let arrow = null;
      if (item?.children?.length) {
        arrow = <Arrow />;
      }

      return (
        <div className="tree__node" key={ i } data-level={ level } >
          <div className="tree__node-name">
            <div className="tree__node-arrow">{ arrow }</div>
            { item.firstName } { item.lastName }
          </div>
          <TreeNode data={ item.children } level={ level + 1 } />
        </div>
      )
    })
  )
}

export default TreeNode;
