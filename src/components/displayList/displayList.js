import React from 'react';

import DisplayItem from './displayItem/displayItem';

import classes from './displayList.module.css';

function DisplayList({ resultList }) {
	// Initial value before search initiated
	let result = null;

	if (resultList) {
		// Search returned at least one record
		if (resultList.length) {
			result = resultList.map(result => (
				<DisplayItem key={result.id} {...result} />
			));
		} else {
			// Search returned 0 records
			result = 'No records found!';
		}
	}

	return <div className={classes.DisplayList}>{result}</div>;
}

export default DisplayList;
