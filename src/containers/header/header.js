import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './header.module.css';
import Button from '../../components/ui/button/button';

const Header = () => {
	const [toggleShow, setToggleShow] = useState(false);
	const { favoriteItems } = useSelector(state => state.favoritesData);

	return (
		<>
			<div className={classes.Header}>
				<span style={{ textAlign: 'left', width: '85%' }}>
					<h3>Search API Template with Redux</h3>
				</span>
				<span
					style={{
						width: 'auto',
						marginTop: '10px'
					}}>
					<Button
						disabled={!favoriteItems.length}
						onClickHandler={() => {
							setToggleShow(prevState => !prevState);
						}}>
						{/* <FontAwesomeIcon icon={['far', 'heart']} /> */}
						<span>{favoriteItems.length}</span>
					</Button>
				</span>
			</div>

			{toggleShow ? (
				<div
					className={classes.FavoritesContainer}
					onClick={() => {
						setToggleShow(prevState => !prevState);
					}}>
					<ul>
						{favoriteItems.map(item => (
							<li key={item.id}>
								<label className={classes.Name}>{item.name}</label>
								<label className={classes.Address}>{item.address}</label>
								<label className={classes.City}>{item.city}</label>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</>
	);
};

export default Header;
