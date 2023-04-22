import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img1 from './lap.png'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";

export function Login(){
    return(
    <>
    <div className="viocol login hhei1 w-100 d-flex justify-content-center  " id="login">
        <div className="container-fluid row bg-light h-100 w-75 my-5 rounded-5">
            <div className="col-lg-6"> 
                <img src={img1} alt="no pic" className="pt-5 pb-5 ms-5 my-5 border-rounded-5 rounded-circle"/>
            </div>
            <div className="col-lg-6 justify-center align-item-center">
                <p className="fs-1 text-dark ms-5 mt-5">Member Login</p>
                <div className="inputbox rounded-5 w-75   ps-3 p-1">
                <FontAwesomeIcon  icon={faEnvelope}></FontAwesomeIcon>
                <input type="text" id="name" placeholder="E-mail" className=" outline w-75 rounded-5 border-0 h-15 pt-3 ps-3 p-1 justify-content-around  inputbox"/>
                </div>
                <div className="inputbox rounded-5 w-75 mt-5  ps-3 p-1">
                <FontAwesomeIcon  icon={faLock}></FontAwesomeIcon>
                <input type="password" id="name" className="outline h-15 pt-3 ps-3 p-1 justify-content-around border-0 inputbox"/>
                </div>
                <div className="w-75 rounded-5">
                    <input type="button"value="Login" className="bg-success rounded-4 text-white w-100 buthei fs-3 border-0 mt-5 justify-center"/>
                </div>
                <div className="ms-5">
                    <p className="mt-5 justify-center ps-5">Forget <span className="text-success"> Username / Password ?</span></p>
                </div>
                <div className="ms-5 pb-5">
                    <p className="text-success mt-5 ps-5 justify-center">Create Your account <FontAwesomeIcon icon={faArrowRight} className="text-success"></FontAwesomeIcon></p>
                </div>
            </div>

        </div>
         
    </div>
    </>
    );
}