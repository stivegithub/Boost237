import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import Dark from './Dark'
import { useSmallScreen } from '../../../tools/useSmallScreen'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import Media from './Media'
import { EmailContext } from '../../../helper/EmailContext'



const LoginRight:FunctionComponent = () => {
  const navigator= useNavigate()
  const smallscreen= useSmallScreen()
  const [showConfetti, setShowConfetti]=useState<boolean>(false)
  const [exist, setExist]= useState<boolean>(false)
  const [isChecked, setIsChecked]=useState<boolean>(false)
  useEffect(()=>{
    setTimeout(() => {
      setExist(prevExist=>prevExist = !prevExist)
      
      
    }, 2000);
  })
 

  const [username, setUsername]=useState<string>('')
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
  const  register= await axios.post('http://localhost:2003/register', {username, password} );
  console.log(register.data.message)
    navigator('/accueil')
  }

  const login = async (e:React.FormEvent<HTMLFormElement>)=>{
   if(validator()){
    e.preventDefault();
    const response= await axios.post('http://localhost:2003/login', {username , password})
    if(response.status===200){
    console.log(response.data.message)
    setShowConfetti(true)
    setTimeout(() => {
      navigator('/accueil')
    }, 5000);
    setToken(response.data.token)
    setMessage(response.data.message)
   
   }
   if(response.status===400){
    setMessage(response.data.message)
   }
   }
   else{
    return setTermes(prev=>prev = ! prev)
    
   }
  }
  const changePassword= async()=>{
    await axios.post('http://localhost:2003/change-password', {token, newPassword})
  }
 const connx:string= 'Creer un compte'
 const category= ["Rejoindre l'equipe", "Souscrire a un service"]

  return (
    
<div className={`${smallscreen? ' px-2 py-7' : ' px-7 py-7'} `} >

<div className={` float-right }`}>  <Dark/>  </div>  

<div className= {`mt-7 mb-7 font-semibold to-black text-3xl ${exist? 'invisible':`visible`}`}>{connx}</div>    
 
  <form  onSubmit={(e)=>register(e)} className=' px-3 gap-7 flex flex-col'>

<input placeholder='Username'  className=' rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none ' type='text'  name='username'   value={username} onChange={(e)=> {setUsername(e.target.value); change(e.target.value)}}/>

{message&& <p >{message}</p>}
{/* <input placeholder='Email' className='rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none '  name='email' value={form.email.value} onChange={(e)=> handleInput(e)} type='email' /> */}

<input placeholder='Password' className='rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none '  name='password' value={password} onChange={(e)=> setPassword(e.target.value)} type='password'/>

{conn && <select name="category" id="" className=' focus:outline-none bg-gray-300 py-1 rounded-md'>  {category.map(category=>(<option key={category} id={category}>{category}</option>))}  </select> }
{ conn && <div className=' flex'>  <div className='  items-center'><input type="checkbox" id='check' className=' hidden' checked={isChecked} onChange={()=>setIsChecked(!isChecked)} /> <label htmlFor='check' className='  items-center cursor-pointer'><div className={`w-5 h-5 border border-gray-300 rounded mr-2 ${isChecked? 'bg-blue-500': 'bg-white'}`}></div></label></div> <div className={`${terme? ' text-red-500' :''}`}>Accepter les termes de confidentialités</div> </div>}
<button type='submit' onClick={validator} className='cursor-pointer mt-2 w-full bg-blue-500 text-white rounded-xl text-center py-1 '>Connexion</button> 
<div className={`text-center cursor-pointer`} onClick={()=>{setConn(!conn)}}>{ conn?' Creer un compte' :'se connecter'} </div>

<div className=' grid grid-cols-6  mt-2'><div className=' col-span-2 mt-2'><hr /></div>  <div className=' col-span-2 text-center'>Or sign up with</div>  <div className=' col-span-2 mt-2'><hr /></div></div>
 
<Media/>{showConfetti &&<Confetti/>}

{ conn && <div className=' text-center text-lg'>Consulter notre politique de securité <span className=' underline font-semibold  text-blue-600 '><Link to={'/politique-confidentialite'}>ici</Link></span></div>} 
 
{message&& <p className=' text-green-400' >{message}</p>}

 </form>
 
</div>


  )
}

export default LoginRight
