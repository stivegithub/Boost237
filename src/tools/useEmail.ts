import { useContext } from "react"
import { EmailContext } from "../helper/EmailContext"

export default function useEmai():string{
    const emai= useContext(EmailContext)
    if(!emai){
        throw new Error('something is wrong')
    }
    const {email}=emai
    return email

}