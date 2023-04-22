import { faBars, faBrain, faCertificate, faCircleQuestion, faEnvelope, faHome, faProjectDiagram,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return(
        <>
        <header className="header">
            <div className="header-toggle">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>

            </div>
        </header>
        <aside className="sideheader">
            <nav className="">
                <div>
                    <Link to='/nav'>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home
                    </Link>
                </div>
                <div>
                    <Link to='/nav'>
                        <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>About
                    </Link>
                </div>
                <div>
                    <Link to='/nav'>
                        <FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon>Certificates
                    </Link>
                </div>
                <div>
                    <Link to='/nav'>
                        <FontAwesomeIcon icon={faBrain}></FontAwesomeIcon>Skills
                    </Link>
                </div>
                <div>
                    <Link to='/nav'>
                        <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>Project
                    </Link>
                </div>


                <div>
                    <Link to='/nav'>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Contact
                    </Link>
                </div>
                
            </nav>

        </aside>
        </>
    );

}
export default Nav;