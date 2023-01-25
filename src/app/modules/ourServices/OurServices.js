import React from 'react'
import './OurServices.css'


import TittleImage from '../../shared/tittleImg/TittleImage'
import OurServiceCard from '../../shared/ourServiceCard/ourServiceCard'
import designIcon from '../../../assets/images/designIcon.svg'
import obrasIcon from '../../../assets/images/obrasIcon.svg'
import serviceIcon from '../../../assets/images/serviceIcon.svg'
import checkBlue from '../../../assets/images/checkBlue.svg'
import design1 from '../../../assets/images/latestWorks/design1.svg'
import design2 from '../../../assets/images/latestWorks/design2.svg'
import design3 from '../../../assets/images/latestWorks/design3.svg'
import design4 from '../../../assets/images/latestWorks/design4.svg'
import obras1 from '../../../assets/images/latestWorks/obras1.svg'
import obras2 from '../../../assets/images/latestWorks/obras2.svg'
import obras3 from '../../../assets/images/latestWorks/obras3.svg'
import obras4 from '../../../assets/images/latestWorks/obras4.svg'
import service1 from '../../../assets/images/latestWorks/service1.svg'
import service2 from '../../../assets/images/latestWorks/service2.svg'
import service3 from '../../../assets/images/latestWorks/service3.svg'



export default function OurServices() {

  let cardInfo=[
    {
      tittle:'DISEÑO',
      description:'Cronograma de trabajo, donde se identifican todas las etapas del diseño..',
      bgImage:'p-4 m-0 color-white bg-design ',
      icon:designIcon
    },
    {
      tittle:'OBRAS',
      description:'Ejecucion, inspeccion, remodelacion, levantamiento topografico de obras civiles y mecanicas.',
      bgImage:'p-4 m-0 color-white bg-obras',
      icon:obrasIcon
    },
    {
      tittle:'SERVICIO',
      description:'Mantenimiento mecanico y electrico de equipos, y administracion de elegada.',
      bgImage:'p-4 m-0 color-white bg-service',
      icon:serviceIcon
    },
  ]

  let leatestWork=[

    {
      tittle:'DISEÑO',
      subtittle:'Ultimos diseños realizado',
      description:'',
      categories:['Diseño estructural de acero y concreto.'],
      images:[design1,design2,design3,design4]
    },
    {
      tittle:'OBRAS',
      subtittle:'Ultimas obras realizado ',
      description:'Instalación de dos sistema de presión constante con variador de frecuencia para aducción de agua, en edificio Siemens Energy Venezuela e Instalación de tubería principal de aducción de 90 mm termofusion',
      categories:['Ejecución de obras civiles y mecánicas.','Remodelaciones y recuperación de obras.','Levantamientos topográficos, áreas de trabajo, eléctricos' ,'Inspección de Obras.'],
      images:[obras1,obras2,obras3,obras4]
    },
    {
      tittle:'SERVICIO',
      subtittle:'Ultimos servicios realizados ',
      description:'Mantenimiento de Unidades de Sistema de Enfriamiento. Lavado de: filtros, serpentín, filtro en Yee y bandeja de drenaje ',
      categories:['Mantenimiento a sistema de transporte vertical','Mantenimiento a sistemas de bombeo','Mantenimiento de redes de aguas blancas y servidas','Mantenimiento a aires acondicionados centrales y particulares','Mantenimiento a sistemas eléctricos (Grupos Electrógenos, Sub-estaciones, entre otros)','Administración delegada.'],
      images:[service1,service2,service3]
    },



  ]




  return (
    <div>
      {/* titulo con imagen */}
      <TittleImage/>

      {/* Pequeña descrripcion de lo que hacen  */}

      <div className='container mt-4 mb-4'>
      
        <div className='row'>
        
          {cardInfo && cardInfo?.map(e=>{

            return(
              <div className='col'>
                <OurServiceCard icon={e.icon} tittle={e.tittle} description={e.description} bgImage={e.bgImage} />
              </div>
            )
          })}
         
        </div>
      </div>
      <div className='bg-white mb-4'>
        {leatestWork && leatestWork?.map(e=>{
          return(
            <div className='container pt-4'>
            <div className=''>
          
            <h3>{e.tittle}</h3>
            <div className='row'>
              {e.categories && e.categories?.map(e=>{
                return(
                  <div className='col-4'>
                    <div className='d-flex align-items-center'>
                      <img className='img-size-40 pe-2' src={checkBlue}/>
                      <p className='p-0 m-0'>{e}</p>
                    </div>
                  </div>
                )
              })}
            </div>
           
            
            <div className='bg-blue color-white p-2 mt-2'> 
              <h4 className='text-center'>{e.subtittle}</h4>
              <p className='p-4 pb-0'>{e.description}</p>
              <div className='row p-4'>
                {e.images && e.images?.map(e=>{
                  return(
                    <div className='col'>
                      <img src={e}/>
                    </div>
                  )
                })}
              </div>
            </div>

          <div class="H-line d-md-block p-2 m-0 mb-4 mt-4">
          </div>
          
          </div>

        </div>


        )
      })}
      
      
       

          
      
      
      </div>


    </div>
  )
}
