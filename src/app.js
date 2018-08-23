import React from 'react';

import NavBar from './components/bootstrap4/nav_bar';

const App = ({children}) => (
  <div>
    <NavBar />
    <div className='container'>
      {children}
    </div>
  </div>
);

export default App;