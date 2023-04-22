import React from "react"; 
import {Link} from 'react-router-dom'
export function Menu(){
    return(
        <>
        {/* <div className=" bg-dark ">
            <ul className="nav ">
                <li className="text-danger">Moodle Exercises</li>
                <Link to = '/a'><li className="text-white ms-3">Hello</li></Link>
                <Link to = '/congrates'><li className="text-white ms-3">Greeting</li></Link>
                <Link to = '/super'><li className="text-white ms-3">Super Over League</li></Link>
                <Link to = '/button'><li className="text-white ms-3">Social buttons</li></Link>
                <Link to = '/notify'><li className="text-white ms-3">Notification</li></Link>
                <Link to = '/login'><li className="text-white ms-3">Login</li></Link>
                <Link to = '/technology'><li className="text-white ms-3">Technology</li></Link>
                <Link to = '/count'><li className="text-white ms-3">Counter</li></Link>
            </ul>

        </div> */}
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-info">
            <div class="container-fluid">
            <Link class="navbar-brand" href="#">Moodle Assessment</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><Link to='/home1'class="nav-link active" aria-current="page">Hello</Link></li>
        <li class="nav-item"><Link to='/congrates'class="nav-link active">Greeting</Link></li>
        <li class="nav-item"><Link to='/super' class="nav-link active" >Super Over League</Link></li>
        <li class="nav-item"><Link to='/button' class="nav-link active">Social Buttons</Link></li>
        <li class="nav-item"><Link to='/notify' class="nav-link active">Notification</Link></li>
        <li class="nav-item"><Link to='/login' class="nav-link active">Login Form</Link></li>
        <li class="nav-item"><Link to='/technology' class="nav-link active">Technology</Link></li>
        <li class="nav-item"><Link to='/count' class="nav-link active">Counter</Link></li>
        <li class="nav-item"><Link to='/Mango' class="nav-link active">Mango&Banana</Link></li>
        <li class="nav-item"><Link to='/feed' class="nav-link active">Feedback</Link></li>
        <li class="nav-item"><Link to='/date' class="nav-link active">Date</Link></li>


      </ul>
    </div>
  </div>
</nav>
        </>
    );
}