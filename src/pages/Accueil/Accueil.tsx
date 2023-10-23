import React from 'react'
import useEmai from '../../tools/useEmail'

const Accueil = () => {
  const email= useEmai()
  return (
    <div className=' text-green-400 text-2xl text-center'>{`bravo, tu es bien connecte, ${email} `}</div>
  )
}

export default Accueil
