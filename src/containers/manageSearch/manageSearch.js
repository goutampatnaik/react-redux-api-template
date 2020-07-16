import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Search, { SearchOptions } from '../../components/search/search';
import DisplayList from '../../components/displayList/displayList';

import { setApiData } from '../../redux-store/actions';

import classes from './manageSearch.module.css';

// API
const SEARCH_TERM = 'SEARCH_TERM';
const PAGE_NUMBER = 'PAGE_NUMBER';
const RESULTS_PER_PAGE = 'RESULTS_PER_PAGE';
const API_URL = `https://opentable.herokuapp.com/api/restaurants?city=${SEARCH_TERM}&per_page=${RESULTS_PER_PAGE}&page=${PAGE_NUMBER}`;

function ManageSearch(props) {
	// Read default values from configured options
	const [searchQuery, setSearchQuery] = useState({
		searchTerm: SearchOptions.searchTerm,
		pageNumber: SearchOptions.pageNumber[0],
		resultsPerPage: SearchOptions.resultsPerPage[0]
	});

	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({
		totalRecords: 0,
		perPage: SearchOptions.resultsPerPage[0],
		currentPage: 1
	});

	const dispatch = useDispatch();
	// Handle response from api
	const fetchResponseHandler = useCallback(
		(data, loading, pagination) => {
			const setStoreData = data => dispatch(setApiData(data));
			// Reset results when error occurs
			setStoreData(data);
			// Set loading to false when promise is rejected
			setLoading(loading);
			// Reset pagination
			setPagination(pagination);
		},
		[dispatch]
	);

	useEffect(() => {
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

				fetchResponseHandler(
					response.restaurants.map(r => ({
						id: r.id,
						name: r.name,
						address: r.address,
						city: r.city,
						image_url: r.image_url
					})),
					false,
					{
						totalRecords: response.total_entries,
						perPage: response.per_page,
						currentPage: response.current_page
					}
				);
			})
			.catch(error => {
				fetchResponseHandler([], false, {
					totalRecords: 0,
					perPage: SearchOptions.resultsPerPage[0],
					currentPage: 1
				});

				// Log the error
				console.error(error);
			});
	}, [searchQuery, fetchResponseHandler]);

	// Updating searchQuery state will cause re-render,
	// which in turn will re - evaluate useEffect for execution
	// useEffect has deps of searchQuery, so it will execute again
	const onClickHandler = searchObject => {
		// Adding setLoading(true) to prevent unnecessary render of DisplayList
		// instead, it renders the loading message
		setLoading(true);
		setSearchQuery(searchObject);
	};

	return (
		<div className={classes.Container}>
			<p>Enter name of a city and click Search to view a list of restaurants.</p>
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

export default ManageSearch;
