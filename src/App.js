import React from 'react';
import './App.css';

import ManageSearch from './containers/manageSearch/manageSearch';
import Header from './containers/header/header';

function App() {
	return (
		<div className="App">
			<Header />
			<div style={{ height: '50px' }}></div>
			<ManageSearch />
		</div>
	);
}

export default App;
