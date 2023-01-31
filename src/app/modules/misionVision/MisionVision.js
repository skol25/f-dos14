import React from 'react'
import './MisionVision.css'
import TittleImage from '../../shared/tittleImg/TittleImage'
import TerrazaMision from '../../../assets/images/TerrazaMision.svg'
import visionImage1 from '../../../assets/images/visionImage1.svg'
import misionImage2 from '../../../assets/images/misionImage2.svg'




export default function MisionVision() {


  let textMision = 'Constructora DOS14 es una empresa que fue fundada con la determinación de hacer de nuestro entorno un lugar mejor, por lo que está basada en la ética, el profesionalismo y la integridad de hacer nuestro trabajo correctamente, con el fin de que tanto el cliente como nosotros quedemos conformes con el diseño, la obra y/o el servicio prestado. Por lo que siempre muestra misión es hacerlo excelente, siguiendo los protocolos y normas para trabajar; sin dejar de pensar en el personal interno y externo de la organización.'
  let textVision = 'En Constructora DOS14 buscamos la excelencia en las obras y estructuras y poder llevar la arquitectura a otro nivel, entregando perfección a la mano de todos. Velamos por que la seguridad y estándares de obras y obreros sea respetada y adecuada, para poder entregar una obra digna de admirar y llamativa, donde se vea el empeño, amor, dedicación y profesionalismo que ponemos en cada trabajo.'
  return (
    <div>
      <TittleImage tittle={'Misión y Vísion'} rute={'inicio/mision_vision'} bgImage={'bg-misionVision d-flex flex-column justify-content-center align-items-center'}/>

      <div className='container '>
        <div className='row mt-4 justify-content-between'>
          <div className='col-12 col-md-7'>
            <h2 className='text-center fs-1'>MISIÓN</h2>
            <p className='text-start'>{textMision}</p>
          </div>
          <div className='col-12 col-md-4'>
            <div class="img-move-wrapper d-md-block d-none">
              <img loading='lazy' class="img-move img-move-1 img-fluid" src={TerrazaMision} alt="foto 1"/> 
              <img loading='lazy' class="img-move img-move-2 img-fluid" src={misionImage2} alt="foto 2"/> 
          
            </div>
            <img loading='lazy' class=" d-md-none img-fluid" src={misionImage2} alt="foto 2"/>
          </div>
        </div>
        <div class="H-line d-md-block p-0 m-0 mb-4 mt-4">
        </div>
        <div className='d-flex flex-md-row flex-column-reverse mt-4 mb-4 justify-content-between'>
        <div className='col-12 col-md-4'>
          <img loading='lazy' src={visionImage1}/>
        </div>
          <div className='col-12 col-md-7'>
            <h2 className='text-center fs-1'>VISIÓN</h2>
            <p className='text-start'>{textVision}</p>
          </div>
        </div>

      
      
      </div>
     
    
    </div>
  )
}
