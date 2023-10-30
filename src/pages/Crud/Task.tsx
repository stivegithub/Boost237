import  { FunctionComponent } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import Button from './Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface TaskProps{
 lien:string;
 description:string;
 deleteO:(id:string)=>void,
 update:(id:string)=>void

}

const Task:FunctionComponent<TaskProps> = ({lien, description,  update, deleteO}) => {
  return (
    <div className=' p-1 flex  bg-blue-500 w-full'>
        <div className=' p-1 text-blue-400 bg-white flex-none'><LanguageIcon/></div>
        <div>{description}</div>
        <Button  icon={<EditIcon/>} handleOnclick={update}/>
        <Button  icon={<DeleteIcon/>} handleOnclick={deleteO}/>
      
    </div>
  )
}

export default Task
