 export default function redirector(data:string, category:string[]):boolean{
    if(data===category[0]){
        return true
    }
    return false
}