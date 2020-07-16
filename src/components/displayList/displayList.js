import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DisplayItem from './displayItem/displayItem';

import { addToFavorites, removeFromFavorites } from '../../redux-store/actions';

import classes from './displayList.module.css';

function DisplayList(props) {
	// "useSelector" is equivalent to "connect" + "mapStateToProps"
	const { records } = useSelector(state => state.apiData);
	const { favoriteItems } = useSelector(state => state.favoritesData);

	const dispatch = useDispatch();
	const addFavorite = item => dispatch(addToFavorites(item));
	const removeFavorite = id => dispatch(removeFromFavorites(id));

	const onClickHandler = item => {
		item.isFavorite ? removeFavorite(item.id) : addFavorite(item);
	};

	// Initial value before search initiated
	let result = null;

	if (records) {
		// Search returned at least one record
		if (records.length) {
			result = records.map(result => (
				<DisplayItem
					key={result.id}
					{...result}
					onClickHandler={onClickHandler}
					isFavorite={
						favoriteItems.find(item => item.id === result.id) !==
						(null || undefined)
					}
				/>
			));
		} else {
			// Search returned 0 records
			result = 'No records found!';
		}
	}

	return <div className={classes.DisplayList}>{result}</div>;
}

export default DisplayList;
