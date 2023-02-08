import React from 'react'
import TittleImage from '../../shared/tittleImg/TittleImage'
import mailIcon from '../../../assets/images/mailIcon.svg'
import addresIcon from '../../../assets/images/addresIcon.svg'
import SolariumContactImage from '../../../assets/images/SolariumContactImage.svg'
import FormComponent from '../../shared/formComponent/formComponent'

import './Contact.css'






export default function Contact() {

  let contactInfo=[
    {
      icon:mailIcon,
      tittle:'Correo',
      description:'atencion@constructorados14.com'
    },
    {
      icon:addresIcon,
      tittle:'Dirección',
      description:'San antonio de los altos sector carrizal'
    }, 
   


  ]


  return (
    <div>
      <TittleImage tittle={'Contactenos'} rute={'inicio/contactenos'} bgImage={'bg-contactUs d-flex flex-column justify-content-center align-items-center'}/>

      {/*info de contacto  */}
      <div className='container mb-4'> 

      <div className='bg-blue color-white p-4 mt-4 mb-4'>
          <div className='row pt-2 justify-content-between'>
          {contactInfo && contactInfo?.map(e=>{

          return(
            <div key={e.tittle} className='d-flex col-12 col-md-6  justify-content-center'>
              <div>
                <img  loading='lazy' className='pe-2' src={e.icon} alt='icono mail'/>
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
         <div className=' m-0 p-0 d-none d-md-block'>
           <img src={SolariumContactImage} className='w-100 h-100' alt='contacto'/>
         </div>

       </div>
  

      </div>
  

    </div>
  )
}
