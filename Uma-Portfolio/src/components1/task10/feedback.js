import React from "react";
import em1 from './cry.jpg'
import em2 from './nil.jpg'
import em3 from './happy.jpg'
import {Link} from "react-router-dom"

export function Feedback(){
    return(

        <>
            <div className="bg-primary pt-5 d-flex justify-content-center align-content-center">
                <div className=" col-lg-5 d-flex align-content-center bg-light rounded-5 ">
                    <div className="fs-2 ms-3">
                        <p className="fs-2 fw-bold">How satisfied are you with our<br/> customer support performance?</p>
                    </div>
                    <div>
                    <div className="container-fluid row d-flex ms-3">
                        <div className="col-lg-4 col-lg-3 col-sm-3 col-3 ms-3 h-75 w-75"><Link to='/heart'><img src={em1} alt="no pic" className=""/></Link></div>
                        <div className="col-lg-4 col-lg-3 col-sm-3 col-3 ms-3 h-75 w-75"><Link to='/heart'><img src={em2} alt="no pic" className=""/></Link></div>
                        <div className="col-lg-4 col-lg-3 col-sm-3 col-3 ms-3 h-75 w-75"><Link to='/heart'><img src={em3} alt="no pic" className=""/></Link></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}