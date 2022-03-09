// import getData from './get-data';
import getDataSync from './get-data-sync';
import { treeDTO } from '../dto';
import { getRootParents, createTreeArray } from '../helpers';

async function getTree() {
	// const data = await getData('http://localhost:3004/family');
  const data = await getDataSync('MOCK_DATA.json');

  // const treeData = data.map(item => treeDTO(item));
  const treeData = data.family.map(item => treeDTO(item));

  const rootParents = getRootParents(treeData);

  const structuredTreeData = createTreeArray(treeData, rootParents);

	return structuredTreeData;
}

export default getTree;
