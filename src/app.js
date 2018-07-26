import React from 'react';

import NavBar from './components/nav_bar';

const App = () => (
  <div>
    <NavBar />
    <div className='container'>
      <h1>Hello from React!?</h1>
      <i className='fa fa-bars'></i>
      <p>Lorem ipsum dolores...</p>
      <p className='monospace'>Lorem ipsum dolores...</p>
    </div>
  </div>
);

export default App;