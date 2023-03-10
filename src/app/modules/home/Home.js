import React from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";

/*iconos e imagenes */
import desingIcon from '../../../assets/images/designIcon.svg'
import obrasIcon from '../../../assets/images/obrasIcon.svg'
import ServiceIcon from '../../../assets/images/serviceIcon.svg'
import ButtonSubmit from '../../shared/butttonSubmit/buttonSubmit'
import OurQuality from '../../../assets/images/verificatedIcon.svg'
import OurQualityEmployer from '../../../assets/images/userVerifiedIcon.svg'
import imageWorkers from '../../../assets/images/imageWorkers.svg'
import misionVisionImage from '../../../assets/images/misionVisionImage.svg'
import imgContact from '../../../assets/images/imgContact.svg'
import FormComponent from '../../shared/formComponent/formComponent'
import Carousel from '../../shared/carousel/Carousel'





export default function Home() {
  const navigate = useNavigate();
 

  //info para apartado de diseño obras y servicio
  let dosInfo = [
    {
      tittle:'DISEÑO',
      icon:desingIcon,
      description:'Diseño estructural de acero y concreto de obras civiles.  Conceptualización, Bocetos, Desarrollo del diseño, Integración, exposición al cliente y construcción de documentos. '
    },
    {
      tittle:'OBRAS',
      icon:obrasIcon,
      description:'Ejecucion, inspeccion, remodelacion, levantamiento topografico de obras civiles y mecanicas.'
    },
    {
      tittle:'SERVICIO',
      icon:ServiceIcon,
      description:'Mantenimiento mecanico y electrico de equipos, y administracion de elegada.'
    }
  ]





  /**funciones para redirigir a las rutas */

  let handleRedirectToContact=()=>{
    
    navigate('/inicio/contactenos')
  
  }
  let handleRedirectToServices=()=>{
    
    navigate('/inicio/nuestros_servicios')
  
  }
  let handleRedirectToUs=()=>{
    
    navigate('/inicio/nosotros')
   
  }
  let handleRedirectToMisionVision=()=>{
    
    navigate('/inicio/mision_vision')
  
  }

  return (
    <div className=''>
      {/* titulo con imagen */}
      <div className='container'>
        <Carousel redirectFunct={handleRedirectToContact} ></Carousel>
      </div>
      
      {/*diseño obras y servicios seccion */}
      <div className='container mt-4 mb-4 '>
        <div className=' row justify-content-between h-75' >
          {dosInfo && dosInfo?.map(e=>{

            return(

              <div className='col-3' key={e.tittle}>
              <div className='d-flex flex-column flex-md-row '>
              {/*imagen */}
              <div className='justify-content-center'>
              <img  loading='lazy' src={e.icon} className='img-size-70 ' alt='icono'/>
              
              </div>
                {/*texto */}
                <div className=''>
                  <h2 className='p-0 m-0'>{e.tittle}</h2>
                  <p className='p-0 m-0 fs-6'>{e.description}</p>
                </div>
                </div>
              </div>
              
            )
          }) } 
          </div>
          <div className='d-flex justify-content-center'>
            <ButtonSubmit functButton={handleRedirectToServices} textButton={'Nuestros Servicios'} />
          
          </div>
    </div>

    {/*Sobre nosotros */}
    <div className=' bg-white mt-4 mb-4'>
      <div className='container '>
          <div className='row  m-2 p-4'> 
          
          <div className='col-md-8 col-12'>
          <h2 className='color-orange col'>Sobre Nosotros</h2>
    
              {/*textt */}  
              <div className='row justify-content-between'>
                <div className='col-6'>
                  <div className='d-flex align-items-center'>
                    <img loading='lazy' className='img-size-70' src={OurQuality} alt='icon' />
                    <h3>Nuestra calidad</h3>
                  </div>
                  <p className='fs-6'>Hemos elaborados protocolos de inspección internos para nuestros equipos de
                      trabajo, con el fin de
                      certificar la calidad de nuestros proyectos, y así poder garantizar cualquiera de
                      nuestros servicios.
                  </p>
                </div>
                <div className='col-6'>
                  <div className='d-flex align-items-center'>
                    <img loading='lazy' className='img-size-70' src={OurQualityEmployer} alt='icon' />
                    <h3>Nuestro equipo</h3>
                  </div>
                  <p className='fs-6'>Se ha capacitado profesionalmente con estudios universitarios o técnicos a lo largo de las respectivas carreras de cada uno de ellos, y en
                  cada una de sus especialidades.
                  </p>
                </div>
              </div>
              <div className='d-flex justify-content-center mb-4'>

                <ButtonSubmit functButton={handleRedirectToUs} textButton={'Nosotros'} />

              </div>
              </div>
              
    
                 {/*imagen */}
                 
                 <img  loading='lazy' src={imageWorkers} className='col-12 col-md-4 clase-img p-0 m-0 '  alt='imagen de trabajadores'/>

          </div>
    
        </div>
    </div>
   

    {/*msision y vision */}
    <div className='bg-white mt-4 mb-4'>
      <div className='container'>
          <div className='row p-4 m-2'>
            
            <img   loading='lazy' src={misionVisionImage} className='col-12 col-md-4' alt=' mision vission'/>
            
            <div className='col-12 col-md-8 p-0 m-0 text-center align-items-center'>
              <h3 className='color-orange' >Misión y visión</h3>
              <p>
                Constructora DOS14 es una empresa que fue fundada con la determinación de hacer de
                nuestro entorno un lugar mejor, por lo que está basada en la ética, el profesionalismo y la
                integridad de hacer nuestro trabajo correctamente
              </p>
              <p>
                Velamos por que la seguridad y estándares de obras y obreros sea respetada y adecuada, para poder entregar una obra digna de admirar y llamativa, donde se vea el empeño, amor, dedicación y profesionalismo que ponemos en cada trabajo.
              </p>
              
              <ButtonSubmit functButton={handleRedirectToMisionVision} textButton={'Nuestra misión y visión'} />

          </div>
        </div>
      </div>
    </div>

    {/*galeria*/}




    {/*contactenos*/} 
    <div className='bg-blue pt-4 pb-4 '>
      <div className='container'>
        <div className='d-flex justify-content-between h-auto position-relative'>

          <div className='h-100'>
           <FormComponent isbgDark={true}/>
          </div>
          <div class="v-line m-2 ms-4 d-none d-md-block p-2">
          </div>
          <div className=' m-0 p-0 d-none d-md-block'>
            <img  loading='lazy' src={imgContact} className='w-100 h-100' alt='contacto'/>
          </div>
        </div>
      
      </div>

    </div>

    </div>
  )
}
