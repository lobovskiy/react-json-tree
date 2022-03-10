import getDataFromFile from './get-data-from-server';

async function getTree() {
	return await getDataFromFile('MOCK_DATA.json', 'tree');
}

export default getTree;
