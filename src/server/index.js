import table from './table';
import tree from './tree';
import { getRootParents, createTreeArray, getChildren } from './handlers';

async function serverRequest(filename, dataRepresent) {
  if (typeof dataRepresent === 'string') {
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

  if (typeof dataRepresent === 'object') {
    switch (dataRepresent.represent) {
      case 'children': {
        const treeData = await tree(filename);
        const rootParents = getRootParents(treeData);
        const structuredTreeData = createTreeArray(treeData, rootParents);
        const children = getChildren(structuredTreeData, dataRepresent.payload.id);
        return JSON.stringify(children);
      }
      default:
        return null;
    }
  }
}

export default serverRequest;
