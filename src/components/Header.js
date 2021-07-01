import logo from './lowprop.png';
import React from 'react';

const Header = () => {
	return(
		<header className="App-header width-full flex fixed top has-background-black has-text-white mt-0 pt-1">
			<div className="align-left circle-background has-background-white"><img src={logo} className="App-logo" alt="logo" /></div>
			<div className="align-right pl-1">
				<h1 className="is-marginless align-left left is-size-1">Rental Property Evaluator</h1>
				<p className="is-size-1 is-marginless">This is used to calculate numbers on a potential rental property.</p>
			</div>
		</header>
	);
};

export default Header;
