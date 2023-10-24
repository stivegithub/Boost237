import React, { FunctionComponent, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../tools/useAuth'
import { Authcontext } from '../../App'

const NotFound:FunctionComponent = () => {
  const state= useContext(Authcontext)
  return (
    <>
    <div className=' text-7xl text-center'>Cette page n'existe pas dans notre application, mais c'est sans soucis  </div>
    <div className=' cursor-pointer text-center' onClick={()=><Navigate to={'/'}/>}>Commencer ici</div>
    <p>{state ? 'stive': 'arnaud'}</p>
    <p>{state? 'connecte':'deconnecte'}</p>
    </>
  )
}

export default NotFound
