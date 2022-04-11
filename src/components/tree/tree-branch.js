import classNames from 'classnames/bind';
import Spinner from '../spinner';

function TreeBranch({ nodes, async, level, onClick }) {
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className="tree__node-children">
      {
        nodes.map((node, i) => {
          const branchSpinner = <Spinner size="small" />;

          return (
            <div
              className={ classNames(
                "tree__node",
                { "tree__node_no-children": (!async && !node?.children?.length) || (async && node?.isLoaded && !node?.children?.length) },
                { "tree__node_expanded": node.isExpanded }
              ) }
              key={ i }
              data-level={ level }
            >
              <div className="tree__node-name" onClick={ () => onClick(node) } >
                { node.firstName } { node.lastName } { node.isLoading && branchSpinner }
              </div>
              <TreeBranch nodes={ node.children } async={ async } level={ level++ } onClick={ onClick } />
            </div>
          )
        })
      }
    </div>
  )
}

export default TreeBranch;
