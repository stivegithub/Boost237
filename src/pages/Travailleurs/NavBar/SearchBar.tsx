import React, { FunctionComponent } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar:FunctionComponent = () => {
  return (
    <div className='relative mt-5'>
        <input placeholder='Search' className=' focus:outline-none  focus:border-blue-500 pl-10 border rounded-md py-2 px-4' type='text'/>
        <span className=' absolute left-2 top-1/2 transform -translate-y-1/2'><SearchIcon className=' text-gray-500'/></span>
    </div>
  )
}

export default SearchBar
