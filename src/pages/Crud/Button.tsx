import React, { FunctionComponent } from 'react'

interface ButtonProps{
    icon:React.ReactNode
    handleOnclick:(id:any)=>void;
}

const Button:FunctionComponent<ButtonProps> = ({icon, handleOnclick}) => {
  return (

 <button className='p-1 rounded-lg'  onClick={handleOnclick}>{icon}</button>
  )
}

export default Button
