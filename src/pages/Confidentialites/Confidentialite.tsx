import React, { FunctionComponent } from 'react'
import useThemeContext from '../../tools/useThemeContext'

const Confidentialite:FunctionComponent = () => {
  return (
      <div className={`${useThemeContext()? ' bg-white h-screen w-screen': ' bg-gray-800 h-screen w-screen'}`}>
      
      </div>
  )
}

export default Confidentialite
