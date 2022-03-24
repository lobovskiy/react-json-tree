import TreeNode from './tree-node';
import './tree.scss';

function Tree({ data }) {

  if (!data?.length) {
    return null;
  }

  function expandChildNodes(event) {
    const target = event.target;
    const childrenDiv =
      target
      && target.classList?.contains('tree__node-name')
      && target.nextElementSibling?.classList?.contains('tree__node-children')
        ? target.nextElementSibling
        : null;

    if (childrenDiv) {
        target.parentNode?.classList?.toggle('tree__node_expanded');
        childrenDiv.childNodes?.forEach(child => {
          if (child.classList?.contains('hidden')) {
            child.classList.remove('hidden');
          } else {
            child.classList?.add('hidden');
          }
        });
    }
  }

  return (
    <div className="tree">
      {
        data.map((item, i) => {
          return (
            <div className="tree__node" key={ i } onClick={ expandChildNodes }>
              <div className="tree__node-name">
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
