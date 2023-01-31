import React, { useRef, useState } from 'react'
import ButtonSubmit from '../butttonSubmit/buttonSubmit'
import InputStandar from '../inputStandar/inputStandar'
import emailjs from '@emailjs/browser';




export default function FormComponent({isbgDark}) {
  const formSend = useRef();
  let [form,setfrom] = useState({
    Nombre:'', //listo
    Apellido:'',//listo
    Correo:'',//listo
    Asunto:'',//listo
    Mensaje:'',//listo
   
  })

  /**
 * 
 * funciones para inputs normales 
 */

  let handleChange=(e)=>{
    e.preventDefault()
    let newform = form
    newform[e.target.name] = e.target.value
    setfrom((prev)=>({...prev,[e.target.name]:e.target.value})) 
}

  let handleSubmit=(e)=>{
   
    e.preventDefault();
    
    emailjs.sendForm('service_fkwlhmf', 'template_78i03l2', e.target, '9BVu13ZeBoHIZxrgJ')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
       
          console.log(error.text);
      });
  }



  return (
    <div className='p-0  m-0'>
        <h2 className={isbgDark?'color-white':'color-black'}>Contactanos aqui!</h2>
        <div className=''>
        <form className='row p-0 m-0 mb-2  justify-content-between' ref={formSend} onSubmit={handleSubmit}>
        <div className='col-6  p-0'>
        <input name='Nombre' type="text" class="form-control p-2" placeholder={'Nombre'} aria-label={'Nombre'} aria-describedby="basic-addon1" />
        <input name='Correo' type="email" class="form-control p-2" placeholder={'Correo'} aria-label={'Correo'} aria-describedby="basic-addon1" />
        
      </div>

      <div className='col-6 p-0  m-0 mb-2'>
      <input name='Apellido' type="text" class="form-control p-2" placeholder={'Apellido'} aria-label={'Apellido'} aria-describedby="basic-addon1" />
      <input name='Asunto' type="text" class="form-control p-2" placeholder={'Asunto'} aria-label={'Asunto'} aria-describedby="basic-addon1" />

      </div>
      <textarea  name='Mensaje' placeholder='Mensaje' class="form-control row-12 " id="exampleFormControlTextarea1" rows="3"></textarea>
        
      <div className='d-flex justify-content-center p-2'>
        <button className='buttonDos14Orange rounded-4 p-2' >Enviar</button>
      </div>
        </form>
          
        </div>
    </div>
  )
}
