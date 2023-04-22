import React from "react";

export function Greeting(){
    return(
        <>
        <div class="backgro">
        <h1 class="text-center">Congratulations</h1>
        <div class="container-fluid row ">
            <div class="col-lg-4"></div>
            <div className="d-flex justify-content-center">
            <div class="col-lg-4 sizes color mt-5 ">
                <div className="text-center mt-5 d-flex justify-content-center">
                <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="no pic" className="  "/>
                </div>
                <div class="center pb-5 p-4">
                    <h1 >Kiran V</h1>
                    <p>Vishnu Institute of Computer Education and Technology</p>
                    <p>Bhimavaram</p>
                    <img src="  https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="no pic"/>
                </div>
            </div>
            </div>
            <div class="col-lg-4"></div>
        </div>
        </div>
        </>
    );
    

}


// return(
//     <>
//     <div class="back">
//         <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="no pic"  class="image">
//         <p>Vishnu Institute Computer Education and of Technology</p> 
//         <p>Bhimavaram</p>  

//     </div>
//     </>
// )