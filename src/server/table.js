import { getTableItem } from './dto';

async function table(filename) {
  const data = await fetch(`./mocks/${filename}`).then(res => res.json());

  return data.family.map(item => getTableItem(item));
}

export default table;
