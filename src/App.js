import React from 'react';
import './App.css';

import ManageDisplay from './containers/manage-display/manage-display';

function App() {
	return (
		<div className="App">
			<h2>Search API Template</h2>
			<p>Enter name of a city and click Search to view a list of restaurants.</p>
			<ManageDisplay />
		</div>
	);
}

export default App;
