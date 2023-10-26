import React, { FunctionComponent } from 'react'

export interface dash{
    logo:React.ReactNode,
    money:number,
    color:string,
    message:string
}
interface PourcentageProps{
    percent:dash[]
}

const Pourcentag:FunctionComponent<PourcentageProps> = ({percent}) => {
  return (
 <div className=' flex flex-col gap-3'>
      { percent.map((perc, index)=>(
        <div key={index} className={`${perc.color} p-2 rounded-xl w-full`}>
            <div className=' flex flex-row gap-3 px-3'>
                <div className=' bg-gray-950  text-white rounded-2xl p-2 flex justify-center items-center'>{perc.logo}</div>
                <div >
                    <div className=' text-2xl font-bold'> $ {perc.money}</div>
                    <div className=' text-sm'>{perc.message}</div>
                </div>
            </div>
        </div>
    ))}
 </div>
  )
}

export default Pourcentag
