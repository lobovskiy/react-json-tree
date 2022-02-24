import getData from './get-data';
import { tableDTO } from '../dto';

async function getTable() {
	const data = await getData('http://localhost:3004/family');

  const tableData = tableDTO(data);

	return await tableData;
}

export default getTable;
