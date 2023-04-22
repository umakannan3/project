import React,{useState} from "react";

export function Counter(){

    const [count,setCount] = useState(0);

    return(
        <>
        <div className="col-lg-6 ms-auto me-auto fs-3 pt-5 pb-5" >
            <h1 className="ps-5"> {count}</h1>
            <button onClick={()=>setCount(count+1)} className="rounded-5">Increment</button>
            <button onClick={()=>setCount(count-1)} className="rounded-5">Decrement </button>
            <button onClick={()=>setCount(count*0)} className="rounded-5">Reset</button>


        </div>
        </>
    );
}