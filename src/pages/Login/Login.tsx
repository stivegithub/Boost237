import React, { FunctionComponent } from 'react'
import LoginLeft from './LoginLeft/LoginLeft'
import LoginRight from './LoginRight/LoginRight'
import useThemeContext from '../../tools/useThemeContext'
import { useSmallScreen } from '../../tools/useSmallScreen'

const Login:FunctionComponent = () => {
const smallScreen= useSmallScreen()
 
  return (
   
    <div className={`${smallScreen ? '': '  grid grid-cols-7 h-screen '}`}>
{     !smallScreen &&   <div className=' col-span-3 bg-gradient-to-b from-blue-300 to-blue-500  z-20 rounded-r-3xl '><LoginLeft/></div>
}        <div className={`   ${useThemeContext()? 'bg-white col-span-4':  ' -ml-5 z-10 col-span-4 bg-gray-500 text-white'}`}><LoginRight/></div>
      
    </div>
    
  )
}

export default Login
