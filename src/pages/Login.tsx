import React, { FunctionComponent } from 'react'
import LoginLeft from '../components/LoginLeft'
import LoginRight from '../components/LoginRight'

const Login:FunctionComponent = () => {
  return (
    <div className=' grid grid-cols-7  h-screen'>
        <div className=' col-span-3 bg-purple-500 rounded-r-3xl '><LoginLeft/></div>
        <div className=' col-span-4'><LoginRight/></div>
      
    </div>
  )
}

export default Login
