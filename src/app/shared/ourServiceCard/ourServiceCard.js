import React from 'react'
import TerrazaDesingBg from '../../../assets/images/TerrazaDesingBg.svg'
import desingIcon from '../../../assets/images/designIcon.svg'


export default function OurServiceCard() {
  return (
      <div className='bg-white'>
        <div className='position-relative d-inline'>
            <img className='' src={TerrazaDesingBg} />
            <div className='position-absolute align-items-center start-100 top-0'>
                <img className='' src={desingIcon}/>
                <h2 className=' color-white'><span className='color-orange'>D</span>iseño</h2>
            </div>
        </div>
        <p>asdasdd</p>





    </div>
  )
}
