import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


export function Editdetails() {
    let {sno}=useParams();

    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');
    const[pincode,setPincode]=useState('');
    const[country,setCountry]=useState('');
    
    useEffect(()=>{
        fetch("http://localhost:3302/edit/"+sno+'')
        .then(res=>res.json())
        .then((res)=>{
            setName(res[0].name);
            setAddress(res[0].address);
            setCity(res[0].city);
            setPincode(res[0].pincode);
            setCountry(res[0].country);
        })
    },[])

    const updates = async(event) => {
        event.preventDefault();
        var config={header:{"enctype":"multipart/form-data"}};

        await axios.put("http://localhost:3302/edited/"+sno+'',{name,address,city,pincode,country},config)
        .then((res)=>{
            if(res.data.status === "error"){
                alert("error");
                window.location.reload();
            }
            else if(res.data.status ==="success"){
                alert("updated");
                window.location.reload();
            }
        },[])
        .catch((error)=>{
            alert("API NOT Called")
        })

    }
    return (
    <>

                <div id="UpdateForm">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4 view text-center">
                                <h1 className="text-center py-5">Updatation Form</h1>
                                <div className="  land  " style={{ paddingLeft: '0' }}>
                                    <form onSubmit={updates}>
                                        <label className="w-25 p-3">Name</label>
                                        <input type="text" id="name" name="name" className="inputs p-2" value={name} onChange={(e)=> setName(e.target.value)} /><br/>
                                        <label className="w-25 p-3">Address</label>
                                        <input type="text" id="address" name="address" className="p-2" value={address} onChange={(e)=> setAddress(e.target.value)}  /><br/>
                                        <label className="w-25 p-3">City</label>
                                        <input type="text" id="city" name="city" className="p-2" value={city} onChange={(e)=> setCity(e.target.value)} /><br />
                                        <label className="w-25 p-3">Pincode</label>
                                        <input type="tel" id="pincode" name="pincode" className="p-2" value={pincode} onChange={(e)=>setPincode(e.target.value)} /><br/>
                                        <label className="w-25 p-3"> Country</label>    
                                        <input type="text" id="country" name="country" className="p-2" value={country} onChange={(e)=>setCountry(e.target.value)}  /><br/>
                                        <p className="pt-3"><input type="submit" value="UPDATE" className="btn btn-primary" /></p>
                                        <Link to='/'><input type="Button" value="CustomerTable" className="rounded-3 mt-2 mb-3 float-end fw-bold text-secondary" /></Link>
                                    </form>
                                    
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
                
        

    </>);
}