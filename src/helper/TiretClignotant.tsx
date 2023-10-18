import React, { FunctionComponent, useEffect, useState } from 'react'

type props={
    speed:number
}
const TiretClignotant:FunctionComponent<props> = ({speed}) => {
    const [exist, setExist]=useState<boolean>(false)
    const tiret:string= exist? "|" :''
    useEffect(()=>{
        setTimeout(() => {
            setExist(prevExist=>prevExist = !prevExist)
           
        }, 2000);
    },[speed, exist])
  return (
    <span>
      {tiret}
    </span>
  )
}

export default TiretClignotant
