import React, { FunctionComponent } from 'react'
import facebook from '../../../images/facebook.png'
import instagram from '../../../images/instagram.png'
import google from '../../../images/google.jpg'

interface props{
    img:string
}

const Social:FunctionComponent<props> =({img})=>{
    return(
<div className=' cursor-pointer p-2 rounded-full shadow-lg '><img src={img} alt='facebook' width={30} height={30}/>
</div>    )

}

const Media:FunctionComponent = () => {
  return (
    <div className=' flex gap-x-9 justify-center' >
        <Social img={facebook}/>
        <Social img={instagram}/>
        <Social img={google}/>
    </div>
  )
}

export default Media
