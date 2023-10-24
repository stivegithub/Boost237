import { FunctionComponent, createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { ThemeContextProvider } from './helper/ThemeContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Client from './pages/Client/Client';
import Confidentialite from './pages/Confidentialites/Confidentialite';
import {  EmailContextProvider } from './helper/EmailContext';
import Travailleur from './pages/Travailleurs/Travailleurs';
import React from 'react';
import NotFound from './pages/NotFournd/NotFound';
import axios from 'axios';
import redirector from './pages/Login/LoginRight/redirect';
import { ValidContextProvider, validContext } from './helper/validContext';

export const Authcontext= createContext<boolean>(false)

const App:FunctionComponent =()=>{
  const valid= useContext(validContext)
  if(!valid){
    throw new Error('une erreur est survenue')
  }
  const {val}= valid
  const categories= ["Souscrire a un service", "Rejoindre l'equipe"]

  const [isAut, setAuth]=useState<boolean>(false)
  const [err, seterr]=useState<string>('')
  const [userInfo, setUserInfo]=useState<any>({email:'', category:''})
 

  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token){
      axios.get('http://localhost:2003/verify-token', {
        headers:{
          'Authorization':token
        }
        
      }).then(response=>{
        if(response.data.valid){
          setAuth(true)
          seterr(response.data.category)
          setUserInfo({...userInfo, email:response.data.email, category:response.data.category})
          
        }else{
          localStorage.removeItem('token')
        }
      }).catch((error)=>{
        if(error.response && error.response.data ){
       return   
        }
      })
    }
  },)
  function permiss(){
    if(val || isAut){
      return true
    }
    return false
  }


  



  return(
    <>{ err&&<p>{err} stive  {isAut?'vrai':'false'}</p>}
  
    <ThemeContextProvider>
   <ValidContextProvider>
   <EmailContextProvider>
 <Authcontext.Provider value={isAut}>
 <BrowserRouter>
      <Routes>
      
      <Route path='/' element={permiss()?(redirector(err, categories)?  <Navigate to={'/client'}/>:<Navigate to={'/travailleur'}/>)
  :<Login/>}/>
      <Route  Component={Confidentialite} path='/politique-confidentialite'/>
      <Route path='/client' element={permiss()? <Client/>:<Login/>}/>
      <Route path='/travailleur' Component={ permiss()? Travailleur: Login}/>
      <Route  path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
 </Authcontext.Provider>
   </EmailContextProvider>
   </ValidContextProvider>
    </ThemeContextProvider>
   </>
    
    
    )
}

export default App;
 