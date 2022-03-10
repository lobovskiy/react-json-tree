import getDataFromServer from './get-data-from-server';

async function getTable() {
  return await getDataFromServer('MOCK_DATA.json', 'table');
}

export default getTable;
