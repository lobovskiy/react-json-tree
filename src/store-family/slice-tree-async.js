import { createSlice } from '@reduxjs/toolkit';
import { fetchRoots, fetchChildren } from './action-creators';

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
              branch[i].isExpanded = !branch[i].isExpanded;
              isToggled = true;
              break;
            }

            if (branch[i]?.children?.length) {
              toggleExpand(branch[i].children);
            }

            if (isToggled) {
              break;
            }
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

    [fetchChildren.fulfilled.type]: (state, action) => {
      const id = action.meta.arg;

      function setChildrenById(tree, id) {
        let isSet = false;

        function setChildren(branch) {

          for (let i = 0; i < branch.length; i++) {
            if (branch[i].id === id) {
              branch[i].isLoaded = true;
              branch[i].isLoading = false;
              branch[i].children = action.payload;
              isSet = true;
              break;
            }

            if (branch[i]?.children?.length) {
              setChildren(branch[i].children);
            }

            if (isSet) {
              break;
            }
          }
        }

        setChildren(tree);
      }

      setChildrenById(state.members, id);
      treeAsyncSlice.caseReducers.toggleExpandNodeAsync(state, { payload: id });
    },
    [fetchChildren.pending.type]: (state, action) => {
      const id = action.meta.arg;

      function setLoaderById(tree, id) {
        let isSet = false;

        function setLoader(branch) {

          for (let i = 0; i < branch.length; i++) {
            if (branch[i].id === id) {
              branch[i].isLoading = true;
              isSet = true;
              break;
            }

            if (branch[i]?.children?.length) {
              setLoader(branch[i].children);
            }

            if (isSet) {
              break;
            }
          }
        }

        setLoader(tree);
      }

      setLoaderById(state.members, id);
    },
    [fetchChildren.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const { toggleExpandNodeAsync } = treeAsyncSlice.actions;
export default treeAsyncSlice.reducer;
