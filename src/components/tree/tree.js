import { useDispatch } from 'react-redux';
import { fetchFamilyChildren } from '../../store/reducer';
import TreeNode from './tree-node';
import './tree.scss';

function Tree({ data, async = false }) {
  const dispatch = useDispatch();

  function handleExpand(event) {
    const target = event.target;
    if (async) {
      // if (target.parentNode.getAttribute('data-loaded') )
      if(target.parentNode.getAttribute('data-loaded') !== '') {
        target.parentNode.setAttribute('data-loaded', '');
        dispatch(fetchFamilyChildren(+target.getAttribute('data-id')));
      }
      target.parentNode.classList.toggle('tree__node_expanded');

    } else {

      const childrenDiv =
        target
        && target?.classList.contains('tree__node-name')
        && target?.nextElementSibling?.classList.contains('tree__node-children')
          ? target.nextElementSibling
          : null;

      if (childrenDiv) {
          target.parentNode.classList.toggle('tree__node_expanded');
          childrenDiv.childNodes.forEach(child => {
            if (child.classList.contains('hidden')) {
              child.classList.remove('hidden');
            } else {
              child.classList.add('hidden');
            }
          });
      }
    }
  }

  if (!data?.length) {
    return null;
  }

  return (
    <div className="app-tree">
      {
        data.map((item, i) => {
          return (
            <div className="tree__node" key={ i } onClick={ handleExpand }>
              <div className="tree__node-name" data-id={ item.id }>
                { item.firstName } { item.lastName }
              </div>
                <TreeNode data={ item.children } async={ async } />
            </div>
          )
        })
      }
    </div>
  )
}

export default Tree;
