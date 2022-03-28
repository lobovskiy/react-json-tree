const defaultState = {
  family: {
    table: [],
    tableLoading: false,
    tree: [],
    treeLoading: false,
    treeAsync: [],
    treeAsyncLoading: false
  }
};

const ADD_FAMILY_TABLE = 'ADD_FAMILY_TABLE';
const ADD_FAMILY_TREE = 'ADD_FAMILY_TREE';
const ADD_FAMILY_ROOTS = 'ADD_FAMILY_ROOTS';
const ADD_FAMILY_CHILDREN = 'ADD_FAMILY_CHILDREN';

const START_TABLE_LOADING = 'START_TABLE_LOADING';
const START_TREE_LOADING = 'START_TREE_LOADING';
const START_TREE_ASYNC_LOADING = 'START_TREE_ASYNC_LOADING';
const START_BRANCH_LOADING = 'START_BRANCH_LOADING';
const TOGGLE_EXPAND = 'TOGGLE_EXPAND';

export const FETCH_FAMILY_TABLE = 'FETCH_FAMILY_TABLE';
export const FETCH_FAMILY_TREE = 'FETCH_FAMILY_TREE';
export const FETCH_FAMILY_ROOTS = 'FETCH_FAMILY_ROOTS';
export const FETCH_FAMILY_CHILDREN = 'FETCH_FAMILY_CHILDREN';

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
    case ADD_FAMILY_TABLE:
      return { ...state, family: { ...state.family, table: [...action.payload], tableLoading: false } };

    case ADD_FAMILY_TREE:
      return { ...state, family: { ...state.family, tree: [...action.payload], treeLoading: false } };

    case ADD_FAMILY_ROOTS: {
      return { ...state, family: { ...state.family, treeAsync: [...action.payload], treeAsyncLoading: false } };
    }

    case ADD_FAMILY_CHILDREN: {
      const { id, children } = action.payload;
      let newTreeAsync = JSON.parse(JSON.stringify(state.family.treeAsync));

      function addChildrenById(tree, id) {
        let isAdded = false;

        function addChildren(branch) {

          for (let i = 0; i < branch.length; i++) {
            if (branch[i].id === id) {
              branch[i].isLoaded = true;
              branch[i].isLoading = false;
              branch[i].children = children;
              isAdded = true;
              break;
            }

            if (branch[i]?.children?.length) {
              addChildren(branch[i].children);
            }

            if (isAdded) break;
          }
        }

        addChildren(tree);
      }

      addChildrenById(newTreeAsync, id);
      return { ...state, family: { ...state.family, treeAsync: newTreeAsync } };
    }

    case START_TABLE_LOADING:
      return { ...state, family: { ...state.family, tableLoading: true } }

    case START_TREE_LOADING:
      return { ...state, family: { ...state.family, treeLoading: true } }

    case START_TREE_ASYNC_LOADING:
      return { ...state, family: { ...state.family, treeAsyncLoading: true } }

    case START_BRANCH_LOADING: {
      const { id } = action.payload;
      let newTreeAsync = JSON.parse(JSON.stringify(state.family.treeAsync));

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

            if (isSet) break;
          }
        }

        setLoader(tree);
      }

      setLoaderById(newTreeAsync, id);
      return { ...state, family: { ...state.family, treeAsync: newTreeAsync } };
    }

    case TOGGLE_EXPAND: {
      const { id, async = false } = action.payload;
      let newTree = async
        ? JSON.parse(JSON.stringify(state.family.treeAsync))
        : JSON.parse(JSON.stringify(state.family.tree));

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

      toggleExpandById(newTree, id);
      return async
        ? { ...state, family: { ...state.family, treeAsync: newTree } }
        : { ...state, family: { ...state.family, tree: newTree } };
    }

		default:
			return state;
	}
}

export const addFamilyTable = (payload) => ({ type: ADD_FAMILY_TABLE, payload });
export const addFamilyTree = (payload) => ({ type: ADD_FAMILY_TREE, payload });
export const addFamilyRoots = (payload) => ({ type: ADD_FAMILY_ROOTS, payload });
export const addFamilyChildren = (id, children) => ({ type: ADD_FAMILY_CHILDREN, payload: { id, children } });

export const startTableLoading = () => ({ type: START_TABLE_LOADING });
export const startTreeLoading = () => ({ type: START_TREE_LOADING });
export const startTreeAsyncLoading = () => ({ type: START_TREE_ASYNC_LOADING });

export const startBranchLoading = (id) => ({ type: START_BRANCH_LOADING, payload: { id } });
export const toggleExpand = (id, async) => ({ type: TOGGLE_EXPAND, payload: { id, async } });

export const fetchFamilyTable = () => ({ type: FETCH_FAMILY_TABLE });
export const fetchFamilyTree = () => ({ type: FETCH_FAMILY_TREE });
export const fetchFamilyRoots = () => ({ type: FETCH_FAMILY_ROOTS });
export const fetchFamilyChildren = (id) => ({ type: FETCH_FAMILY_CHILDREN, payload: { id } });
