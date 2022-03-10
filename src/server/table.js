import { tableDTO } from './dto';

async function table(filename) {
  const data = await fetch(`./mocks/${filename}`).then(res => res.json());

  const tableData = data.family.map(item => tableDTO(item));

	return JSON.stringify(tableData);
}

export default table;
