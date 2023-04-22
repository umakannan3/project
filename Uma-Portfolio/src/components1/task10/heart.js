import React from "react";
import red from './heart.jpg'

export function Heart(){
    return(
    <>
    
    <div className="bg-primary d-flex justify-content-center pt-5 feed_h">
        <div className="h-50 w-50 mx-auto bg-light text-center rounded-5">
            <img src={red} alt="no pic" className="h-15 w-15 heart_h mt-5"/>
            <h2 className="mt-3">Thank You!</h2>
            <p className="mt-5 mb-5">We will use your feedback to improve your customer support <br/>performance</p>
        </div>
    </div>
    </>
    );
}