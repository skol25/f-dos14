import React from 'react'

import './ourServiceCard.css'


export default function OurServiceCard({tittle,icon,bgImage,description, scrollTo}) {



  return (
      <div onClick={scrollTo} className='bg-white mt-2 mb-4 p-0 m-0 card-animation '>
        <div className={bgImage}>
           
              <img alt='DOS14 foto' loading='lazy' className='icon-size' src={icon}/>
              <h2>{tittle}</h2>
  
        </div>
        
      <p className='p-4'>{description}</p>
      <p  className='p-2 m-0 text-end color-orange'>mas...</p>



    </div>
  )
}
