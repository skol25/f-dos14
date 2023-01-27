import React from 'react'
import './TittleImage.css'

export default function TittleImage({tittle,rute,bgImage}) {



  return (
    <div className={bgImage}>
        
        
        <h2>{tittle}</h2>
        <p>{rute}</p>
        
       
    
    </div>
  )
}
