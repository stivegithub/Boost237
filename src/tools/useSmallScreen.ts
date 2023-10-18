import useDimension from "./useDimension"
  export  const useSmallScreen=():boolean=>{
        const size= useDimension()
     if(size.largeur<429){
       return true
     }
     return false
   }
