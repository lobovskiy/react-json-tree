import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { toggleExpandNode } from '../../store-family/slice-tree';
import { toggleExpandNodeAsync } from '../../store-family/slice-tree-async';
import { fetchChildren } from '../../store-family/action-creators';
import TreeBranch from './tree-branch';
import Spinner from '../spinner';
import './tree.scss';

function Tree({ nodes, async = false }) {
  const dispatch = useDispatch();

  if (!nodes?.length) {
    return null;
  }

  function handleExpand(node) {
    const { id, isLoaded } = node;

    if (async && !isLoaded) {
      dispatch(fetchChildren(id));
    } else if (async) {
      dispatch(toggleExpandNodeAsync(id));
    } else {
      dispatch(toggleExpandNode(id));
    }
  }

  return (
    <div className="tree">
      {
        nodes.map((node, i) => {

          const nodeLoader = <Spinner size="small" />;

          return (
            <div
              className={ classNames("tree__node", { "tree__node_expanded": node.isExpanded }) }
              key={ i }
            >
              <div className="tree__node-name" onClick={ () => handleExpand(node) } >
                { node.firstName } { node.lastName } { node.isLoading && nodeLoader }
              </div>
              <TreeBranch nodes={ node.children } async={ async } level={ 1 } onClick={ handleExpand } />
            </div>
          );
        })
      }
    </div>
  )
}

export default Tree;
