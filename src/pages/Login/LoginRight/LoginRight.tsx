import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import Dark from './Dark'
import { useSmallScreen } from '../../../tools/useSmallScreen'
import axios from 'axios'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import Media from './Media'
import { EmailContext } from '../../../helper/EmailContext'
import redirector from './redirect'
import { validContext } from '../../../helper/validContext'

interface error{
  email:string,
  password:string
}
 
const LoginRight:FunctionComponent = () => {
  const valid= useContext(validContext)
  if(!valid){
    throw new Error('une erreur est survenue')
  }
  const {setVal, val}= valid
  const categories= ["Souscrire a un service", "Rejoindre l'equipe"]

  const navigator= useNavigate()
  const smallscreen= useSmallScreen()
  const [category, setCategory]=useState<string>(categories[0])
  const [error, setErrors]=useState<error>({email:'', password:''})
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
  const [newPassword, setNewPassord]=useState<String>('')
  const [token, setToken]=useState<String>('')
  const [terme, setTermes]=useState<boolean>(false)
  const [message, setMessage]=useState<string>('')
  const [conn , setConn]=useState<boolean>(true)

  const Email= useContext(EmailContext)
  if(!Email){
    throw new Error('something is wrong')
  }
  const {change}= Email



  

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
  const  response= await axios.post('http://localhost:2003/register', {email, password, category} );
  if(response.data.message){
   console.log(response.data.token)
   localStorage.setItem('token', response.data.token)
   setShowConfetti(true)
   setVal(true);
   window.location.reload()
   console.log(val)
   setTimeout(() => {
    redirector(category, categories)?  navigator('/client'):navigator('/travailleur')
  }, 3000);
  }


 }
 catch(error:any){
   if(error.response && error.response.data ){
    if(error.response.data.email){
      console.log(error.response.data.email)
      setErrors({password:error.response.data.password, email:error.response.data.email})
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
      redirector(response.data.category, categories)?  navigator('/client'):navigator('/travailleur')
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
  
  const changePassword= async()=>{
    await axios.post('http://localhost:2003/change-password', {token, newPassword})
  }

  return (
    
<div  className={`${smallscreen? ' px-2 py-7' : ' px-7 py-7'} `} >

<div className={` float-right }`}>  <Dark/>  </div>  

<div className= {`mt-7 mb-7 font-semibold to-black text-3xl ${exist? 'invisible':`visible`}`}>{ conn?' Creer un compte':'se connecter' } </div>    
 
  <form  onSubmit={(e)=> conn? register(e):login(e)} className=' px-3 gap-7 flex flex-col'>

<input placeholder='Email'  className=' rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none ' type='text'  name='Email'   value={email} onChange={(e)=> {setEmail(e.target.value); change(e.target.value)}}/>
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
<button type='submit' onClick={validator} className='cursor-pointer mt-2 w-full bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl text-center py-1 '>Connexion</button> 
<div className={`text-center cursor-pointer`} onClick={()=>{setConn(!conn)}}>{ conn?'se connecter':' Creer un compte' } </div>

<div className=' grid grid-cols-6  mt-2'><div className=' col-span-2 mt-2'><hr /></div>  <div className=' col-span-2 text-center'>Or sign up with</div>  <div className=' col-span-2 mt-2'><hr /></div></div>
 
<Media/>{showConfetti &&<Confetti/>}

{ conn && <div className=' text-center text-lg'>Consulter notre politique de securité <span className=' underline font-semibold  text-blue-600 '><Link to={'/politique-confidentialite'}>ici</Link></span></div>} 
 
{message&& <p className=' text-green-400' >{message}</p>}
{token && <div>{token}</div>}
 </form>
 
</div>


  )
}

export default LoginRight
