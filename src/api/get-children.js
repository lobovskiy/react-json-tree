import getDataFromFile from './get-data-from-server';

async function getChildren(id) {
	return await getDataFromFile('MOCK_DATA.json', { dataRepresent: 'children', payload: { id } });
}

export default getChildren;
