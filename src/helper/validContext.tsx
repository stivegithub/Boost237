import {  FunctionComponent, createContext, useState } from "react";

interface valid{
    val:boolean,
    setVal:(donnee:any)=>void
}
export  const validContext= createContext<valid|undefined>(undefined)

interface props{
    children:any
}
const ValidContextProvider:FunctionComponent<props>=({children})=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal]= useState(false)
    return <validContext.Provider value={{ val ,setVal  }}>
        {children}
    </validContext.Provider>

}
export {ValidContextProvider}