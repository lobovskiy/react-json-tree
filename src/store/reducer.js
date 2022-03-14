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
const ADD_FAMILY_CHILDREN = 'ADD_FAMILY_CHILDREN';

const START_LOADING = 'START_LOADING';

export const FETCH_FAMILY_TABLE = 'FETCH_FAMILY_TABLE';
export const FETCH_FAMILY_TREE = 'FETCH_FAMILY_TREE';
export const FETCH_FAMILY_ROOTS = 'FETCH_FAMILY_ROOTS';
export const FETCH_FAMILY_CHILDREN = 'FETCH_FAMILY_CHILDREN';

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
    case ADD_FAMILY_TABLE:
      return { ...state, family: { table: [...action.payload] }, loading: false };
    case ADD_FAMILY_TREE:
      return { ...state, family: { tree: [...action.payload] }, loading: false };
    case ADD_FAMILY_ROOTS: {
      return { ...state, family: { asyncTree: [...action.payload] }, loading: false };
    }
    case ADD_FAMILY_CHILDREN:
      const { id, children } = action.payload;
      console.log(id);
      let newAsyncTree = JSON.parse(JSON.stringify(state.family.asyncTree));

      console.log(children);

      function addChildrenById(tree, id) {
        let isAdded = false;

        function addChildren(branch) {

          for (let i = 0; i < branch.length; i++) {
            if (branch[i].id === id) {
              branch[i].isLoaded = true;
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

      addChildrenById(newAsyncTree, id);
      console.log(newAsyncTree);
      return { ...state, family: { asyncTree: newAsyncTree } };
    case START_LOADING:
      return { ...state, loading: true };
		default:
			return state;
	}
}

export const addFamilyTable = (payload) => ({ type: ADD_FAMILY_TABLE, payload });
export const addFamilyTree = (payload) => ({ type: ADD_FAMILY_TREE, payload });
export const addFamilyRoots = (payload) => ({ type: ADD_FAMILY_ROOTS, payload });
export const addFamilyChildren = (id, children) => ({ type: ADD_FAMILY_CHILDREN, payload: { id, children } });

export const startLoading = () => ({ type: START_LOADING });

export const fetchFamilyTable = () => ({ type: FETCH_FAMILY_TABLE });
export const fetchFamilyTree = () => ({ type: FETCH_FAMILY_TREE });
export const fetchFamilyRoots = () => ({ type: FETCH_FAMILY_ROOTS });
export const fetchFamilyChildren = (id) => ({ type: FETCH_FAMILY_CHILDREN, payload: { id } });
