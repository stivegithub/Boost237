import React, { FunctionComponent, useEffect, useState } from 'react'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import google from '../images/google.jpg'
import Dark from '../helper/Dark'
import useDimension from '../tools/useDimension'
import { useSmallScreen } from '../tools/useSmallScreen'
import Typewriter from '../helper/Typewriter'



const LoginRight:FunctionComponent = () => {
  const smallscreen= useSmallScreen()
  const size= useDimension()
  const [exist, setExist]= useState<boolean>(false)
  const [isChecked, setIsChecked]=useState<boolean>(false)
  useEffect(()=>{
    setTimeout(() => {
      setExist(prevExist=>prevExist = !prevExist)
      
      
    }, 2000);
  })
  const text=[' le travail', ' le professionnalisme', " l'efficacite", " le respect des delais", "la rigueur"]

 const connx:string= 'Creer un compte'
 const category= ["Rejoindre l'equipe", "Souscrire a un service"]
 type Field={
  value?:any,
  isvalid?:boolean,
  error?:string,
  hidden?:boolean
 }
 type Form={
  username:Field,
  email:Field,
  password:Field,
  category:Field
 }

 const [form, setForm]= useState<Form>({
  username:{value:'', isvalid:true, hidden:false},
  email:{value:'', isvalid:true, hidden:false},
  password:{value:'',  isvalid:true , hidden:false},
  category:{value:'' , isvalid:true , hidden:false}
 })
 
 const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const fieldName:string= e.target.name;
    const fieldValue:string= e.target.value
    const secondField={value:fieldValue}
    setForm({...form , ...{[fieldName]:secondField}})
 }
 const validateForm=()=>{
  var newForm:Form=form;

  //Validator username
  if(!/^[a-zA-Zàéé]{3, 25}$/.test(form.username.value)){
    const errorMsg:string = 'Le nom est compris entre 1 et 25 caracteres. ';
    const newFied:Field= {value:form.username.value, error:errorMsg, isvalid:false}
    newForm={...newForm, ...{username:newFied}}

  }
  else{
    const newFied:Field=({value:form.username.value, error:'', isvalid:true})
    newForm= {...newForm, ...{username:newFied}}
  }
  //validator email
  const end= '@gmail.com';
  if(!/^[a-zA-Zàé;,.]{7, 30}/.test(form.email.value) || !form.email.value.endwith(end)){
    const errorMsg:string= "votre email n'est pas valide";
    const newFied:Field={value:form.email.value, error:errorMsg, isvalid:false}
    newForm={...newForm, ...{email:newFied}}
  }
  else{
    const newField:Field={value:form.username.value, error:'' , isvalid:true}
   newForm= {...newForm, ...{email:newField}}
  }

  // validator password
  if(!/[a-zA-Zàé;:]{3,25}/.test(form.password.value)){
    const errorMsg="vous devez avoir plus de 6 caracteres."
    const newFiel:Field= {value:form.password.value, error:errorMsg, isvalid:false}
    newForm= {...newForm, ...{password:newFiel}}
  }else{
    const newField:Field={value:form.password.value, isvalid:true, error:''};
    newForm={...newForm, ...{password:newField}}
  }
  setForm(newForm)
  return newForm.username.isvalid
 }

 //envoyer le message
 const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const isFormValid= validateForm();
  if(isFormValid){
    
  }
 }
 const SelectType=(type:string, e:React.ChangeEvent<HTMLInputElement>)=>{
  const checked= e.target.checked;
  let newField:Field
  if(checked){
    const newType:string[]= form.category.value.concat([type]) 
    newField={value:newType}
  }
  else{
    const newType:string[]= form.category.value.filter((prevType:string)=> prevType !== type )
    newField={value:newType}
  }
  setForm({...form, ...{category:newField}})
 }
  return (
    
    <div className={`${smallscreen? ' px-2 py-7' : ' px-7 py-7'} `} >
<div className={` float-right }`}>
  <Dark/>
  </div>  
<div className= {`mt-7 mb-7 font-semibold to-black text-3xl ${exist? 'invisible':`visible`}`}>{connx}</div>    


  <form  onSubmit={handleSubmit} className=' px-3 gap-7 flex flex-col'>
<input placeholder='Username' className=' rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none '  name='username' value={form.username.value} onChange={(e)=> handleInput(e)}/>
<input placeholder='Email' className='rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none '  name='email' value={form.email.value} onChange={(e)=> handleInput(e)} type='email' />
<input placeholder='Password' className='rounded-md w-full placeholder:text-gray-500 focus:border-b-4  focus:border-blue-600     border-b border-gray-500  focus:outline-none '  name='password' value={form.password.value} onChange={(e)=> handleInput(e)} type='password'/>
<select name="category" id="" className=' focus:outline-none bg-gray-300 py-1 rounded-md'>
  {category.map(category=>(<option>{category}</option>))}
  </select>  
<div className=' flex'>  <div className='  items-center'><input type="checkbox" id='check' className=' hidden' checked={isChecked} onChange={()=>setIsChecked(!isChecked)} /> <label htmlFor='check' className='  items-center cursor-pointer'><div className={`w-5 h-5 border border-gray-300 rounded mr-2 ${isChecked? 'bg-blue-500': 'bg-white'}`}></div></label></div> <div>Accepter les termes de confidentialités</div> 
</div>
<button type='submit' className='cursor-pointer mt-2 w-full bg-blue-500 text-white rounded-xl text-center py-1 '>Connexion
</button> 

<div className=' grid grid-cols-6  mt-2'>
  <div className=' col-span-2 mt-2'><hr /></div>
  <div className=' col-span-2 text-center'>Or sign up with</div>
  <div className=' col-span-2 mt-2'><hr /></div>

</div>

<div className='  flex gap-x-9 justify-center'>
  <div className=' p-2 rounded-full shadow-lg '><img src={facebook} alt='facebook' width={30} height={30}/>
</div> 
<div className=' p-2 rounded-full shadow-lg flex items-center justify-center'><img src={instagram} alt='instagram' width={30} height={30}/>
</div>
<div className=' p-2 rounded-full shadow-lg flex items-center justify-center'><img src={google} alt='instagram' width={30} height={30}/>
</div>
</div>
<div className=' text-center text-lg'>Consulter notre politique de securité <span className=' underline font-semibold  text-blue-600 '>ici</span></div>
 </form>
 <div className='  text-2xl text-center mt-3  mb-2'><Typewriter text={text}  spedd={200}/></div>

</div>


  )
}

export default LoginRight
