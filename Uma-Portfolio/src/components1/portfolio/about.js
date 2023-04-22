import React from "react";
import uma1 from "./umaphoto.jpeg"
export function About(){
    return(
        <>
        <div className="container-fluid row pt-5">
            <div className="col-lg-8">
                <p>
                    <ul>
                        <li>Develop adaptive content for multiple devices (cell phone, tablets, etc.) Ensure cross-platform optimization for mobile phones. Ensure responsiveness of applications.</li>
                        <li>Can creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. </li>
                        <li>my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites.</li>
                        <li>Solving code problems. Editing & Design with designing team in the company to build perfect web designs.</li>
                    </ul>
                </p>

            </div>
            <div className="col-lg-4 d-flex justify-center align-content-center">
                <img src={uma1} alt="no pic"className="h-75 w-50 ms-5"/>
            </div>

        </div>
        </>
    );
    
}