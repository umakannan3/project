import React from "react";
import {Link} from "react-router-dom"


export function Load(){
    return(
        <>
            <div className="h_height bg-warning justify-content-center pt-5">
                <Link to='/login'><button className="float-end">Sign In</button></Link>
                <div className="col-lg-6 mx-auto my-auto">
                    <p>Welcome to my website</p>
                </div>
            </div>
        </>
    );
}