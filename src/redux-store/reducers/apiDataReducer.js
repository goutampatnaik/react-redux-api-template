import * as actionTypes from '../actions/actionTypes';

// type {id, name,address, city, image_url}
const INITIAL_STATE = {
	records: null
};

function apiDataReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case actionTypes.SET_API_DATA:
			return { ...state, records: action.payload };
		default:
			return state;
	}
}

export default apiDataReducer;
