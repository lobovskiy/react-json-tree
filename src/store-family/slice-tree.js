import { createSlice } from '@reduxjs/toolkit';
import { fetchTree, fetchRoots } from './action-creators';

const initialState = {
  members: [],
  isLoading: false,
  error: ''
}

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    toggleExpandNode(state, action) {
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
    [fetchTree.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.members = action.payload;
    },
    [fetchTree.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTree.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { toggleExpandNode } = treeSlice.actions;
export default treeSlice.reducer;
