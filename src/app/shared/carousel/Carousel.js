import React from 'react'
import './carousel.css'

import collageDesign from '../../../assets/images/collageDesign.jpg';
import collageObras from '../../../assets/images/collageObras.jpg'
import collageService from '../../../assets/images/collageService.jpg'
import imageMainCarousel from '../../../assets/images/imageMainCarousel.jpg'
import logodos14 from '../../../assets/images/logodos14.svg'
import ButtonSubmit from '../butttonSubmit/buttonSubmit';



export default function Carousel({redirectFunct}) {

  return (

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators  ">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active" >
          <img alt='DOS14 foto' src={imageMainCarousel} className="d-block w-100"/>
          <div className="carousel-caption d-none d-md-flex flex-md-column justify-content-center">
          <div>
          <div className='d-flex justify-content-center'>
            <img alt='DOS14 foto' className='img-fluid image-size-logo d-none d-sm-block' src={logodos14}/>
          
          </div>
          
          </div>
          <div className='d-none d-xl-block'>
            <ButtonSubmit functButton={redirectFunct} textButton={'Contactanos'} />
          
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <img alt='DOS14 foto' src={collageObras} className="d-block w-100  "/>
        <div className="carousel-caption d-none d-md-block">
          <h4>Mejorando los sistemas con nuestras obras</h4>
          <p>Instalación de dos sistema de presión constante con variador de frecuencia para aducción de agua, en edificio Siemens Energy Venezuela.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img alt='DOS14 foto' src={collageService} className="d-block w-100"/>
        <div className="carousel-caption d-none d-md-block">
          <h4>Alguno de nuestros servicios</h4>
          <p>Mantenimiento preventivo y correctivo de generador electrictrico de 344 Kva. 
            Suministro e instalación de sistema de transferencia</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img alt='DOS14 foto' src={collageDesign} className="d-block w-100"/>
        <div className="carousel-caption d-none d-md-block">
          <h4>Ultimos diseños realizados</h4>
          <p>Diseño, suministro e Instalación de Cocina.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>
  )
}
