import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFromFavorites } from '../../redux-store/actions';

import classes from './favoriteItems.module.css';

function FavoriteItems({ favoriteItems, show }) {
	// Remove item from favorites list
	// "useDispatch" can be used instead of "connect" + "mapDispatchToProps"
	const dispatch = useDispatch();
	// Creating a local function like this is optional.
	// You can also directly call dispatch(actioncreator())
	// I prefer this extra layer of abstraction
	const removeFavorite = id => dispatch(removeFromFavorites(id));

	return (
		<div className={`${classes.Container} ${show || classes.Hide}`}>
			<ul>
				{favoriteItems.map(item => (
					<li key={item.id}>
						<div className={classes.Favorites}>
							<div className={classes.TextContent}>
								<label className={classes.Name}>{item.name}</label>
								<label className={classes.Address}>{item.address}</label>
								<label className={classes.City}>{item.city}</label>
							</div>
							<div
								className={classes.RemoveButton}
								onClick={() => removeFavorite(item.id)}>
								&#10005;
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FavoriteItems;
