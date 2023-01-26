import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  let navList =[
    {
      tittle:'Inicio',
      path:'/inicio',
      image:'',
      css:'text-decoration-none color-white-link p-2'
    },
    {
      tittle:'Nosotros',
      path:'/inicio/nosotros',
      image:'',
      css:'text-decoration-none color-white-link p-2'
    },
    {
      tittle:'Nuestros servicios',
      path:'/inicio/nuestros_servicios',
      image:'',
      css:'text-decoration-none color-white-link p-2'
    },
      {
      tittle:'Misión y visión',
      path:'/inicio/mision_vision',
      image:'',
      css:'text-decoration-none color-white-link p-2'
    },
    {
      tittle:'Contactenos',
      path:'/inicio/contactenos',
      image:'',
      css:'text-decoration-none color-white p-2'
    },
  ]


  return (
    <div className='bg-blue p-4 '>
        <nav className='container'>
        <ul className='d-flex align-items-center text-center p-0 m-0 list-style-none'>
            {navList && navList?.map((e)=>{
              return(
                <li key={e.tittle}>
                  <NavLink 
                  end
                  className={({ isActive }) =>
                    isActive ? 'color-orange-link p-2' : e.css
                  }
                  to={e.path}>
                  {e.tittle}                        
                  </NavLink>
                  
                </li>
              )
            })
            }
        </ul>
        </nav>
    </div>
  )
}
