import * as actionTypes from '../actions/actionTypes';

export const addItem = (favoriteItems, itemToAdd) => {
	const existingItem = favoriteItems.find(c => c.id === itemToAdd.id);

	if (existingItem) {
		return [...favoriteItems];
	} else {
		return [...favoriteItems, itemToAdd];
	}
};

// type {id, name,address, city, image_url}
const INITIAL_STATE = {
	favoriteItems: []
};

function favoritesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case actionTypes.ADD_TO_FAVORITES:
			return {
				...state,
				favoriteItems: addItem([...state.favoriteItems], action.payload)
			};
		case actionTypes.REMOVE_FROM_FAVORITES:
			return {
				...state,
				favoriteItems: state.favoriteItems.filter(
					item => item.id !== action.payload
				)
			};
		default:
			return state;
	}
}

export default favoritesReducer;
