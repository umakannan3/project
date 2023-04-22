import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export function Notify(){
    return(
        <>
        <div className="d-flex justify-content-center align-content-center" id="notify">
            <div className="col-lg-6 text-white">
                <p className="fs-1 text-dark text-center">Notifications</p>
                <div className="bg-primary text-white hei mt-5 pt-3 rounded-1 fs-3 word"><p><FontAwesomeIcon icon={faCircleCheck} className="ms-5"></FontAwesomeIcon> Information Message</p></div>
                <div className="bg-success text-white hei mt-5 pt-3 rounded-1 fs-3 word"><p><FontAwesomeIcon icon={faCircleCheck} className="ms-5"></FontAwesomeIcon> Success Message</p></div>
                <div className="bg-warning text-white hei mt-5 pt-3 rounded-1 fs-3 word"><p><FontAwesomeIcon icon={faBell} className="ms-5"></FontAwesomeIcon> Warning Message</p></div>
                <div className="bg-danger text-white hei mt-5 pt-3 rounded-1 fs-3 word"><p><FontAwesomeIcon icon={faCircleExclamation} className="ms-5"></FontAwesomeIcon> Error Message</p></div>

            </div>
        </div>
        </>
    );
}