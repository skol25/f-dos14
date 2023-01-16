import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './app/modules/about/About';
import Footer from './app/modules/base/footer/Footer';
import Header from './app/modules/base/header/Header';
import Contact from './app/modules/contact/Contact';
import Home from './app/modules/home/Home.js';
import MisionVision from './app/modules/misionVision/MisionVision';
import OurServices from './app/modules/ourServices/OurServices';

function App() {




  return (
    <React.Fragment>
      <Header/>
        <Routes>
        
        <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route index path='/inicio' element={<Home /> } />
          <Route path='/inicio/nosotros' element={<About />} />
          <Route path='/inicio/nuestros_servicios' element={<OurServices />} />
          <Route path='/inicio/mision_vision' element={<MisionVision />} />
          <Route path='/inicio/contactenos' element={<Contact />} />
          
        </Routes>
        
      <Footer/>
    </React.Fragment>
  );
}

export default App;
