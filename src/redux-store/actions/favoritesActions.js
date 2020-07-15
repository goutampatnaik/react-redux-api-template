import * as actionTypes from './actionTypes';

export function addToFavorites(item) {
	return {
		type: actionTypes.ADD_TO_FAVORITES,
		payload: item
	};
}

export function removeFromFavorites(id) {
	return {
		type: actionTypes.REMOVE_FROM_FAVORITES,
		payload: id
	};
}
