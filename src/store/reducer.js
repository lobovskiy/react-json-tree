const defaultState = {
  family: {
    table: []
  },
  loading: false
};

const ADD_FAMILY = 'ADD_FAMILY';
const START_LOADING = 'START_LOADING';
export const FETCH_FAMILY = 'FETCH_FAMILY';

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
    case ADD_FAMILY:
      return { ...state, family: { table: [...action.payload] }, loading: false }
    case START_LOADING:
      return { ...state, loading: true }
		default:
			return state;
	}
}

export const addFamily = (payload) => ({ type: ADD_FAMILY, payload });
export const startLoading = () => ({ type: START_LOADING });
export const fetchFamily = () => ({ type: FETCH_FAMILY });