import React from "react";
import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

export function Newmenu(){
    return(
        <>
        <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item pe-2">
          <Link to ='/home' class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item pe-2">
          <Link to = '/about' class="nav-link active">About</Link>
        </li>
        <li class="nav-item pe-2">
          <Link class="nav-link active">Certificates</Link>
        </li>
        <li class="nav-item pe-2">
          <Link class="nav-link active">Qualification</Link>
        </li>
        <li class="nav-item pe-2">
          <Link class="nav-link active">MyPortfolio</Link>
        </li>
        <li class="nav-item pe-2">
          <Link class="nav-link active">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </>
    );
}