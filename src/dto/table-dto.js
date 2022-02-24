function tableDTO(data) {
  const tableData = data.map(item => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    gender: item.gender
  }));

	return tableData;
}

export default tableDTO;
