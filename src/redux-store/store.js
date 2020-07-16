import { combineReducers, createStore } from 'redux';

import apiDataReducer from './reducers/apiDataReducer';
import favoritesReducer from './reducers/favoritesReducer';

const rootReducer = combineReducers({
	apiData: apiDataReducer,
	favoritesData: favoritesReducer
});

const store = createStore(rootReducer);

export default store;
