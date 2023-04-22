import React from "react";
export function Socbtn(){
    return(
    <>
       <div className="container-fluid row vh-100 back1">
            <div className="col-lg-4"></div>

            <div className="col-lg-4 my-auto ms-5">
                <p className=" fs-1 fw-bold ">Social Buttons</p>
                <div className=""> 
                <button type="button "className="btn btn-warning">Like</button>
                <button type="button" className="btn btn-light ms-3">Commend</button>
                <button type="button" className="btn btn-primary ms-3">Share</button></div>
            </div>
            <div className="col-lg-4"></div>
        </div>   
     </>   
    );

}