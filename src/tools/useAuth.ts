import { useContext } from "react";
import { AuthContext } from "../helper/AuthContext";

export default function useAuth():boolean{
    const AuthContex=useContext(AuthContext)
    if(!AuthContex){
        throw new Error('une erreur est survenue')
    }
    const {connect}= AuthContex
    return connect;

}