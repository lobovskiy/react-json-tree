import getDataFromServer from './get-data-from-server';

async function getRoots() {
  return await getDataFromServer('MOCK_DATA.json', 'roots');
}

export default getRoots;
