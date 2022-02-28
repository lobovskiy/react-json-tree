function TreeNode({ data }) {
  if (!data?.length) {
    return null;
  }

  return (
    data.map((item, i) => {
      const children = item?.children?.length ?
        <TreeNode data={item.children} /> :
        null;

      return (
        <div key={ i }>
          { item.firstName } { item.lastName }
          { children }
        </div>
      )
    })
  )
}

export default TreeNode;
