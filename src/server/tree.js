import { treeDTO } from './dto';

async function getTree(filename) {
	const data = await fetch(`./mocks/${filename}`).then(res => res.json());

  const treeData = data.family.map(item => treeDTO(item));

	return treeData;
}

export default getTree;
