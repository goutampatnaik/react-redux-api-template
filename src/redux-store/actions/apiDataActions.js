import * as actionTypes from './actionTypes';

export function setApiData(data) {
	return {
		type: actionTypes.SET_API_DATA,
		payload: data
	};
}
