import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Search, { SearchOptions } from '../../components/search/search';
import DisplayList from '../../components/displayList/displayList';

import { setApiData } from '../../redux-store/actions/apiDataActions';

import classes from './manage-display.module.css';

// API
const SEARCH_TERM = 'SEARCH_TERM';
const PAGE_NUMBER = 'PAGE_NUMBER';
const RESULTS_PER_PAGE = 'RESULTS_PER_PAGE';
const API_URL = `https://opentable.herokuapp.com/api/restaurants?city=${SEARCH_TERM}&per_page=${RESULTS_PER_PAGE}&page=${PAGE_NUMBER}`;

function ManageDisplay(props) {
	// Read default values from configured options
	const [searchQuery, setSearchQuery] = useState({
		searchTerm: SearchOptions.searchTerm,
		pageNumber: SearchOptions.pageNumber[0],
		resultsPerPage: SearchOptions.resultsPerPage[0]
	});

	// Initially set results to null
	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({
		totalRecords: 0,
		perPage: SearchOptions.resultsPerPage[0],
		currentPage: 1
	});

	const dispatch = useDispatch();

	useEffect(() => {
		const setStoreData = data => dispatch(setApiData(data));
		// No need to proceed if search term not provided
		if (!searchQuery.searchTerm) return;

		// Set API dynamic query based on searchQuery
		const url = API_URL.replace(SEARCH_TERM, searchQuery.searchTerm)
			.replace(PAGE_NUMBER, searchQuery.pageNumber)
			.replace(RESULTS_PER_PAGE, searchQuery.resultsPerPage);

		// Make api call and set value of result
		fetch(url)
			.then(response => response.json())
			.then(response => {
				if (response.error) throw Error(response.error);

				// Read values from response
				const {
					total_entries: totalRecords,
					per_page: perPage,
					current_page: currentPage,
					restaurants
				} = response;

				// Prepare object from as many properties as required in the app
				setStoreData(
					restaurants.map(r => ({
						id: r.id,
						name: r.name,
						address: r.address,
						city: r.city,
						image_url: r.image_url
					}))
				);

				// Set values for pagination based on records fetched
				setPagination({
					totalRecords,
					perPage,
					currentPage
				});

				// Set loading to false when promise is resolved
				setLoading(false);
			})
			.catch(error => {
				// Reset results when error occurs
				setStoreData([]);
				// Set loading to false when promise is rejected
				setLoading(false);
				// Reset pagination
				setPagination({
					totalRecords: 0,
					perPage: SearchOptions.resultsPerPage[0],
					currentPage: 1
				});
				// Log the error
				console.error(error);
			});
	}, [searchQuery, dispatch]);

	// Updating searchQuery state will cause re-render,
	// which in turn will re - evaluate useEffect for execution
	// useEffect has deps of searchQuery, so it will execute again
	const onClickHandler = searchObject => {
		setLoading(true);
		setSearchQuery(searchObject);
	};

	return (
		<div className={classes.Container}>
			<Search
				clickHandler={onClickHandler}
				totalRecords={pagination.totalRecords}
			/>
			{loading ? (
				<p>Please wait while we fetch your search results...</p>
			) : (
				<DisplayList />
			)}
		</div>
	);
}

export default ManageDisplay;