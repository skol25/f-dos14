import React, { useEffect }  from 'react';
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

  useEffect(() => {
    const images = document.querySelectorAll("img");

    const imgOptions = {};
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
  
      const img = entry.target;
      img.src = img.src.replace("w=10&", "w=800&");
      imgObserver.unobserve(entry.target);
    });
    }, imgOptions);
  
  images.forEach((img) => {
    imgObserver.observe(img);
  });
  }, )
  



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
