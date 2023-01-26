import React from 'react'
import './carousel.css'

import collageDesign from '../../../assets/images/collageDesign.jpg';
import collageObras from '../../../assets/images/collageObras.jpg'
import collageService from '../../../assets/images/collageService.jpg'

export default function Carousel() {

  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={collageObras} class="d-block w-100  " alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h4>Mejorando los sistemas con nuestras obras</h4>
          <p>Instalación de dos sistema de presión constante con variador de frecuencia para aducción de agua, en edificio Siemens Energy Venezuela.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={collageService} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h4>Alguno de nuestros servicios</h4>
          <p>Mantenimiento preventivo y correctivo de generador electrictrico de 344 Kva. 
            Suministro e instalación de sistema de transferencia</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={collageDesign} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h4>Ultimos diseños realizados</h4>
          <p>Diseño, suministro e Instalación de Cocina.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
  )
}
