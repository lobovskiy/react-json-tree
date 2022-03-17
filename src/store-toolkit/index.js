// import { createStore, applyMiddleware } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitReducer from './reducer';

const rootReducer = combineReducers({
  toolkit: toolkitReducer
});

export const store = configureStore({ reducer: rootReducer });
