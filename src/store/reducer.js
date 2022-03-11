const defaultState = {
  family: {
    table: [],
    tree: [],
    asyncTree: []
  },
  loading: false
};

const ADD_FAMILY_TABLE = 'ADD_FAMILY_TABLE';
const ADD_FAMILY_TREE = 'ADD_FAMILY_TREE';
const ADD_FAMILY_ROOTS = 'ADD_FAMILY_ROOTS';
const START_LOADING = 'START_LOADING';
export const FETCH_FAMILY_TABLE = 'FETCH_FAMILY_TABLE';
export const FETCH_FAMILY_TREE = 'FETCH_FAMILY_TREE';
export const FETCH_FAMILY_ROOTS = 'FETCH_FAMILY_ROOTS';

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
    case ADD_FAMILY_TABLE:
      return { ...state, family: { table: [...action.payload] }, loading: false };
    case ADD_FAMILY_TREE:
      return { ...state, family: { tree: [...action.payload] }, loading: false };
    case ADD_FAMILY_ROOTS:
      return { ...state, family: { asyncTree: [...action.payload] }, loading: false };
    case START_LOADING:
      return { ...state, loading: true };
		default:
			return state;
	}
}

export const addFamilyTable = (payload) => ({ type: ADD_FAMILY_TABLE, payload });
export const addFamilyTree = (payload) => ({ type: ADD_FAMILY_TREE, payload });
export const addFamilyRoots = (payload) => ({ type: ADD_FAMILY_ROOTS, payload });

export const startLoading = () => ({ type: START_LOADING });

export const fetchFamilyTable = () => ({ type: FETCH_FAMILY_TABLE });
export const fetchFamilyTree = () => ({ type: FETCH_FAMILY_TREE });
export const fetchFamilyRoots = () => ({ type: FETCH_FAMILY_ROOTS });
