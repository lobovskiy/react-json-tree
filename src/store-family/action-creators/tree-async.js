import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRoots, getChildren } from '../../api';
import { delay } from '../../helpers';

export const fetchRoots = createAsyncThunk(
  'treeAsync/fetchTreeAsyncRoots',
  async () => {
    await delay();
    const roots = await getRoots();

    return roots;
  }
);

export const fetchChildren = createAsyncThunk(
  'treeAsync/fetchTreeAsyncChildren',
  async id => {
    await delay();
    const children = await getChildren(id);

    return children;
  }
);
