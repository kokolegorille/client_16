import React from 'react';
import { render } from 'react-dom';

import 'babel-polyfill';

// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './app.scss';

const App = () => (
  <div>
    <div className='container'>
      <h1>Hello from React!?</h1>
      <i className='fa fa-bars'></i>
    </div>
  </div>
);

const app = document.getElementById('app');
render(
  <App />,
  app,
);