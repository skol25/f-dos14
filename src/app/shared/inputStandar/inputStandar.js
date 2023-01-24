import React from 'react'
import './inputStandar.css'

export default function InputStandar({placeholder}) {
  return (
    <div className='mb-4 '>
      <input type="text" class="form-control p-2" placeholder={placeholder} aria-label={placeholder} aria-describedby="basic-addon1" />
    
    </div>
  
  )
}
