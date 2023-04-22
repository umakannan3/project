import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
export function Customertable(){
    const[tabledata,setTabledata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3302/getdetails')
        .then(respond => respond.json())
        .then(result => setTabledata(result))
        console.log(tabledata);
    },[]);

    const deleteuser = (sno) => {
        var dataString = {sno:sno};
        var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3302/Delete',dataString,config)
        .then(function(res){
            if(res.data.status === 'error') {
                alert('error');
                window.location.reload();
            }
            else if (res.data.status === 'success'){
                alert('Successfully deleted the record');
                window.location.reload();
            }

        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        })
        

    }
    return(
        <>
            <div>
                <h1>Customer Details</h1>
                <Link to='/add'><button className="float-end bg-info rounded-3 p-2 fs-5 mb-5">Add Customers</button></Link>
                <table className="table text-center">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Country</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                        tabledata.map((value,index) => (

                        
                        <tr>
                            <td>{value.sno}</td>
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                            <td>{value.city}</td>
                            <td>{value.pincode}</td>
                            <td>{value.country}</td>
                            <td><Link to={"/view/"+value.sno}><FontAwesomeIcon icon={faEye} className="text-info ms-3"/></Link><Link to={"/edit/"+value.sno} ><FontAwesomeIcon icon={faCircleUser} className="text-warning ms-3"/></Link>
                            <FontAwesomeIcon icon={faTrashAlt} onClick={()=>{deleteuser(value.sno)}} className="text-danger ms-3"/></td>                      
                                  
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}