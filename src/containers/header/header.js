import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import classes from './header.module.css';

import FavoriteItems from '../../components/favoriteItems/favoriteItems';
import Button from '../../components/ui/button/button';

const Header = () => {
	const [toggleShow, setToggleShow] = useState(false);

	// Read favorites list from redux store
	const { favoriteItems } = useSelector(state => state.favoritesData);
	const itemCount = favoriteItems.length;

	useEffect(() => {
		// Set toggle show to false when favoriteItems
		// is empty (all the items have been removed)
		setToggleShow(prevState => prevState && itemCount);
	}, [itemCount]);

	return (
		<div className={classes.Container}>
			<div className={classes.Header}>
				<div className={classes.HeaderText}>
					<h3>Search API Template with Redux</h3>
				</div>
				<div className={classes.ButtonContainer}>
					<Button
						alt
						disabled={!itemCount}
						onClickHandler={() => {
							setToggleShow(prevState => !prevState);
						}}>
						{/* <FontAwesomeIcon icon={['far', 'heart']} /> */}
						<span>{itemCount}</span>
					</Button>
				</div>
			</div>

			<FavoriteItems show={toggleShow} favoriteItems={favoriteItems} />
		</div>
	);
};

export default Header;
