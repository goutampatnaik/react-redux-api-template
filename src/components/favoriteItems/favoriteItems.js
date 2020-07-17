import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFromFavorites } from '../../redux-store/actions';

import classes from './favoriteItems.module.css';

function FavoriteItems({ favoriteItems, show }) {
	// Remove item from favorites list
	// via redux action dispatch
	const dispatch = useDispatch();
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
								onClick={() => dispatch(removeFavorite(item.id))}>
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
