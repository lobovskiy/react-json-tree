const defaultState = {
  family: []
};

const ADD_FAMILY = 'ADD_FAMILY';

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
    case ADD_FAMILY:
      return { ...state, family: [...state.family, ...action.payload] }
		default:
			return state;
	}
}

export const addFamily = (payload) => ({ type: ADD_FAMILY, payload });