import React, { FunctionComponent, useState } from 'react'

interface NotificationProps{
    message:string,
    color:string
}

const Notification:FunctionComponent<NotificationProps> = ({message,color}) => {
    const [statut, setStatut]=useState<boolean>(true)
  return (
    <div  className={`${statut? 'block':'hidden' } border-1 lg:mx-10 mx-2 rounded-2xl lg:w-1/2 w-screen px-3 py-4 flex justify-between  ${color}`}>
        <div className=' px-1 font-semibold ' >{message}</div>
        <button onClick={()=>setStatut(false)} className=' text-white text-3xl'>X</button>
      
    </div>
  )
}

export default Notification
