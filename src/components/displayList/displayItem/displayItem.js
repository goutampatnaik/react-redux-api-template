import React from 'react';

import classes from './displayItem.module.css';

function DisplayItem({ onClickHandler, ...props }) {
	const { name, address, city, image_url, isFavorite } = props;

	return (
		<div className={classes.DisplayItem}>
			<img className={classes.Img} src={image_url} alt={name} />
			<button
				className={classes.Button}
				onClick={() => onClickHandler({ ...props })}>
				{isFavorite ? 'Remove' : 'Add'}
			</button>
			<div className={classes.Info}>
				<label className={classes.Name}>{name}</label>
				<label className={classes.Address}>{address}</label>
				<label className={classes.City}>{city}</label>
			</div>
		</div>
	);
}

export default DisplayItem;
