import getData from './get-data';
import { getTableItem } from '../dto';

async function getTable() {
	const data = await getData('http://localhost:3004/family');

  const tableData = data.map(item => getTableItem(item));

	return await tableData;
}

export default getTable;
