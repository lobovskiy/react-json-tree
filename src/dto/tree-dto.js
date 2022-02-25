const treeDTO = data => ({
  id: data.id,
  first_name: data.first_name,
  last_name: data.last_name,
  gender: data.gender,
  parent_id: data.parent_id
})

export default treeDTO;
