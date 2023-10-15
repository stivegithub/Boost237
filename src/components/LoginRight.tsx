import React, { FunctionComponent, useEffect, useState } from 'react'

const LoginRight:FunctionComponent = () => {
  
  const [exist, setExist]= useState<boolean>(false)
  useEffect(()=>{
    setTimeout(() => {
      setExist(prevExist=>prevExist = !prevExist)
      
      
    }, 2000);
  })
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
    <div className=' px-20 py-3'>
<div className={` float-right }`}><h3>Mode clair/sombre</h3></div>  
<div className= {`mt-7 font-semibold to-black text-2xl ${exist? 'invisible':`visible`}`}>{connx}</div>    


  <form action="" onSubmit={handleSubmit} className=' w-full'>
   <div className=' px-3'>
    <input placeholder='Username' className='w-full placeholder:text-gray-500 focus:text-3xl focus:rounded-lg focus:border-dashed'  name='username' value={form.username.value} onChange={(e)=> handleInput(e)}/>
   </div>
  </form>
</div>


  )
}

export default LoginRight
