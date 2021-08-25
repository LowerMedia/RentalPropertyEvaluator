import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Home() {
  return <App />;
}

function Info() {
  return <div className='container py-6'>This site was created with React.js & Bulma - Check it out on <a href='https://github.com/LowerMedia/rental-property-evaluator/'>Github</a></div>;
}

function Contact() {
  return <div className='container py-6'><p>Join the mailing list for updates on this app.</p></div>;
}

function NavBar() {
  return <nav className='navbar container' role='navigation' aria-label='main navigation'>
  <div className='navbar-brand'>
    <a href='/' className='navbar-item' href='/'>
      &#127960;
    </a>
    <a href='/' role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </a>
  </div>
  <div id='navbarBasicExample' className='navbar-menu'>
    <div className='navbar-start'>
      <div className='navbar-item'>
        <div className='buttons'>
          <Link className='button is-light' to='/'>Home</Link>
          <Link className='button is-light' to='/info'>Info</Link>
          <Link className='button is-light' to='/contact'>Contact</Link>
        </div>
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
</nav>;
}

function RouterSwitch() {
  {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
  return <Switch>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <RouterSwitch />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
