import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps   {
  isAuthenticated: boolean;
  children:any
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({  isAuthenticated, children}) => {
  if(!isAuthenticated){
    return <Navigate to={'/'}/>
  }
 
    return <>
{children}
    </>
  
};

export default ProtectedRoute;