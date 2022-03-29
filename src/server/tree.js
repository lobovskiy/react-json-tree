import { getTreeItem } from './dto';

async function getTree(filename) {
	const data = await fetch(`./mocks/${filename}`).then(res => res.json());

  const treeData = data.family.map(getTreeItem);

	return treeData;
}

export default getTree;
