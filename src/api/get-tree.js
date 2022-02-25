import getData from './get-data';
import { treeDTO } from '../dto';
import { createTree } from '../helpers';

async function getTree() {
	const data = await getData('http://localhost:3004/family');

  const treeData = data.map(item => treeDTO(item));

  const structuredTreeData = createTree(treeData)

	return await structuredTreeData;
}

export default getTree;
