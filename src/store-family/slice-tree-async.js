import { createSlice } from '@reduxjs/toolkit';
import { fetchRoots } from './action-creators';

const initialState = {
  members: [],
  isLoading: false,
  error: ''
}

const treeAsyncSlice = createSlice({
  name: 'treeAsync',
  initialState,
  reducers: {
    toggleExpandNodeAsync(state, action) {
      const id = action.payload;

      function toggleExpandById(tree, id) {
        let isToggled = false;

        function toggleExpand(branch) {

          for (let i = 0; i < branch.length; i++) {
            if (branch[i].id === id) {
              branch[i].isExpanded = !branch[i].isExpanded; // isExpanded изначально undefined, надо подумать
              isToggled = true;
              break;
            }

            if (branch[i]?.children?.length) {
              toggleExpand(branch[i].children);
            }

            if (isToggled) break;
          }
        }

        toggleExpand(tree);
      }

      toggleExpandById(state.members, id);
    }
  },
  extraReducers: {
    [fetchRoots.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.members = action.payload;
    },
    [fetchRoots.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRoots.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const { toggleExpandNodeAsync } = treeAsyncSlice.actions;
export default treeAsyncSlice.reducer;
