import React, {FunctionComponent, createContext, useState} from "react";

interface Email{
    email:string,
    change:(donnee:string)=>void
}
export const  EmailContext= createContext<Email | undefined>(undefined)

interface Props{
    children:any
}

const EmailContextProvider:FunctionComponent<Props>=({children})=>{
   
    const [email, setEmail]=useState<string>('')
    const change=(donnee: React.SetStateAction<string>)=>{
        setEmail(donnee)
    }


    return(
     <EmailContext.Provider value={{ email, change }}>
        {children}
     </EmailContext.Provider>
    )

}
export {EmailContextProvider}