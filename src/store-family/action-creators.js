import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTable, getTree, getRoots, getChildren } from '../api';

const fetchTable = createAsyncThunk(
  'table/fetchTable',
  async () => {
    await new Promise(res => setTimeout(() => res(), 1000))
    const table = await getTable();
    return table;
  }
);

const fetchTree = createAsyncThunk(
  'tree/fetchTree',
  async () => {
    await new Promise(res => setTimeout(() => res(), 1000))
    const tree = await getTree();
    return tree;
  }
);

const fetchRoots = createAsyncThunk(
  'treeAsync/fetchTreeAsyncRoots',
  async () => {
    await new Promise(res => setTimeout(() => res(), 1000))
    const roots = await getRoots();
    return roots;
  }
);

const fetchChildren = createAsyncThunk(
  'treeAsync/fetchTreeAsyncChildren',
  async id => {
    await new Promise(res => setTimeout(() => res(), 1000))
    const children = await getChildren(id);
    return children;
  }
);

export { fetchTable, fetchTree, fetchRoots, fetchChildren };
