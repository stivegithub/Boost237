import React, { FunctionComponent, createContext, useState,  } from 'react'

interface ThemeCo{
    mode:boolean ;
    handleChange:()=>void;
  
}

 export const  ThemeContext = createContext<ThemeCo | undefined>(undefined)

 interface props{
    children:any
 }

 const ThemeContextProvider:FunctionComponent<props>=({children})=>{
    const [mode , setMode]= useState<boolean>(true)
    const handleChange=()=>{
    setMode(!mode)
    }
    return(
        <ThemeContext.Provider value={{mode , handleChange }} >
           {children}
        </ThemeContext.Provider>
    )
 }
 export {ThemeContextProvider}
