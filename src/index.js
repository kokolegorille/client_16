import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'babel-polyfill';

// Bootstrap 4
import 'bootstrap';

import './app.scss';

import routes from './routes';

const app = document.getElementById('app');
render(
  <Router>{routes}</Router>,
  app,
);