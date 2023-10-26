import React, { FunctionComponent } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Pourcentag, { dash } from './Pourcentage';

const AccueilSecond:FunctionComponent = () => {
    const dashItem=[{logo: <AttachMoneyIcon/>, money: 623, color:' bg-cyan-300', message:'montant total' },{logo: <AttachMoneyIcon/>, money: 13, color:' bg-purple-300', message:'montant total' },{logo: <AttachMoneyIcon/>, money: 0o3, color:'bg-orange-300', message:'montant total' }]
  return (
    <div className=' flex flex-col gap-2  '>
        <Pourcentag percent={dashItem}/>
      
    </div>
  )
}

export default AccueilSecond
