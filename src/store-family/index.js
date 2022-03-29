// import { createStore, applyMiddleware } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tableSlice from './slice-table';
import treeSlice from './slice-tree';
import treeAsyncSlice from './slice-tree-async';

const rootReducer = combineReducers({
  table: tableSlice,
  tree: treeSlice,
  treeAsync: treeAsyncSlice
});

export const store = configureStore({ reducer: rootReducer });
