// import getData from './get-data';
import { treeDTO } from './dto';
import { getRootParents, createTreeArray } from './handlers';

async function getTree(filename) {
	const data = await fetch(`./mocks/${filename}`).then(res => res.json());

  const treeData = data.family.map(item => treeDTO(item));

  const rootParents = getRootParents(treeData);
  const structuredTreeData = createTreeArray(treeData, rootParents);

	return JSON.stringify(structuredTreeData);
}

export default getTree;
