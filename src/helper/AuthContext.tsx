import { FunctionComponent, createContext,  useState } from "react";

interface Auth{
    connect:boolean,
    setConnect:(donnee:boolean)=>void
}
 export  const AuthContext= createContext<Auth|undefined>(undefined) 


interface props{
    children:any
} 
 
 const AuthProvider:FunctionComponent<props>=({children})=>{
    const [connect, setConnect]=useState(false);
    return <AuthContext.Provider value={{ connect, setConnect }}>
        {children}
    </AuthContext.Provider>
 }
 export {AuthProvider}