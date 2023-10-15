import TiretClignotant from '../helper/TiretClignotant'
import React, { FunctionComponent, useEffect, useState } from 'react'

type props={
    text:string[],
    spedd:number
}

const Typewriter:FunctionComponent<props> = ({text, spedd=100}) => {
    const [displayedText, setDisplayedText]= useState<string>('');
    const [index, setIndex]= useState<number>(0);
    const [isDeleting, setIsDeleting]=useState<boolean>(false)
    const [textIndex, setTextIndex]=useState<number>(0)
    const [tiret, setTiret]= useState('')
    
    useEffect(()=>{
        
      const times=   setTimeout(() => {
           return (setTiret('|'))
        }, 1000);
        return ()=> clearTimeout(times)
    })

    useEffect(()=>{
        let timeoutId:any;
        if(isDeleting){
          if(index>0){
            timeoutId= setTimeout(() => {
                setDisplayedText((prevText)=>prevText.substring(0, prevText.length -1))
                setIndex((prevIndex)=>prevIndex - 1)
                
            }, spedd);

          }
          else {
            setIsDeleting(false)
            if(textIndex===text.length -1){
                return setTextIndex(0)
              }
          if(textIndex<text.length){
            return  setTextIndex((prevIndex)=>prevIndex+1)
          }
          
          }
        }
        else{
            if(index<text[textIndex].length){
                timeoutId= setTimeout(() => {
                    setDisplayedText((prevText)=> prevText + text[textIndex][index])
                    setIndex((prevIndex)=>prevIndex+1);
                }, spedd);
            }
            else{

                setTimeout(() => {
                    setIsDeleting(true)
                }, 1000);
            }
        }
        return ()=>clearTimeout(timeoutId)
    },[text, textIndex, index, isDeleting, spedd])
  return (
    <div>
      {displayedText +'|'} {<TiretClignotant speed={spedd}/>}
    </div>
  )
}

export default Typewriter
