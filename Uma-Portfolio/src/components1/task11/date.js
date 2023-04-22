import React,{useState} from "react";

export function Date(){
    const[mydate,setMydate]=useState("")
        function caldate(){
    
            var dat = document.getElementById("dat").value;
            var dat1 = new Date();
            dat1.setDate(dat1.getDate(dat)+90)
            var output = dat1.getDate()+"/"+(dat1.getMonth()+1)+"/"+dat1.getFullYear()
            alert(output);
            setMydate(output)

        }


    return(
        <>
        <div className="justify-center align-item-center pt-5 ps-5">
            <input type="date" id="dat"/>
            <input type="button" value="Submit"  onClick={caldate}/>
            <h1>{mydate}</h1> 
        </div>
        </>
    );

}