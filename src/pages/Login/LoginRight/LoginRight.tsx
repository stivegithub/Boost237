import React, { FunctionComponent, useEffect, useState } from 'react'
import Dark from './Dark'
import { useSmallScreen } from '../../../tools/useSmallScreen'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import Media from './Media'

interface error{
  email:string,
  password:string,
  username:string
}
 
const LoginRight:FunctionComponent = () => {
    const categories= ["Souscrire a un service", "Rejoindre l'equipe"]

  const smallscreen= useSmallScreen()
  const [category, setCategory]=useState<string>(categories[0])
  const [error, setErrors]=useState<error>({email:'', password:'', username:""})
  const [err , setErr]=useState({message1:'', message2:'', message3:'',})
  const [showConfetti, setShowConfetti]=useState<boolean>(false)
  const [exist, setExist]= useState<boolean>(false)
  const [isChecked, setIsChecked]=useState<boolean>(false)
  useEffect(()=>{
    setTimeout(() => {
      setExist(prevExist=>prevExist = !prevExist)
      
      
    }, 2000);
  })
 

  const [email, setEmail]=useState<string>('')
  const [password, setPassword]=useState<string>('')
  const [username, setUsername]=useState<string>('')

  const terme:boolean=false
  const message:string=''
  const [conn , setConn]=useState<boolean>(true)

 



  

  const validator=()=>{
    if(isChecked){
      return true
    }
    else{
      return false
    }

  }


  const register = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

 try{
  const  response= await axios.post('http://localhost:2003/register', {username, email, password, category} );
  if(response.data.message){
   console.log(response.data.token)
   setShowConfetti(true)
    setTimeout(() => {
   localStorage.setItem('token', response.data.token)
   window.location.reload()
    }, 3000);
 
  }


 }
 catch(error:any){
   if(error.response && error.response.data ){
    if(error.response.data.username){
      setErrors({...error, username:error.response.data.username})

    }
    if(error.response.data.email){
      console.log(error.response.data.email)
      setErrors({...error, password:error.response.data.password, email:error.response.data.email})
    }
    if(error.response.data.password){
      setErrors({...error, password:error.response.data.password})
    }
   

   }
 }
  }

  const login = async (e:React.FormEvent<HTMLFormElement>)=>{
   
    e.preventDefault();
    try{
      const response= await axios.post('http://localhost:2003/login', {email , password})
     if(response.data.message){
     setShowConfetti(true)
      setTimeout(() => {
     localStorage.setItem('token', response.data.token)
      window.location.reload()  
      }, 3000);
     }
    }
    catch(error:any){
      if(error.response &&  error.response.data){ 
        if(error.response.data.message1){
          setErr({...err, message1:error.response.data.message1})

        }
        if(error.response.data.message2){
          setErr({...err, message2:error.response.data.message2})
        }
        if(error.response.data.message3){
          setErr({...err, message3:error.response.data.message3})
        }
        
      }

    }

  
   }
  
  

  return (
    
<div  className={`${smallscreen? ' px-2 py-7' : ' px-7 py-7'} `} >

<div className={` float-right }`}>  <Dark/>  </div>  

<div className= {`mt-7 mb-7 font-semibold to-black text-3xl ${exist? 'invisible':`visible`}`}>{ conn?' Creer un compte':'se connecter' } </div>    
 
  <form  onSubmit={(e)=> conn? register(e):login(e)} className=' px-3 gap-7 flex flex-col'>

{conn && <input placeholder='Username'  className=' rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none ' type='text'  name='Username'   value={username} onChange={(e)=> {setUsername(e.target.value); }}/>}

<input placeholder='Email'  className=' rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none ' type='text'  name='Email'   value={email} onChange={(e)=> {setEmail(e.target.value); }}/>
{error.email && <div className=' text-red-400'>{error.email}</div>}
{err.message1 && <div className=' text-red-400'>{err.message1}</div>}
{err.message2 && <div className=' text-red-400'>{err.message2}</div>}
{err.message3 && <div className=' text-red-400'>{err.message3}</div>}



{message&& <p >{message}</p>}
{/* <input placeholder='Email' className='rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none '  name='email' value={form.email.value} onChange={(e)=> handleInput(e)} type='email' /> */}

<input placeholder='Password' className='rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none '  name='password' value={password} onChange={(e)=> setPassword(e.target.value)} type='password'/>
{error.password && <div className=' text-red-400'>{error.password}</div>}
{err.message1 && <div className=' text-red-400'>{err.message1}</div>}
{err.message3 && <div className=' text-red-400'>{err.message3}</div>}


{conn && <select name="category" id="" value={category} className=' focus:outline-none bg-gray-300 py-1 rounded-md' onChange={(e)=>{setCategory(e.target.value); }}>  {categories.map(categor=>(<option key={categor} id={categor}>{categor}</option>))}  </select> }
{ conn && <div className=' flex'>  <div className='  items-center'><input type="checkbox" id='check' className=' hidden' checked={isChecked} onChange={()=>setIsChecked(!isChecked)} /> <label htmlFor='check' className='  items-center cursor-pointer'><div className={`w-5 h-5 border border-gray-300 rounded mr-2 ${isChecked? 'bg-blue-500': 'bg-white'}`}></div></label></div> <div className={`${terme? ' text-red-500' :''}`}>Accepter les termes de confidentialités</div> </div>}
<button type='submit' onClick={validator} className='cursor-pointer mt-2 w-full bg-gradient-to-r from-cyan-500 via-red-400 to-yellow-500 rounded-xl text-center py-1  text-white'>Connexion</button> 
<div className={`text-center cursor-pointer`} onClick={()=>{setConn(!conn)}}>{ conn?'se connecter':' Creer un compte' } </div>

<div className=' grid grid-cols-6  mt-2'><div className=' col-span-2 mt-2'><hr /></div>  <div className=' col-span-2 text-center'>Or sign up with</div>  <div className=' col-span-2 mt-2'><hr /></div></div>
 
<Media/>{showConfetti &&<Confetti/>}

{ conn && <div className=' text-center text-lg'>Consulter notre politique de securité <span className=' underline font-semibold  text-blue-600 '><Link to={'/politique-confidentialite'}>ici</Link></span></div>} 
 
{message&& <p className=' text-green-400' >{message}</p>}
 </form>
 
</div>


  )
}

export default LoginRight
