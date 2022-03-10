import table from './table';
import tree from './tree';

async function serverRequest(filename, dataRepresent) {
  switch (dataRepresent) {
    case 'table':
      return await table(filename);
    case 'tree':
      return await tree(filename);
    default:
      return null;
  }
}

export default serverRequest;
