import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTable, getTree, getRoots, getChildren } from '../api';
import { delay } from '../helpers';

export const fetchTable = createAsyncThunk(
  'table/fetchTable',
  async () => {
    await delay();
    const table = await getTable();

    return table;
  }
);

export const fetchTree = createAsyncThunk(
  'tree/fetchTree',
  async () => {
    await delay();
    const tree = await getTree();

    return tree;
  }
);

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
