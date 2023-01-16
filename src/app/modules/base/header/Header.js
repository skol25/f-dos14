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
        icon:iconPhone,
        tittle:'phones',
        text:'+58-414-2662055 +58-414-1307828'

      },
      {
        icon:iconMail,
        tittle:'email',
        text:'Constructorados14@gmail.com'

      },
      {
        icon:iconLocation,
        tittle:'addres',
        text:'Sector Loma Gorda, Conj. Res. Loma Alta II, Nivel 4, apto 22, Carrizal, Edo. Miranda'

      }

  ];







  return (
    <React.Fragment>
    <div className='bg-white'>
      <div className='d-flex container justify-content-between align-items-center pt-2 pb-2'>

        <img src={logoDos14} alt='logo' className='img-fluid img-size-80' />

          <div className='d-flex'>
            {infoList && infoList?.map((e)=>{
              return (
                  <div key={e.tittle} className='d-flex align-items-center '>
                    <img src={e.icon} className='img-size-20' alt={e.tittle} />
                    <p>{e.text}</p>
                  
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
