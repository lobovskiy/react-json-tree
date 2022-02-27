import getData from './get-data';
import { treeDTO } from '../dto';
import { getRootParents } from '../helpers';

async function getTree() {
	const data = await getData('http://localhost:3004/family');

  const treeData = data.map(item => treeDTO(item));

  const structuredTreeData = getRootParents(treeData)

	return structuredTreeData;
}

export default getTree;
