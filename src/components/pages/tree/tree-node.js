function TreeNode({ data, level = 1 }) {
  if (!data?.length) {
    return null;
  }

  return (
    data.map((item, i) => {
      const children = item?.children?.length ?
        <TreeNode data={item.children} level={level + 1} /> :
        null;

      return (
        <div key={ i } data-level={level} >
          { item.firstName } { item.lastName }
          { children }
        </div>
      )
    })
  )
}

export default TreeNode;
