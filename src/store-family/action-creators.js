import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTable, getTree, getRoots, getChildren } from '../api';

function delay(ms) {
  return new Promise(res => setTimeout(() => res(), ms));
}

export const fetchTable = createAsyncThunk(
  'table/fetchTable',
  async () => {
    await delay(1000);
    const table = await getTable();
    return table;
  }
);

export const fetchTree = createAsyncThunk(
  'tree/fetchTree',
  async () => {
    await delay(1000);
    const tree = await getTree();
    return tree;
  }
);

export const fetchRoots = createAsyncThunk(
  'treeAsync/fetchTreeAsyncRoots',
  async () => {
    await delay(1000);
    const roots = await getRoots();
    return roots;
  }
);

export const fetchChildren = createAsyncThunk(
  'treeAsync/fetchTreeAsyncChildren',
  async id => {
    await delay(1000);
    const children = await getChildren(id);
    return children;
  }
);
