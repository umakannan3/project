import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faLocationPin, faMobile } from "@fortawesome/free-solid-svg-icons";
export function Contact(){
    return(
        <>
        <div className="container-fluid row background  text-centerpt-5" id="contact">  
        
            <div className="col-lg-6 text-center mt-5">
            <h2><span className="fw-bold">You can ping me @</span></h2>

                <p className="fs-6 text-center fw-medium">Open for opportunities.Let's connect and build something awesome together!</p>
                <div className="pt-5">
        
                    <input type = "text" className=" w-50"placeholder="Name"></input> <br/><br/>
                    <input type = "text" className="w-50"placeholder="Email"></input><br/><br/>
                    <input type ="text" className="w-50" placeholder="Subject"></input><br/><br/>
                    <textarea className="w-50" placeholder="message"></textarea><br/><br/>
                </div>
                <div>
                    <input type = "button" className="rounded-5 bgcolor bg-primary fw-bold p-1  float-center " value={"Send message"} ></input>
                </div>  
            </div>
            
            <div className="col-lg-6 pt-5 ps-5">
                    <h2><span className="fw-bold">You can contact me @</span></h2>
                    <div className="pt-5">
                
                    <p className="fs-5 "><a href="https://mail.google.com/mail/u/0/#inbox" className="text-dark"><FontAwesomeIcon icon={faEnvelope} className="home_fa rounded-5"></FontAwesomeIcon> <span className="ms-3">  umaheshcbe3@gmail.com </span></a> </p>
                
        
                    <p className=" fs-5 text-dark"><a href="https://www.linkedin.com/in/uma-kannan-b4248624b/" className="text-dark"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon><span className="ms-3">Linkedin</span></a>    </p>
                
                    <p className=" fs-5 text-dark"><a href="https://github.com/umakannan3" className="text-dark"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon><span className="ms-3">Github</span></a></p>
            
                    <p className=" fs-5 "><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon><span className="ms-3">9952251932</span></p>

                    <p className=" fs-5 text-dark"><a href="https://www.google.com/maps/place/Janaki+Nagar,+Kuppakonam+Pudur,+Coimbatore,+Tamil+Nadu/@11.0268758,76.9307815,17z/data=!3m1!4b1!4m10!1m2!2m1!1sjanaki+nagar,+venkittapuram,+coimbatore+-+641025!3m6!1s0x3ba858c3893f770d:0x869d1ab79c9f315e!8m2!3d11.0274877!4d76.9357925!15sCjBqYW5ha2kgbmFnYXIsIHZlbmtpdHRhcHVyYW0sIGNvaW1iYXRvcmUgLSA2NDEwMjWSAQxuZWlnaGJvcmhvb2TgAQA!16s%2Fg%2F11bx1zmntm" className="text-dark"><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon><span className="ms-3">3/3, Janaki Nagar, <br/> Venkittapuram, <br/> Coimbatore - 641025</span></a></p>
                    </div>
            </div>
        </div>
        </>
    );

}