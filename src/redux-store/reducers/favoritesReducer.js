import * as actionTypes from '../actions/actionTypes';

export const addItem = (favoriteItems, itemToAdd) => {
	const existingItem = favoriteItems.find(c => c.id === itemToAdd.id);

	if (existingItem) {
		// If item already exist, return same state
		// Note: This scenario will not happen. Just a fail safe
		return favoriteItems;
	} else {
		// Else, return a copy of state with new item added
		return [...favoriteItems, itemToAdd];
	}
};

// type {id, name, address, city, image_url}
const INITIAL_STATE = {
	favoriteItems: []
};

function favoritesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		// ADD
		case actionTypes.ADD_TO_FAVORITES:
			return {
				...state,
				favoriteItems: addItem([...state.favoriteItems], action.payload)
			};
		// REMOVE
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
