import React from 'react'

import iconMail from '../../../../assets/images/mailIcon.svg'
import iconig from '../../../../assets/images/igdos14icon.svg'
import iconLocation from '../../../../assets/images/locationIcon.svg'
import logoDos14 from '../../../../assets/images/logodos14.svg'

export default function Footer() {
  

   /**
  * variable que almacena lo que va a mostar en el header (la parte informativa)  
  */
   let  infoList= [


    {
      icon:iconMail,
      tittle:'email',
      text:'Atencion@constructorados14.com'

    },
    {
      icon:iconLocation,
      tittle:'addres',
      text:'San antonio de los altos sector carrizal'

    },
    {
      icon:iconig,
      tittle:'ig',
      text:'@constructorados14',
      url:'https://www.instagram.com/constructorados14/'
    }

];


  return (
    <div className='bg-white'>
      <div className='d-flex container justify-content-between align-items-center pt-2 pb-2'>

        <img alt='DOS14 foto' loading='lazy' src={logoDos14}  className='img-fluid img-size-80' />

          <div className='d-flex flex-column flex-md-row'>
            {infoList && infoList?.map((e)=>{
              return (
                  
              <div key={e.tittle}  >
              {e.url && (<div>
                  <a href={e.url} target='_blank' className='d-flex align-items-center m-2'>
                    <img  loading='lazy' src={e.icon} className='img-size-30 p-0 m-0 me-2' alt={e.tittle} />
                    <p className='p-0 m-0'>{e.text}</p>
                  </a>
              </div>)}
              {!e.url && (  
                  <div className='d-flex align-items-center m-2'>

                    <img  loading='lazy' src={e.icon} className='img-size-30 p-0 m-0 me-2' alt={e.tittle} />
                    <p className='p-0 m-0'>{e.text}</p>
                  
              </div>)}
           
          
          </div>
              )
            })}
          </div>

      </div>
      </div>
  )
}
