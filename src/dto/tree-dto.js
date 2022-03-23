const getTreeItem = data => ({
  id: data.id,
  firstName: data.first_name,
  lastName: data.last_name,
  gender: data.gender,
  parentId: data.parent_id
})

export default getTreeItem;
