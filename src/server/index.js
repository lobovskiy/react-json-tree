import table from './table';
import tree from './tree';
import { getRootParents, createTreeArray } from './handlers';

async function serverRequest(filename, dataRepresent) {
  switch (dataRepresent) {
    case 'table':
      return JSON.stringify(await table(filename));
    case 'tree': {
      const treeData = await tree(filename);
      const rootParents = getRootParents(treeData);
      const structuredTreeData = createTreeArray(treeData, rootParents);
      return JSON.stringify(structuredTreeData);
    }
    case 'roots': {
      const treeData = await tree(filename);
      const rootParents = getRootParents(treeData);
      return JSON.stringify(rootParents);
    }
    default:
      return null;
  }
}

export default serverRequest;
