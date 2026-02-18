
import { useState } from "react";

export default function Counting(){

    const [count,SetCount]=useState(0)

    const increment = ()=>{
        SetCount(count+1)
    }

    const decrement = () =>{
        SetCount (count-1)
    
    }

    const reset = ()=>{
        SetCount (0)
    }

    return(
        <div>
            <p>COUNT:{count}</p>
            <button onClick={increment}>increment button</button>
            <button onClick={decrement}>Decrement button</button>
            <button onClick={reset}>Reset</button>
            

        </div>
    )
}