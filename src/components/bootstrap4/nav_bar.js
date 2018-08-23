import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
<nav className="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark">
  <div className='container'>
    <a className="navbar-brand" href="#">Brand</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
);

export default NavBar;