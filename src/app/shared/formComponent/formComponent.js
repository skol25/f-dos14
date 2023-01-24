import React from 'react'
import InputStandar from '../inputStandar/inputStandar'

export default function FormComponent({isbgDark}) {
  return (
    <div className='p-0 m-0'>
        <h2 className={isbgDark?'color-white':'color-black'}>Contactanos aqui!</h2>
        <div className='row p-0 m-0'>
          <div className='col-6 m-0 p-0'>
            <InputStandar  placeholder={'Nombre'}/>
            <InputStandar placeholder={'Correo'}/>
          </div>
        
          <div className='col-6 p-0  m-0 pe-0 me-0'>
            <InputStandar placeholder={'Apellido'}/>
            <InputStandar placeholder={'Asunto'}/>
          </div>
        </div>
        <textarea placeholder='Mensaje' class="form-control  p-2" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  )
}
