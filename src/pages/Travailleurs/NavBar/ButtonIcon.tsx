import React, { FunctionComponent } from 'react'

interface button{
    value:any,
    handle:()=>void
}

const ButtonIcon:FunctionComponent<button> = ({value, handle}) => {
  return (
    <button onClick={()=>handle}>{value}</button>
  )
}

export default ButtonIcon
