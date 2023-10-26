import React, {  useContext } from 'react'
import moon from '../../../images/moon.png'
import sunn from '../../../images/sunn.png'
import { ThemeContext } from '../../../helper/ThemeContext'

const Dark = () => {
    const themecontext=useContext(ThemeContext)
    
    if(!themecontext){
        throw new Error("something was wrong")
    }
    const {mode, handleChange}= themecontext
    
  return (

    <>
    <div className=' flex items-center  bg-gradient-to-r from-blue-50  to-yellow-50  rounded-md border-1 '>
        <input className='hidden' type='checkbox' checked={mode} id='mode' onChange={handleChange}/> 
      
        <label  htmlFor='mode'>
            <div className={`    cursor-pointer px-1 justify-between w-16 h-6 rounded-xl ${mode? '': ' bg-gray-200'} flex flex-auto items-center`}>
                <div className='  w-5 h-5 bg-white flex items-center justify-center rounded-full ' >
                    <img   src={moon} alt="" className={`${mode? ' transition opacity-10  duration-300 delay-600' : ' opacity-100' }`} />
                    </div>
                    <div className={` ${mode? 'bg-white':''} w-5 h-5 flex items-center justify-center rounded-full  `}>
                    <img   src={sunn} alt=""  className={`${mode? 'opacity-100' : ' opacity-20 transition-opacity duration-300 delay-600'  }`} />
                    </div></div></label>
                    
                    </div>
    </>
  )
}

export default Dark

