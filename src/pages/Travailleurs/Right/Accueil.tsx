import React, { FunctionComponent } from 'react'
import AccueilFirst from './AccueilFirst'
import AccueilSecond from './AccueilSecond'

const Accueil:FunctionComponent = () => {
  return (
    <div className=' grid grid-cols-7  p-2 gap-2'>
        <div className=' col-span-5  h-screen'>
            <AccueilFirst/>
        </div>
        <div className=' col-span-2 bg-red-50 h-screen'>
            <AccueilSecond/>
        </div>
      
    </div>
  )
}

export default Accueil
