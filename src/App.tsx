import { FunctionComponent } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { ThemeContextProvider } from './helper/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import Confidentialite from './pages/Confidentialites/Confidentialite';
import {  EmailContextProvider } from './helper/EmailContext';

const App:FunctionComponent =()=>{
  return(
    <ThemeContextProvider>
   <EmailContextProvider>
   <BrowserRouter>
      <Routes>
      
      <Route path='/' Component={Login}   />
      <Route  Component={Confidentialite} path='/politique-confidentialite'/>
      
      <Route path='/accueil' Component={Accueil}/>
      </Routes>
    </BrowserRouter>
   </EmailContextProvider>
    </ThemeContextProvider>
    
    
    )
}

export default App;
 