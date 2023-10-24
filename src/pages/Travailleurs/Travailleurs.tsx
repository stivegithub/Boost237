import React, { FunctionComponent } from 'react'
import useEmai from '../../tools/useEmail'

const Travailleurs:FunctionComponent = () => {
    const email= useEmai();
  return (
    <div> Bienvenue dans la partie travailleurs : {email} </div>
  )
}

export default Travailleurs
