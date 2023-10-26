import React, { FunctionComponent } from 'react'
import Presentation from './Presentation'
import ListTaches from './ListTaches'

const AccueilFirst:FunctionComponent = () => {
  return (
    <div  className=' '>
        <div className=' w-full'> <Presentation/></div>
        <div className=' p-2'><ListTaches/></div>
      
    </div>
  )
}

export default AccueilFirst
