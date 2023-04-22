import React from "react";
import { useState } from "react";
import man from './mangos.jpg'
import ban from './banana.png'


export function Mango(){
    const [mango,setMango] = useState(0);
    const [banana,setBanana] = useState(0);
    return(
        <>
        <div className="bg-warning d-flex justify-content-center pt-5 pb-5" id="mango">
            <div className="container row bg-light  text-center rounded-5 p-5">
                <h1 className="text-center">Bob ate <span className="text-warning">{mango}</span > Mangoes and <span className="text-warning">{banana}</span> Bananas</h1>
                
                 <div className="col-lg-6 text-center row">
                    <img src={man} alt="no pic" className="mt-5"/>
                    <button className="btn bg-primary text-white mt-5 w-25 ms-auto me-auto rounded-5 p-3 " onClick={()=>setMango(mango+1)}>Eat Mango</button>

                 </div>
                 <div className="col-lg-6 row">
                 <img src={ban} alt="no pic" className="mt-5"/>
                 <button className="btn bg-primary text-white mt-5 w-25 rounded-5 ms-auto me-auto" onClick={()=>setBanana(banana+1)}>Eat Banana</button>

                 </div>
                 </div>
        </div>
        
        {/* </div> */}
        
        </>
    );
}