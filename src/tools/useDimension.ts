import  { useEffect, useState} from "react";

interface size{
    largeur:number,
    hauteur:number
}

const  useDimension=()=>{
    const [size, setSize]= useState<size>({largeur:window.innerWidth, hauteur: window.innerHeight})
    useEffect(()=>{
        setSize({hauteur:window.innerHeight, largeur:window.innerWidth})
    }, [size.hauteur, size.largeur])
  return size;
}
export default useDimension;