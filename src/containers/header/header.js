import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import classes from './header.module.css';

import FavoriteItems from '../../components/favoriteItems/favoriteItems';
import Button from '../../components/ui/button/button';

const Header = () => {
	const [toggleShow, setToggleShow] = useState(false);

	const { favoriteItems } = useSelector(state => state.favoritesData);
	const itemCount = favoriteItems.length;

	useEffect(() => {
		setToggleShow(prevState => prevState && itemCount > 0);
	}, [itemCount]);

	return (
		<>
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

			{toggleShow ? <FavoriteItems favoriteItems={favoriteItems} /> : null}
		</>
	);
};

export default Header;
