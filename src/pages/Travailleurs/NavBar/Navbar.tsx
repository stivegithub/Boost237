import React, { FunctionComponent } from 'react'
import logo from '../../../images/logo.png'
import SearchBar from './SearchBar'
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Dark from '../../Login/LoginRight/Dark';
import { useWith } from '../../../tools/useDimension';
interface props{
    email:string
}

const Navbar:FunctionComponent<props> = ({email}) => {
  const width= useWith()
  const medium= width>630? true :false
  return (
    <div className=' bg-blue-400 -mt-4  w-full flex  justify-between px-2'>
        <div className=' flex  gap-3'>
            <div className=''><SearchBar/> </div>
        </div> 
        <div className={`${medium? 'flex py-5  gap-48':'flex py-5  gap-5'}`}>
       <div className="flex gap-5">
       <div className='  rounded-  bg-blue-300 rounded-md text-white cursor-pointer  w-9  h-9 font-bold text-2xl flex justify-center items-center '><MessageIcon/></div>

<div className='  rounded-xl  bg-blue-300 border-gray-500  text-gray-50 w-9 cursor-pointer  h-9 font-bold text-2xl flex justify-center items-center '><NotificationsNoneIcon/></div>
       </div>
       <div className=' flex gap-7'>
       <div className='  rounded-xl  w-9 cursor-pointer  h-9 font-bold text-2xl flex justify-center items-center '>{<Dark/>}</div>


<div className='rounded-xl  bg-blue-300  text-white w-9  cursor-pointer h-9 font-bold text-2xl flex justify-center items-center '>{email[0].toUpperCase()  }  </div>
       </div>
        
         
        </div>
      
    </div>
  )
}

export default Navbar
