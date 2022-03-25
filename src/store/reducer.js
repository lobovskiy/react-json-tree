const defaultState = {
  family: {
    table: [],
    tableLoading: false,
    tree: [],
    treeLoading: false
  }
};

const ADD_FAMILY_TABLE = 'ADD_FAMILY_TABLE';
const ADD_FAMILY_TREE = 'ADD_FAMILY_TREE';
const START_TABLE_LOADING = 'START_TABLE_LOADING';
const START_TREE_LOADING = 'START_TREE_LOADING';
export const FETCH_FAMILY_TABLE = 'FETCH_FAMILY_TABLE';
export const FETCH_FAMILY_TREE = 'FETCH_FAMILY_TREE';

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
    case ADD_FAMILY_TABLE:
      return { ...state, family: { table: [...action.payload] }, loading: false }
    case ADD_FAMILY_TREE:
      return { ...state, family: { tree: [...action.payload] }, loading: false }
    case START_TABLE_LOADING:
      return { ...state, family: { tableLoading: true } }
    case START_TREE_LOADING:
      return { ...state, family: { treeLoading: true } }
    default:
      return state;
	}
}

export const addFamilyTable = (payload) => ({ type: ADD_FAMILY_TABLE, payload });
export const addFamilyTree = (payload) => ({ type: ADD_FAMILY_TREE, payload });

export const startTableLoading = () => ({ type: START_TABLE_LOADING });
export const startTreeLoading = () => ({ type: START_TREE_LOADING });

export const fetchFamilyTable = () => ({ type: FETCH_FAMILY_TABLE });
export const fetchFamilyTree = () => ({ type: FETCH_FAMILY_TREE });
