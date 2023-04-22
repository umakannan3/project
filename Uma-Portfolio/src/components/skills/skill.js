import React from "react";
import img1 from './bootst.png'
import img2 from './corejava.png'
import img3 from './css.png'
import img4 from './expres.png'
import img5 from './html1.png'
import img6 from './js.png'
import img7 from './mongo.png'
import img8 from './msql.png'
import img9 from './nodejs.png'
import img10 from './react.png'
export function Skills(){
    return(
        <>
        <div className="background ">
        <h2 className="text-center p-3"><span className="fw-bold">My SkillSet</span></h2>
        <div className="container-fluid row class1 d-flex justify-content-center ms-1 pt-5 ">
        
           
            <div className="col-lg-2 logo rounded-5  text-center " id="skills">
                <p><img src={img5} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">HTML</p>
            </div>
            <div className="col-lg-2 logo rounded-5   text-center">
                <p><img src={img3} alt="" className="logo1  "/></p>
                <p className="text-danger fw-bold">CSS</p>
            </div>
            <div className="col-lg-2 logo    rounded-5  text-center">
                <p><img src={img1} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">Bootstrap</p>
            </div>
            <div className="col-lg-2 logo  rounded-5  text-center">
                <p><img src={img6} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">javascript</p>
            </div>
            <div className="col-lg-2 logo  rounded-5  text-center">
                <p><img src={img10} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">ReactJS</p>
            </div>
            </div>
        
            <div className="container-fluid row class1 mt-5 d-flex justify-content-center ms-1">
            <div className="col-lg-2 logo   rounded-5  text-center">
                <p><img src={img9} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">NodeJS</p>
            </div>
            
            <div className="col-lg-2 logo  rounded-5  text-center">
                <p><img src={img8} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">MySQL</p>
            </div>
            <div className="col-lg-2 logo  rounded-5  text-center">
                <p><img src={img7} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">MongoDB</p>
            </div>
            <div className="col-lg-2 logo  rounded-5  text-center">
                <p><img src ={img2} alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">Java</p>
            </div>
            <div className="col-lg-2 logo   rounded-5 text-center">
                <p><img src = "https://azpanel.azilen.com/uploads/everything_must_know_spring_boot_application_scratch_12_8c4e62d4fe.jpg" alt="" className="logo1"/></p>
                <p className="text-danger fw-bold">SpringBoot</p>
            </div>
            </div>
            
            
            
        
        </div>
        </>
    );
}