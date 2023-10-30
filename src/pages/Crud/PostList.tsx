import axios from 'axios'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Task from './Task'

interface Item{
  _id:string,
  lien:string,
  description:string
}

const PostList:FunctionComponent = () => {

    const [items, setItem]= useState<Item[]>([])

    useEffect( ()=>{
      const response= axios.get('http://localhost:2003/posts/post');
     response.then(response =>{
      
      console.log(response.data.items)
      setItem(response.data.items)
     }).catch(err=>{
      console.log(err.response)
     })

    
    
    },[])
    const handleDelete= async (id:string)=>{
      const confirmed= window.confirm('est tu pret a supprimer cet element?')
     if(confirmed){
      try{
       
        await axios.delete(`http://localhost:2003/posts/delete/${id}`)
        console.log('salut')
        setItem(items.filter(item=>item._id !==id))
      }
      catch(err){
        console.log(`Error deleting item`, err)
      }
     }
    }
     
    const handleUpdate= async (id:string)=>{
      
      const newName=prompt('Entrer new name:', '')
      const descriptions= prompt('Entrez une description:', '')
      if(newName && newName.trim()!==''){
        try{
          const response= await axios.put(`http://localhost:2003/posts/update/${id}`, {lien:newName, description:descriptions})
          const updateItems= response.data.UpdatedItem
          console.log(updateItems)
           setItem(items.map(item=>item._id===id? updateItems : item))
        }
        catch(err:any){
          if(err.response){
            console.log(`Error updating item  ${err.response.data.message}`)

          }
        }
      }
    }
  
  return (
    <div className=' flex flex-col gap-3'>
      {items.map( item =>(

      <Task key={item._id} deleteO={()=>handleDelete(item._id)} update={()=>handleUpdate(item._id)} lien={item.lien} description={item.description}/>


      ))}
      
    </div>
  )
}

export default PostList
