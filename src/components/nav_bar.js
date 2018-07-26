import React from 'react';
import PropTypes from 'prop-types';

const NavBar = () => (
<nav className="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark">
  <div className='container'>
    <a className="navbar-brand" href="#">Brand</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default NavBar;