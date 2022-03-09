// import getData from './get-data';
import getDataSync from './get-data-sync';
import { tableDTO } from '../dto';

async function getTable() {
	// const data = await getData('http://localhost:3004/family');
  const data = await getDataSync('MOCK_DATA.json');

  // const tableData = data.map(item => tableDTO(item));
  const tableData = data.family.map(item => tableDTO(item));

	return await tableData;
}

export default getTable;
