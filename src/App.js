import React from 'react';
import './App.css';

import ManageSearch from './containers/manageSearch/manageSearch';
import Header from './containers/header/header';

function App() {
	return (
		<>
			<Header />
			<div className="App">
				{/* This is just a filler to push the main content down to prevent
      any part being hidden behind the header which has fixed position */}
				<div className="filler"></div>
				<ManageSearch />
			</div>
		</>
	);
}

export default App;
