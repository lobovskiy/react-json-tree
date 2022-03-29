import { createSlice } from '@reduxjs/toolkit';
import { fetchTable } from './action-creators';

const initialState = {
  members: [],
  isLoading: false,
  error: ''
}

const toolkitTableSlice = createSlice({
  name: 'table',
  initialState,
  extraReducers: {
    [fetchTable.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.members = action.payload;
    },
    [fetchTable.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTable.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default toolkitTableSlice.reducer;
