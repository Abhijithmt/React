import { useState } from "react"
 export default function Usestates(){

    const[name,setName]=useState("guest")

    const [age,setAge]=useState(0)


    const upatename = () =>{
        setName("abhiiii")
    }
    
        const incremenage= ()=>{
            setAge(age + 10 )
        }


    return(
        <div>
        <p>Name:{name}</p>
        <button onClick={upatename}>update name</button>



        <p>age:{age}</p>
        <button onClick={incremenage}>increment age</button>
        </div>
        
    
    )

}
