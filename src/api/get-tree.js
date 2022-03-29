import { getDataFromFile } from './get-data-from-server';

export async function getTree() {
	return await getDataFromFile('MOCK_DATA.json', 'tree');
}
