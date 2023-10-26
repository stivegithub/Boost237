import React, { FunctionComponent, useState } from 'react'
import Navbar from './NavBar/Navbar'
import logo from '../../images/logo.png'


interface TabProps{
    label:string,
    content:React.ReactNode,
    icon:any
}
interface VerticalTabsProps{
    tabs:TabProps[],
    email:string
}

const VerticalTabs:FunctionComponent<VerticalTabsProps> = ({tabs, email}) => {
    const [activeTab, setActiveTab]=useState<number>(0)
  return (
    <div className=' grid grid-cols-10 h-screen'>

        <div className=' col-span-2 bg-blue-400   '>
        <img src={logo} width='150' height='150' />

        <div className=' pt-32 px-3 '>

            {tabs.map((tab, index)=>(
               <div key={index} className={` cursor-pointer py-3 rounded-md w-full ${activeTab===index?'bg-blue-500 text-white':''}`} onClick={()=>setActiveTab(index)}> {tab.icon} {tab.label}</div>
            ))}
            </div> 
            <div className=' pt-40  ml-5'><span className=' text-xl'>&copy;</span> 2023 All right reserved</div>
        </div>
            <div className=' col-span-8'> 
            <div><Navbar email={email}/></div>
            <div style={{ borderRadius:'8' }} className=' rounded-tl-3xl  h-screen' > {tabs[activeTab]?.content}</div>
             </div>
      
    </div>
  )
}

export default VerticalTabs
