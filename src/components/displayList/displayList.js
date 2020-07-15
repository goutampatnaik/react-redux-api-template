import React from 'react';
import { useSelector } from 'react-redux';

import DisplayItem from './displayItem/displayItem';

import classes from './displayList.module.css';

function DisplayList(props) {
	// "useSelector" is equivalent to "connect" + "mapStateToProps"
	const state = useSelector(state => state.apiData);
	const { records } = state;

	// Initial value before search initiated
	let result = null;

	if (records) {
		// Search returned at least one record
		if (records.length) {
			result = records.map(result => <DisplayItem key={result.id} {...result} />);
		} else {
			// Search returned 0 records
			result = 'No records found!';
		}
	}

	return <div className={classes.DisplayList}>{result}</div>;
}

export default DisplayList;
