import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './home.css'

import uma from './umaphoto.jpeg'
export function Home(){
    return(
        <>
        <div className="pt-5 text-center h_height ">
            <div>
                <p>Good, better, best. Never let it rest. 'Till your good is better and your better is best.</p>
                <p className="mt-5 fs-3 fw-medium">Hi! I'm <span className="h_fontcol fw-bold">Umamaheswari P Kannan</span></p>
                <p>Certified MERN Full-Stack Web Developer</p>
                <p><button className="mt-5 rounded-eclipses butsize bg-primary text-white fs-5 fw-bold">Resume <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></button></p>
                <p>Seeking a full stack developer role with an opportunity to use my skills in developing web applications and software solutions.</p>
                {/* <p className="mt-5 fs-4"><span></span><span className="p-5">/></span><span></span><span className="p-5"></span></p> */}
            </div>
            <div className="container-fluid row d-flex justify-content-center mt-5 fs-3">
                <div className="col-1 home_back1">
                    <FontAwesomeIcon icon={faEnvelope} className="home_fa rounded-5"></FontAwesomeIcon>
                </div>
                <div className="col-1 home_back1">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </div>
                <div className="col-1 home_back1">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </div>
                <div className="col-1 home_back1">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </div>
            </div>

            {/* <div className="col-lg-6">
                <img src={uma} alt="no pic" className="h_imgsize rounded-circle mt-5"/> 
               
            </div> */}
            <div>
                
            </div>
        </div></>
    );
}