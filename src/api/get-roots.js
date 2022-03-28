import { getDataFromFile } from './get-data-from-server';

export async function getRoots() {
  return await getDataFromFile('MOCK_DATA.json', 'roots');
}
