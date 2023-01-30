import React from 'react'
import TittleImage from '../../shared/tittleImg/TittleImage'
import whoAreWeImage from '../../../assets/images/quienesSomosImage.svg'
import chooseUs from '../../../assets/images/escogenos.svg'
import verificatedIcon from '../../../assets/images/verificatedIcon.svg'
import helmetImage from '../../../assets/images/helmetImage.svg'
import planification from '../../../assets/images/planification.svg'
import userVerifiedIcon from '../../../assets/images/userVerifiedIcon.svg'


export default function About() {

  let stepsAboutUs=[

    {
      tittle:'¿Quienes Somos?',
      img:whoAreWeImage,
      description:'En Constructora DOS14 caracterizamos por prestar un servicio especializado al más alto nivel de calidad en a las áreas antes mencionadas, capacitando a nuestro personal frecuéntenme, en nuevas tecnologías para poder prestar un servicio de una manera máseficaz y óptima.'

    },
    {
      tittle:'¿Por qué deberias escogernos?',
      img:chooseUs,
      description:'En Constructora DOS14, C.A. seguimos rigurosamente las normas, criterios y recomendaciones de los fabricantes en la ejecución de cualquiera de nuestras labores, desde la construcción de una obra hasta el servicio de mantenimiento equipo, porque estamos convencidos que es la forma de poder garantizar la calidad de nuestro trabajo. Por tal motivo todos nuestros profesionales, técnicos, ayudantes y obreros están comprometidos en seguir los reglamentos para hacer trabajos de alta calidad. '

    }



  ]




  return (
    <div>
      <TittleImage tittle={'¿Quienes somos?'} rute={'inicio/nosotros'} bgImage={'bg-quienesSomos d-flex flex-column justify-content-center align-items-center'}></TittleImage>
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          {stepsAboutUs && stepsAboutUs?.map(e=>{

            return(
              <div className='col-5 text-center '>
                <img loading='lazy' src={e.img}/>
                <h2 className='fs-4 pt-4'>{e.tittle}</h2>
                <p className='fs-6'>{e.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='bg-blue color-white mt-4 mb-5 p-4'>
          <div className='container pt-2 pb-2'>

          <div className='row justify-content-between'>
          
            <div className='col-7'>

              <h3 className='border-orange-b w-100'>Acerca de nuestras prioridades a la hora de realizar un trabajo</h3>

              <div className='d-flex align-items-center mt-2 mb-2 p-2'>
                <img loading='lazy' className='img-size-70 me-2' src={verificatedIcon}/>
                <p className='p-0 m-0'>Calidad</p>
              </div>
              
              <div className='d-flex align-items-center mt-2 mb-2 p-2'>
                <img loading='lazy' className='img-size-70 me-2' src={planification}/>
                <p className='p-0 m-0'>Planificación</p>
              </div> 

              <div className='d-flex align-items-center mt-2 mb-2 p-2'>
                <img loading='lazy' className='img-size-70 me-2' src={userVerifiedIcon}/>
                <p className='p-0 m-0'>Personal Calificado</p>
              </div>
            
            </div>
       
            <div className='col-4'>
              <img loading='lazy' src={helmetImage}/>
            </div>
            </div>
          </div>
  
      </div>

      
    
    </div>
  )
}
