import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return(
		<nav className='navbar container' role='navigation' aria-label='main navigation'>
		  <div className='navbar-brand'>
		    <a className='navbar-item is-size-2' href='/'>&#127960;</a>
		    <a href='/' role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='rpeNavbarMenu'>
		      <span aria-hidden='true'></span>
		      <span aria-hidden='true'></span>
		      <span aria-hidden='true'></span>
		    </a>
	      <div className='navbar-item is-hidden-tablet'>
	   		<h1 className='has-text-black'>Rental Property Evaluator</h1>
	      </div>
		  </div>
		  <div id='rpeNavbarMenu' className='navbar-menu'>
		    <div className='navbar-start'>
		      <div className='navbar-item'>
		        <div className='buttons'>
		          <Link className='button is-light' to='/'>Home</Link>
		          <Link className='button is-light' to='/info'>Info</Link>
		          <Link className='button is-light' to='/contact'>Contact</Link>
		        </div>
		      </div>
		    </div>
		    <div className='navbar-start is-hidden-mobile'>
		      <div className='navbar-item'>
		   		<h1 className='has-text-black'>Rental Property Evaluator</h1>
		      </div>
		    </div>
		    <div className='navbar-end'>
		      <div className='navbar-item'>
		        <div className='buttons'>
		          <a href='/' className='button'>
		            <strong>Export</strong>
		          </a>
		          <a href='/' className='button is-primary'>
		            Reset
		          </a>
		        </div>
		      </div>
		    </div>
		  </div>
		</nav>
	);
};

export default Navbar;