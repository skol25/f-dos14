import React from 'react'
import TittleImage from '../../shared/tittleImg/TittleImage'
import whoAreWeImage from '../../../assets/images/quienesSomosImage.svg'
import chooseUs from '../../../assets/images/escogenos.svg'

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
      <TittleImage></TittleImage>
      <div className='container mt-4'>
        <div className='row'>
          {stepsAboutUs && stepsAboutUs?.map(e=>{

            return(
              <div className='col-6 text-center'>
                <img src={e.img}/>
                <h2 className='fs-4 '>{e.tittle}</h2>
                <p className='fs-6'>{e.description}</p>
              </div>
            )


          })}
        </div>
      </div>
      <div className='bg-blue color-white mt-4'>
          <div className='container pt-2 pb-2'>
            <h3 className='border-orange-b w-100'>Acerca de nuestras prioridades a la hora de reealizar un trabajo</h3>
            
       

          
          </div>
      
      
      </div>

      
    
    </div>
  )
}
