import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchFamilyChildren, toggleExpand } from '../../store/reducer';
import TreeNode from './tree-node';
import Spinner from '../spinner';
import './tree.scss';

function Tree({ data, async = false }) {
  const dispatch = useDispatch();

  if (!data?.length) {
    return null;
  }

  function handleExpand(node) {
    const { id, isLoaded } = node;
    dispatch(toggleExpand(id, async));

    if (async && !isLoaded) {
      dispatch(fetchFamilyChildren(id));
    }
  }

  return (
    <div className="app-tree">
      {
        data.map((node, i) => {

          const branchLoader = node.isLoading
            ? <Spinner />
            : null;

          return (
            <div
              className={ classNames('tree__node', { tree__node_expanded: node.isExpanded }) }
              key={ i }
            >
              <div className="tree__node-name" onClick={ () => handleExpand(node) } >
                { node.firstName } { node.lastName } { branchLoader }
              </div>
              <TreeNode data={ node.children } async={ async } handleClick={ handleExpand } />
            </div>
          )
        })
      }
    </div>
  )
}

export default Tree;
