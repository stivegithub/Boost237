import React, {FunctionComponent, useState } from 'react'
import axios from 'axios'
import Notification from '../../Notifications/Notification'

const Add:FunctionComponent = () => {
    const [lien, setLien]=useState<string>('')
    const [description, setDescription]=useState<string>('')
    const [err, setErr]=useState<string>('')
    const [mes, setMes]=useState<string>('')
    const [notif, setnotif]=useState<boolean>(false)
    const handleSubmit= async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
          const response= await axios.post('http://localhost:2003/posts/create', {lien, description})

          if(response.data){
            console.log(response.data.message)
            setMes(response.data.message)
            setLien('')
            setDescription('')
            setnotif(true)
            setTimeout(() => {
              setnotif(false)
            }, 7000);
          }
        }
        catch(err:any){
          if(err.response){
           if(err.response.data.message){
            setErr(err.response.data.message)
           }

          }
          else{
            console.log("l'erreur vient du serveur")
          }
        }
        
    }
  return (
    <div>
      <p className=' text-3xl text-center font-bold'> Add post</p>
{notif && <Notification message={'votre utilisateur est bien crée'} color={' bg-green-400'} />}
    
    <form onSubmit={handleSubmit}>

    <div className=' lg:px-32 lg:flex lg:flex-row gap-7 mt-7'>

   <div className=' flex-1  lg:my-0 my-2  '> 

    <input placeholder='Lien'  className='rounded-md w-full  placeholder:text-gray-500 focus:border-b-4 py-2  focus:border-blue-600     border-b border-gray-500  focus:outline-none   border-2'  name='lien'  type='text' value={lien} onChange={(e)=>{setLien(e.target.value)}}/>
    <div>{err&& <div className=' text-red-400'>{err}</div>}</div>

  </div>        

  <div className=' flex-1 my-2 lg:my-0 '>

  <input placeholder='Description' className='rounded-md  placeholder:text-gray-500 focus:border-b-4  py-2 focus:border-blue-600     border-b border-gray-500  w-full focus:outline-none   border-2'  name='description'  type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
  <div>{err&& <div className=' text-red-400'>{err}</div>}</div>

  </div>

    </div>

    <div className=' text-center'> <button type='submit'  className=' lg:w-1/3   w-full  cursor-pointer mt-2  bg-gradient-to-r from-cyan-500 via-red-400 to-yellow-500 rounded-xl text-center py-1  text-white mt5'>Creer un post</button> </div>

   </form>
  
</div>
  )
}

export default Add
