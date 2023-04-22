import React from "react";
import java from './java.jpg'
import html from './Coursera HTML Phase-1.jpg'
import css from './Coursera CSS.jpg'
import meta1 from './Coursera Meta depth.jpg'
import meta2 from './Coursera Meta Front-End.jpg'
import found from './Coursera Foundation.jpg'
import mongo from './Coursera Mongodb CRUD operations.jpg'
export function Certificates(){
    return(
        <>
        <div className="container-fluid row   text-center">
          <h2><span className="fw-bold"> Achievements</span></h2>
        
        <div className="col-lg-2 col-3"></div>

        <div id="carouselExampleCaptions" class="col-lg-8 col-8 carousel slide align-item-center pt-5">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={java} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={html} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={css} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={meta1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={meta2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={found} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={mongo} class="d-block w-100" alt="..."/>
    </div>


  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div>
        <div classname="col-lg-2 col-2"></div>
    
        </>
    );
}