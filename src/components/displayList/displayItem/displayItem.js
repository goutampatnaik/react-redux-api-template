import React from 'react';

import classes from './displayItem.module.css';

function DisplayItem({ name, address, city, image_url }) {
	return (
		<div className={classes.DisplayItem}>
			<img className={classes.Img} src={image_url} alt={name} />
			<div className={classes.Info}>
				<label className={classes.Name}>{name}</label>
				<label className={classes.Address}>{address}</label>
				<label className={classes.City}>{city}</label>
			</div>
		</div>
	);
}

export default DisplayItem;
