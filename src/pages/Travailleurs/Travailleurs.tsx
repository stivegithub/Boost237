import React, { FunctionComponent } from 'react'
import VerticalTabs from './VerticalTabs'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Accueil from './Right/Accueil';

type TravailleurProps={
  email:string
}

const Travailleurs:FunctionComponent<TravailleurProps> = ({email}) => {
  const tabs=[
    {label:'Accueil', content:<Accueil/>, icon: <HomeIcon />},
    {label:'Parametre', content:"Content for tab 2", icon: <SettingsIcon/>},
    {label:'Compte', content:"Content for tab 3" , icon: <AccountCircleIcon />}
  ]
  return (
    <div className=' h-screen overflow-hidden'>
    
    {/* <div className=' grid grid-cols-10'>
      <div className=' col-span-2 bg-red-400 overflow-hidden  -mr-8 z-20'>salt</div>
      <div className=' h-screen col-span-8 bg-yellow-300  z-30 rounded-l-3xl overflow-hidden'>salut</div>
    </div> */}

    
      <VerticalTabs tabs={tabs} email={email}/>
    



    </div>
  )
}

export default Travailleurs
