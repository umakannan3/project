
import React from "react";
import uma1 from './umaphoto.jpg'
import { MDBIcon } from "mdbreact";
import { Icon } from "@iconify/react";
export function About(){
    return(
        <>
                            <h2 className="text-center"><span className="fw-bold">About Myself</span></h2>

             <div className="container-fluid row pt-5 background fs-5 mx-auto" id="about">
            <div className="col-lg-8 ">
                <p className="ps-5">
                    <h4><span className="fw-bold">B.Sc Computer Science</span></h4>
                    <p>Bharathiyar University <br/>2006 Secured with 71% </p>
                    <h4><span className="fw-bold">Certified MERN Stack Developer</span> </h4>
                    <p>KGiSL Micro College</p>
                
                    <p><MDBIcon icon="cog" spin size="3x" fixed /></p>

                </p>
                <div className="ms-5">
                <Icon icon="line-md:moon-to-sunny-outline-loop-transition" className="icon fs-3"/>   Develope adaptive content for multiple devices(mobile,tablet etc).Ensure cross-platform optimization for mobile phones.<br/> Ensure responsiveness of applications.<br/>
                <Icon icon="line-md:moon-to-sunny-outline-loop-transition" className="icon fs-3"/>   Can create and design different websites for clients.They are responsible for their aesthetic as well as their function.<br/>
                </div>
                    
            

            </div>
            <div className="col-lg-4">
                <img src={uma1} alt="no pic"className="rounded-5 h-75 uma_pic ms-5"/>
            </div>

        </div>
        </>
    );
}