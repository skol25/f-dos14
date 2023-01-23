import React from 'react'
import './Home.css'

/*iconos e imagenes */
import TittleImage from '../../shared/tittleImg/TittleImage'
import desingIcon from '../../../assets/images/designIcon.svg'
import obrasIcon from '../../../assets/images/obrasIcon.svg'
import ServiceIcon from '../../../assets/images/serviceIcon.svg'
import ButtonSubmit from '../../shared/butttonSubmit/buttonSubmit'
import OurQuality from '../../../assets/images/verificatedIcon.svg'
import OurQualityEmployer from '../../../assets/images/userVerifiedIcon.svg'
import imageWorkers from '../../../assets/images/imageWorkers.svg'




export default function Home() {


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




  return (
    <div className=''>
      {/* titulo con imagen */}
      <TittleImage></TittleImage>
      {/*diseño obras y servicios seccion */}
      <div className='container mt-2 mb-2 '>
        <div className=' row justify-content-between h-75' >
          {dosInfo && dosInfo?.map(e=>{

            return(
              <div className='col-3 '>
              <div className='d-flex'>
              {/*imagen */}
              <div>
              <img src={e.icon} className='img-size-70 ' alt='icono'/>
              
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
          <ButtonSubmit textButton={'Nuestros Servicios'} />
    </div>

    {/*Sobre nosotros */}
    <div className=' bg-white'>
      <div className='container '>



      
          <div className='row  m-2 p-4'> 
          
          <div className='col'>
          <h2 className='color-orange col'>Sobre Nosotros</h2>
    
              {/*textt */}  
              <div className='row'>
                <div className='col-5'>
                  <div className='d-flex align-items-center'>
                    <img src={OurQuality} alt='icon' />
                    <h3>Nuestra calidad</h3>
                  </div>
                  <p className='fs-6'>Hemos elaborados protocolos de inspección internos para nuestros equipos de
                      trabajo, con el fin de
                      certificar la calidad de nuestros proyectos, y así poder garantizar cualquiera de
                      nuestros servicios.
                  </p>
                </div>
                <div className='col-5'>
                  <div className='d-flex align-items-center'>
                    <img src={OurQualityEmployer} alt='icon' />
                    <h3>Nuestro equipo</h3>
                  </div>
                  <p className='fs-6'>Se ha capacitado profesionalmente con estudios universitarios o técnicos a lo largo de las respectivas carreras de cada uno de ellos, y en
                  cada una de sus especialidades.
                  </p>
                </div>
              </div>
              
              </div>
              
    
                 {/*imagen */}
                 
                 <img src={imageWorkers} className='col-2 clase-img p-0 m-0 '  alt='imagen de trabajadores'/>

          </div>
    
        </div>
    </div>



      


    </div>
  )
}
