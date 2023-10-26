import React, { FunctionComponent } from 'react'
import presentation from './../../../images/presentation.png'
import Typewriter from '../../Login/LoginLeft/Typewriter';

const Presentation:FunctionComponent = () => {
    const text=[' le travail', ' le professionnalisme', " l'efficacite", " le respect des delais", "la rigueur"]

    const width=190;
    const height=190
  return (
    <div className=' bg-yellow-100 rounded-xl '> 
    <div className='flex justify-between '>
        <div className='p-4'>
            <div className='font-bold text-2xl '>Hello Stive</div>
            <div className=' mt-3'>
            <Typewriter text={text}  spedd={200}/>
            </div>
            <div className=' cursor-pointer bg-gradient-to-r from-blue-300  via-green-200 to-yellow-200  rounded-lg px-2 py-2  animate-bounce text-white mt-12'>Contacter un Administrateur.</div>
        </div>
        <div><img src={presentation} width={width} height={height}/></div>
    </div>
      
    </div>
  )
}

export default Presentation
