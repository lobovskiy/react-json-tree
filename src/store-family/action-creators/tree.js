import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTree } from '../../api';
import { delay } from '../../helpers';

export const fetchTree = createAsyncThunk(
  'tree/fetchTree',
  async () => {
    await delay();
    const tree = await getTree();

    return tree;
  }
);
