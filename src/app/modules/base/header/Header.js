import React from 'react'
/*estilos */
import  './Header.css';
import iconMail from '../../../../assets/images/mailIcon.svg'
import iconLocation from '../../../../assets/images/locationIcon.svg'
import iconPhone from '../../../../assets/images/phoneicon.svg'
import logoDos14 from '../../../../assets/images/logodos14.svg'
import Navbar from './navbar/Navbar';

export default function Header() {

  /**
  * variable que almacena lo que va a mostar en el header (la parte informativa)  
  */
  let  infoList= [

      {
        icon:iconMail,
        tittle:'email',
        text:'atencion@constructorados14.com'

      },
      {
        icon:iconLocation,
        tittle:'addres',
        text:'San antonio de los altos sector carrizal'

      }

  ];







  return (
    <React.Fragment>
    <div className='bg-white'>
    <div className='d-flex container justify-content-between align-items-center pt-2 pb-2'>

      <img loading='lazy' src={logoDos14} alt='logo' className='img-fluid img-size-80' />

        <div className='d-flex flex-column flex-md-row a'>
          {infoList && infoList?.map((e)=>{
            return (
              <div key={e.tittle} className='d-flex align-items-center m-2'>
              <img loading='lazy' src={e.icon} className='img-size-30 p-0 m-0 me-2' alt={e.tittle} />
              <p className='p-0 m-0'>{e.text}</p>
            
            </div>
            )
          })}
        </div>

    </div>
    </div>
    <Navbar/>
    
          
  
    </React.Fragment>
  )
}
