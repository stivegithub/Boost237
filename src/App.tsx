import React, { FunctionComponent } from 'react';
import './App.css';
import Login from './pages/Login';
import { ThemeContextProvider } from './helper/ThemeContext';

const App:FunctionComponent =()=>{
  return(
    <ThemeContextProvider><Login/></ThemeContextProvider>
    
    )
}

export default App;
