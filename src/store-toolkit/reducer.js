import { createAction, createReducer } from '@reduxjs/toolkit';
import { getTable } from '../api';

const defaultState = {
  family: {
    table: [],
    tree: [],
    asyncTree: []
  },
  loading: false,
  error: ''
};

const tableFetchingStart = createAction('tableFetchingStart');
const tableFetchingSuccess = createAction('tableFetchingSuccess');
const tableFetchingError = createAction('tableFetchingError');

export default createReducer(defaultState, {
  [tableFetchingStart]: function(state) {
    state.loading = true;
  },
  [tableFetchingSuccess]: function(state, action) {
    state.loading = false;
    state.family.table = action.payload;
    state.error = '';
  },
  [tableFetchingError]: function(state, action) {
    state.loading = false;
    state.error = action.payload;
  }
})

export const fetchFamily = () => async dispatch => {
  try {
    dispatch(tableFetchingStart());
    await new Promise(res => setTimeout(() => res(), 2000));
    const response = await getTable();
    dispatch(tableFetchingSuccess(response));
  } catch (error) {
    dispatch(tableFetchingError(error.message));
  }
}
