import React, { FunctionComponent } from 'react'
import logo from '../images/logo.png'
import Typewriter from '../helper/Typewriter'

const LoginLeft:FunctionComponent = () => {
  const text=[' le travail', ' le professionnalisme', " l'efficacite", " le respect des delais", "la rigueur"]
  return (
    <div className=' p-9'>
        <img src={logo} alt="le logo de boost 237 " width={`100`} height={`30`} />
        <p className=' text-sm mb-9 z-10'>Marquer votre presence sur les medias sociaux.</p>
        <p className=' font-bold text-3xl text-white '>Bienvenue chez nous. Confiez nous votre presence en ligne car </p>
        <div className=' text-white text-2xl text-center '><Typewriter text={text}  spedd={200}/></div>
        
    </div>
  )
}

export default LoginLeft
