import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound:FunctionComponent = () => {
  const navigator= useNavigate()
  return (
    <>
    <div className=' text-7xl text-center'>Cette page n'existe pas dans notre application, mais c'est sans soucis  </div>
    <button className=' cursor-pointer text-center' onClick={()=>{ navigator('/')  ;console.log('ca ne marche pas ')}}>Commencer ici</button>

    </>
  )
}

export default NotFound
