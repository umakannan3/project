import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link as Linkscroll } from "react-scroll"
import React from "react";
import {Link} from 'react-router-dom'
export function Navbar(){
    return(
        <>
        <div className="">
            <nav class="navbar navbar-expand-lg bg-body-tertiary nav fw-bold fst-italic nav_bar">
                <div class="container-fluid "><Link to = '/' class="navbar-brand  "><FontAwesomeIcon className=" pe-2" icon={faBriefcase}></FontAwesomeIcon>Portfolio</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item pe-2"><Linkscroll activeClass="active" to="first" spy={true} smooth={true} duration={300} class="nav-link active" aria-current="page"></Linkscroll></li>
                            <li class="nav-item pe-2"><Linkscroll activeClass="active" to="home" spy={true} smooth={true} duration={300} class="nav-link active">Home</Linkscroll></li>
                            <li class="nav-item pe-2"><Linkscroll activeClass="active" to="about" spy={true} smooth={true} duration={300} class="nav-link active">About</Linkscroll></li>
                            <li class="nav-item pe-2"><Linkscroll activeClass="active" to="certificate" spy={true} smooth={true} duration={300} class="nav-link active">Certificates</Linkscroll></li>
                            <li class="nav-item pe-2"><Linkscroll activeClass="active" to="skills" spy={true} smooth={true} duration={300} class="nav-link active">Skills</Linkscroll></li>
                            <li class="nav-item pe-2"><Linkscroll activeClass="active" to="project" spy={true} smooth={true} duration={300} class="nav-link active">MyProjects</Linkscroll></li>
                            <li class="nav-item pe-2"><Linkscroll activeClass="active" to="contact" spy={true} smooth={true} duration={300} class="nav-link active text-light">Contact</Linkscroll></li>
                        </ul>
                    </div>    
                </div>
            </nav>
            
        </div>
        </>
    );
}