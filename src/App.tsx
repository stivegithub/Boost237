import { createContext, useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { ThemeContextProvider } from './helper/ThemeContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Client from './pages/Client/Client';
import Confidentialite from './pages/Confidentialites/Confidentialite';
import Travailleur from './pages/Travailleurs/Travailleurs';
import NotFound from './pages/NotFournd/NotFound';
import axios from 'axios';
import Admin from './pages/Crud/Admin';
import Add from './pages/Crud/Add';

export const Authcontext= createContext<boolean>(false)

const App =()=>{
 
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
  },[])

  const status= err===categories[0]
 


  



  return(
    <>
     {/* { err&&<p>{err} stive  {isAut?'vrai':'false'}</p>}  */}
  
    <ThemeContextProvider>
 <Authcontext.Provider value={isAut}>
 <BrowserRouter>
      <Routes>
      
      <Route path='/' element={isAut?(status?  <Navigate to={'/client'}/>: <Navigate to={'/travailleur'}/>)
  :<Login/>}/>
      <Route  Component={Confidentialite} path='/politique-confidentialite'/>
      <Route path='/client' element={isAut? <Client/>:<Login/>}/>
      <Route path='/travailleur' element={ isAut? <Travailleur email={userInfo.email}/>: <Login/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route  path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
 </Authcontext.Provider>
    </ThemeContextProvider>
   </>
    
    
    )
}

export default App;
 