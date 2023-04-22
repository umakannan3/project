import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from 'typewriter-effect'
import React from "react";
import { Link } from "react-router-dom";
export function Home(){
    return(
        <>
        <div className="container-fluid row background text-center pt-5" id="first">
                <div className="col-lg-8">
                    <div className="fs-2 fw-bold text-dark"><Typewriter
                            options={{
                            strings: ["Welcome Pal!<br/> I'm"],
                            autoStart: true,
                            loop: true,
                            }}
                                                        />
                    </div><br/>
                    <p className="fs-5"><h2><span className="fw-bold">Umamaheswari P Kannan</span></h2><br/>
                Enthusiastic early graduate with a<br/> B.sc., Computer Science who is recently a MERN Stack certified professional and <br/>seeking a software job opportunity at a reputed company<br/> where I could upskill myself and contribute for the company's growth.</p>
                <p className="fs-5 fw-bold"> Here is my resume <FontAwesomeIcon icon={faHandPointDown} className="fs-5 text-secondary"></FontAwesomeIcon><br/><br/>
                <Link to='https://drive.google.com/file/d/1BNe471FELSNB8ERQMpJ1IBCyadyI6TxZ/view?usp=sharing'><button className="border border-dark rounded-5 px-3 bg-primary border border-0 text-dark fs-5 fw-bold">Resume </button></Link></p>
                </div>
                <div className="col-lg-4 pt-5">
                     <img src = "https://images.prismic.io/dribbble/e077430e-faed-4d0b-ba17-c5b5d108b0f3_36e393870f0cd04a117d27f313aeac6f.webp?auto=compress,format&rect=0,0,1200,900&w=1200&h=900" alt="no pic" className="container-fluid  rounded-5 mt-5"/> <br/>
                </div>
            </div>
        </>
    );
}