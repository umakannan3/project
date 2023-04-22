import React from 'react'
import pro1 from '../projects/pro1.png'
import pro2 from '../projects/pro2.png'
import pro8 from '../projects/tech.png'
import pro4 from '../projects/pro4.png'
import pro5 from '../projects/pro5.png'
import pro6 from '../projects/pro6.png'
import pro7 from '../projects/pro7.png'
import { Link } from 'react-router-dom'
export function Projects(){
    return(
        <>
   <div className="d-flex align-items-center" id='projects'>
   <div className="">
      <div>   <h2 className="text-center"><span className='fw- bold'>Projects</span></h2>
     <div className=" container-fluid row ">
      
{/*      
      <Link to='/notify'><span className='' ><img src={pro2} alt="" className="imgcer"/></span></Link>
      <img src={pro6} alt="" className="imgcer"/>
      <img src={pro8} alt="" className="imgcer"/>
      <img src={pro7} alt="" className="imgcer"/>
      <img src={pro1} alt="" className="imgcer"/>
      <img src={pro5} alt="" className="imgcer"/> 
      <img src={pro4} alt="" className='imgcer'/> */}

   <div class="col-lg-4 ">
      <img src={pro1} class="card-img-top w-25" alt="..." className='container-fluid'/><br/>
        <Link to='/mango'> <input type='button' value="Click" className="ms-5 bg-primary mt-3 w-25 rounded-5"/></Link>
      </div>
      <div class="col-lg-4 ">
      <img src={pro4} class="card-img-top w-25" alt="..." className='container-fluid'/><br/>
        <Link to='/notify'> <input type='button' value="Click" className="ms-5 bg-primary mt-3 w-25 rounded-5"/></Link>
      </div>
      <div class="col-lg-4 ">
      <img src={pro2} class="card-img-top w-25" alt="..." className='container-fluid h-75 mt-3'/><br/>
     
        <Link to='/login'>  <input type='button' value="Click" className="ms-5  bg-primary mt-3  w-25 rounded-5"/></Link>
        
      </div>
      <div className=" container-fluid row ">
      <div class="col-lg-4 mt-5 ">
      <img src={pro8} class="card-img-top w-25" alt="..." className='container-fluid'/><br/>
        <Link to='/tech'> <input type='button' value="Click" className="ms-5 bg-primary mt-3 w-25 rounded-5"/></Link>
      </div>
      <div class="col-lg-4 mt-3 ">
      <img src={pro5} class="card-img-top w-25" alt="..." className='container-fluid'/><br/>
        <Link to='/super'> <input type='button' value="Click" className="ms-5 bg-primary mt-3 w-25 rounded-5"/></Link>
      </div>
      
      </div>
      </div>
      </div>
      </div>
      </div>




      </>);
}