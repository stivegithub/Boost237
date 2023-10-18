import React, { FunctionComponent, useContext } from 'react'
import logo from '../images/logo.png'
import Typewriter from '../helper/Typewriter'
import image1 from '../images/image1.png'
import { ThemeContext } from '../helper/ThemeContext'


const LoginLeft:FunctionComponent = () => {
  const useGetTheme =  useContext(ThemeContext);
  if(!useGetTheme){
    throw new Error('je suis un fou')
  }
 const {mode}= useGetTheme
  
  
  const text=[' le travail', ' le professionnalisme', " l'efficacite", " le respect des delais", "la rigueur"]
  return (
    <div className=' p-9 ' onClick={()=>console.log(mode)}>
        <img src={logo} alt="le logo de boost 237 " width={`100`} height={`30`} />
        <p className=' text-md mb-9 z-10 text-gray-700'>Osez la communication, Osez l'impact.</p>
        <p onClick={()=>console.log(mode)}>{mode?'stive':'arnaud'}</p>
        <p className=' font-bold text-3xl text-white '>Bienvenue chez nous. Confiez nous votre presence en ligne car </p>
        <div className=' text-white text-2xl text-center mt-3  mb-2'><Typewriter text={text}  spedd={200}/></div>
        <img className=' fixed' src={image1} alt="image1" />
        
    </div>
  )
}

export default LoginLeft
