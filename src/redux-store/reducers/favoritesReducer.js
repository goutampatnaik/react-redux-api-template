import * as actionTypes from '../actions/actionTypes';

export const addItemToCart = (favoriteItems, itemToAdd) => {
	const existingItem = favoriteItems.find(c => c.id === itemToAdd.id);

	if (existingItem) return [...favoriteItems];
	else return [...favoriteItems, itemToAdd];
};

const INITIAL_STATE = {
	favoriteItems: []
};

function favoritesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case actionTypes.ADD_TO_FAVORITES:
			return addItemToCart(state.favoriteItems, action.payload);
		case actionTypes.REMOVE_FROM_FAVORITES:
			return state.filter(item => item.id !== action.payload);
		default:
			return state;
	}
}

export default favoritesReducer;
