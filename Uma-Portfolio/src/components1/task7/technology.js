import pic from './ds.png'
import home1 from './home.jpg'
import React from "react";
import vr1 from './vr.jpg'
import ml1 from './ml.jpg'
export function Technology(){
    return(
        <>
        <div className="container-fluid row backcol" id='tech'>
          <div className='col-lg-2'></div>
          <div className='col-lg-8'>
            <div>
                <p className="fs-1 text-center fw-bold">Learn 4.0 technology</p>
                <p className="text-center">technology, the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human environment.
The subject of technology is treated in a number of articles. For general treatment</p>
            </div>
            <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 pb-5">
  <div className="col">
    <div className="card newcol1">
    
      <div className="card-body">
        <h5 className="card-title">Data Scientist</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p>
            <img src={pic} alt="no pic" className="new float-end"/>
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card newcol2">
     
      <div className="card-body">
        <h5 className="card-title">IOT developer</h5>
        <p className="card-text">IoT developers possess the skills of machine learning and big data management that helps them in making predictions based on the identification of data patterns.</p>
        <p>
            <img src={home1} alt="no pic"className="new float-end"/>
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card newcol3">
      
      <div className="card-body">
        <h5 className="card-title">VR developer</h5>
        <p className="card-text">A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, but an AR developer uses mobile apps to create</p>
        <p>
        <img src={vr1} alt="no pic"className="new float-end"/>
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card newcol4">
     
      <div className="card-body">
        <h5 className="card-title">ML Engineer</h5>
        <p className="card-text">A machine learning engineer (ML engineer) is a person in IT who focuses on researching, building and designing self-running artificial intelligence (AI) systems to automate predictive models.</p>
        <p>
        <img src={ml1} alt="no pic"className="new float-end"/>
        </p>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        </div>
        <div className='col-lg-2'></div>
        </>
    );
}