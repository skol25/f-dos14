import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './app/modules/about/About';
import Footer from './app/modules/base/footer/Footer';
import Header from './app/modules/base/header/Header';
import Home from './app/modules/home/Home.js';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/conocenos' element={<About />} />
      </Routes>
      <Footer/>
  
    </React.Fragment>
  );
}

export default App;
