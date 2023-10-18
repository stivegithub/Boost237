import React, { FunctionComponent } from 'react'
import LoginLeft from '../components/LoginLeft'
import LoginRight from '../components/LoginRight'
import useThemeContext from '../tools/useThemeContext'
import { useSmallScreen } from '../tools/useSmallScreen'

const Login:FunctionComponent = () => {
const smallScreen= useSmallScreen()
 
  return (
   
    <div className={`${smallScreen ? '': ' h-screen grid grid-cols-7'}`}>
{     !smallScreen &&   <div className=' col-span-3 bg-gradient-to-b from-blue-300 to-blue-500  rounded-r-3xl '><LoginLeft/></div>
}        <div className={`   ${useThemeContext()? 'bg-white col-span-4':  'col-span-4 bg-gray-900 text-white'}`}><LoginRight/></div>
      
    </div>
    
  )
}

export default Login
