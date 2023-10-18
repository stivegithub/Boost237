import {useContext} from "react";
import { ThemeContext } from "../helper/ThemeContext";

export default function useThemeContext():boolean{
    const  modes = useContext(ThemeContext);
    if(!modes){
        throw new Error('une erreur est survenue lors du traitement.');

    }
    const {mode}= modes
    return mode
}