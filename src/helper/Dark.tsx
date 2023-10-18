import React, {  useContext, useState } from 'react'
import moon from '../images/moon.png'
import sunn from '../images/sunn.png'
import { ThemeContext } from './ThemeContext'

const Dark = () => {
    const themecontext=useContext(ThemeContext)
    
    if(!themecontext){
        throw new Error("something was wrong")
    }
    const {mode, handleChange}= themecontext
    
  return (

    <>
                        <p className=' text-red-600 text-2xl'>p{mode?'vrai':'faux'}</p>

    <div className=' flex items-center'>
        <input className='hidden' type='checkbox' checked={mode} id='mode' onChange={handleChange}/> 
      
        <label  htmlFor='mode'>
            <div className={`  border-black border-2 cursor-pointer px-1 justify-between w-16 h-6 rounded-xl ${mode? ' bgg': ' bg-gray-800'} flex flex-auto items-center`}>
                <div className='  w-5 h-5 bg-white flex items-center justify-center rounded-full ' >
                    <img   src={moon} alt="" className={`${mode? ' transition opacity-10  duration-300 delay-600' : ' opacity-100' }`} />
                    </div>
                    <div className='  w-5 h-5 bg-white flex items-center justify-center rounded-full ' >
                    <img   src={sunn} alt=""  className={`${mode? 'opacity-100' : ' opacity-20 transition-opacity duration-300 delay-600'  }`} />
                    </div></div></label>
                    
                    </div>
    </>
  )
}

export default Dark

