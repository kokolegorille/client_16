import React from 'react';

import NavBar from './components/bootstrap4/nav_bar';

const App = ({children}) => (
  <div>
    <header>
      <NavBar />
    </header>
    <main role="main" className="container">
      {children}
    </main>
    <footer className="footer">
      <div className='container'>
        <p className="text-muted">&copy; Copyright klg 2018</p>
      </div>
    </footer>
  </div>
);

export default App;