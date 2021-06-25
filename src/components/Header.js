import logo from './lowprop.png';
import React from 'react';

const Header = () => {
	return(
		<header className="App-header fixed top">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="is-marginless">Rental Property Evaluator</h1>
			<p className="is-marginless">
			This is used to calculate numbers on a potential rental property.
			</p>
		</header>
	);
};

export default Header;