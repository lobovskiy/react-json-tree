import { createSlice } from '@reduxjs/toolkit';
import { fetchFamilyTable } from './action-creators';

const toolkitTableSlice = createSlice({
  name: 'table',
  initialState: {
    family: {
      table: [],
      tree: [],
      asyncTree: []
    },
    isLoading: false,
    error: ''
  },
  extraReducers: {
    [fetchFamilyTable.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.family.table = action.payload;
    },
    [fetchFamilyTable.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFamilyTable.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default toolkitTableSlice.reducer;
// export const {  } = toolkitTableSlice.actions;
