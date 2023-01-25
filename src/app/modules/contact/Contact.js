import React from 'react'
import TittleImage from '../../shared/tittleImg/TittleImage'
import mailIcon from '../../../assets/images/mailIcon.svg'
import addresIcon from '../../../assets/images/addresIcon.svg'
import phoneicon from '../../../assets/images/phoneicon.svg'
import SolariumContactImage from '../../../assets/images/SolariumContactImage.svg'
import blueLine from '../../../assets/images/blueLine.svg'
import FormComponent from '../../shared/formComponent/formComponent'

import './Contact.css'






export default function Contact() {

  let contactInfo=[
    {
      icon:mailIcon,
      tittle:'Correo',
      description:'Constructorados14@gmail.com'
    },
    {
      icon:addresIcon,
      tittle:'Dirección',
      description:'Sector Loma Gorda, Conj. Res. Loma Alta II, Nivel 4, apto 22, Carrizal, Edo. Miranda '
    }, 
    {
      icon:phoneicon,
      tittle:'Números Telefónicos',
      description:'+58-414-2662055 +58-414-1307828'
    }


  ]


  return (
    <div>
      <TittleImage/>

      {/*info de contacto  */}
      <div className='container mb-4'> 

      <div className='bg-blue color-white  mt-4 mb-4'>
          <div className='row pt-2'>
          {contactInfo && contactInfo?.map(e=>{

          return(
            <div key={e.tittle} className='d-flex col-4 justify-content-center'>
              <div>
                <img src={e.icon} alt='icono mail'/>
              </div>
              <div>
                <h3>{e.tittle}</h3>
                <p>{e.description}</p>
              </div>
            </div>
          )

          })}
        
        </div>
      
      </div>
       



         {/*info de contacto  */}
      
         <div className='d-flex justify-content-between h-auto position-relative'>

         <div className='h-100'>
          <FormComponent isbgDark={false}/>
         </div>
         <div class="v-line-blue m-2 ms-4 d-none d-md-block p-2">
         </div>
         <div className=' m-0 p-0'>
           <img src={SolariumContactImage} className='w-100 h-100' alt='contacto'/>
         </div>



       </div>
    
    





      </div>
     



    </div>
  )
}
