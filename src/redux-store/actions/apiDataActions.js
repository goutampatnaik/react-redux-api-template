import * as actionTypes from './actionTypes';

export function saveApiResponseToStore(data) {
	return {
		type: actionTypes.SET_API_DATA,
		payload: data
	};
}
