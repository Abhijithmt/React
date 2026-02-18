import { useState } from "react"
 export default function Usestates(){

    const[name,setName]=useState()


    const upatename = () =>{
        setName("abhijith")

    }

    return(
        <div>
        <p>Name:{name}</p>
        <button onClick={upatename}>update name</button>
        </div>
    
    )

}
