import { FunctionComponent, createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { ThemeContextProvider } from './helper/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './pages/Client/Client';
import Confidentialite from './pages/Confidentialites/Confidentialite';
import {  EmailContextProvider } from './helper/EmailContext';
import Travailleur from './pages/Travailleurs/Travailleurs';
import React from 'react';
import NotFound from './pages/NotFournd/NotFound';
import axios from 'axios';

export const Authcontext= createContext<boolean>(false)

const App:FunctionComponent =()=>{
  const [isAut, setAuth]=useState<boolean>(false)
  const [err, seterr]=useState<String>('')
 

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
         
          seterr(response.data.email)
        }else{
          localStorage.removeItem('token')
        }
      }).catch((error)=>{
        if(error.response && error.response.data ){
       return   
        }
      })
    }
  }, [])


  return(
    <>{ err&&<p>{err} stive  {isAut?'vrai':'false'}</p>}
  
    <ThemeContextProvider>
   <EmailContextProvider>
 <Authcontext.Provider value={isAut}>
 <BrowserRouter>
      <Routes>
      
      <Route path='/' Component={Login}   />
      <Route  Component={Confidentialite} path='/politique-confidentialite'/>
      <Route path='/client' element={isAut? <Client/>:<Login/>}/>
      <Route path='/travailleur' Component={ isAut? Travailleur: Login}/>
      <Route  path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
 </Authcontext.Provider>
   </EmailContextProvider>
    </ThemeContextProvider>
   </>
    
    
    )
}

export default App;
 