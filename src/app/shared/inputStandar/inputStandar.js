import React from 'react'
import './inputStandar.css'

export default function InputStandar({placeholder,onChangeFunct,valueForm}) {
  return (
    <div className='mb-4 '>
      <input onChange={onChangeFunct} name={placeholder} value={valueForm} type="text" class="form-control p-2" placeholder={placeholder} aria-label={placeholder} aria-describedby="basic-addon1" />
    
    </div>
  
  )
}
