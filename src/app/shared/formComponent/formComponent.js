import React from 'react'
import ButtonSubmit from '../butttonSubmit/buttonSubmit'
import InputStandar from '../inputStandar/inputStandar'

export default function FormComponent({isbgDark}) {
  return (
    <div className='p-0  m-0'>
        <h2 className={isbgDark?'color-white':'color-black'}>Contactanos aqui!</h2>
        <div className='row p-0 m-0 mb-2  justify-content-between'>
          <div className='col-6  p-0'>
            <InputStandar placeholder={'Nombre'}/>
            <InputStandar placeholder={'Correo'}/>
          </div>
        
          <div className='col-6 p-0  m-0 mb-2'>
            <InputStandar  placeholder={'Apellido'}/>
            <InputStandar placeholder={'Asunto'}/>
          </div>
          <textarea placeholder='Mensaje' class="form-control row-12 " id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className='d-flex justify-content-center p-2'>
        
          <ButtonSubmit textButton={'Enviar'} />

        </div>
    </div>
  )
}
