import { getDataFromFile } from './get-data-from-server';

export async function getTable() {
  return await getDataFromFile('MOCK_DATA.json', 'table');
}
