import React from 'react'

import './ourServiceCard.css'


export default function OurServiceCard({tittle,icon,bgImage,description}) {
  return (
      <div className='bg-white mt-2 mb-4 p-0 m-0 '>
        <div className='bg-design p-4 m-0  p-4 color-white'>
           
              <img className='icon-size' src={icon}/>
              <h2>{tittle}</h2>
  
        </div>
        
      <p className='p-4'>{description}</p>
      <p className='p-2 m-0 text-end color-orange'>mas...</p>



    </div>
  )
}
