import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <div>
        <Route path='/' />
      </div>
    </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;
