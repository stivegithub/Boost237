import React, { FunctionComponent } from 'react'
import logo from '../images/logo.png'

const LoginLeft:FunctionComponent = () => {
  return (
    <div className=' p-9'>
        <img src={logo} alt="le logo de boost 237 " width={`100`} height={`30`} />
        <p className=' text-sm'>Marquer votre presence sur les medias sociaux.</p>
        
    </div>
  )
}

export default LoginLeft
