import React from 'react'
import TittleImage from '../../shared/tittleImg/TittleImage'
import OurServiceCard from '../../shared/ourServiceCard/ourServiceCard'
import designIcon from '../../../assets/images/designIcon.svg'
import obrasIcon from '../../../assets/images/obrasIcon.svg'
import serviceIcon from '../../../assets/images/serviceIcon.svg'
import checkBlue from '../../../assets/images/checkBlue.svg'

export default function OurServices() {

  let cardInfo=[

    {
      tittle:'DISEÑO',
      description:'Cronograma de trabajo, donde se identifican todas las etapas del diseño..',
      bgImage:'',
      icon:designIcon
    },
    {
      tittle:'OBRAS',
      description:'Ejecucion, inspeccion, remodelacion, levantamiento topografico de obras civiles y mecanicas.',
      bgImage:'',
      icon:obrasIcon
    },
    {
      tittle:'SERVICIO',
      description:'Mantenimiento mecanico y electrico de equipos, y administracion de elegada.',
      bgImage:'',
      icon:serviceIcon
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
      
        <div className='container pt-4'>
          <div className=''>
          
          <h3>DISEÑO</h3>
          
          <div className='d-flex align-items-center'>
            <img className='img-size-40' src={checkBlue}/>
            <p className='p-0 m-0'>holitas</p>
          </div>
          <div className='bg-blue color-white p-2 mt-2'> 
            <h4 className='text-center'>Ultimos diseños realizado</h4>
          
          
          </div>
          
          </div>

      
      
        </div>

          
      
      
      </div>


    </div>
  )
}
