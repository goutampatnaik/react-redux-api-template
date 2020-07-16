import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFromFavorites } from '../../redux-store/actions';

import classes from './favoriteItems.module.css';

function FavoriteItems({ favoriteItems }) {
	const dispatch = useDispatch();
	const removeFavorite = id => dispatch(removeFromFavorites(id));

	return (
		<div className={classes.FavoritesContainer}>
			<ul>
				{favoriteItems.map(item => (
					<li key={item.id}>
						<div style={{ width: '70%' }}>
							<label className={classes.Name}>{item.name}</label>
							<label className={classes.Address}>{item.address}</label>
							<label className={classes.City}>{item.city}</label>
						</div>
						<div
							className={classes.RemoveButton}
							onClick={() => dispatch(removeFavorite(item.id))}>
							&#10005;
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FavoriteItems;
