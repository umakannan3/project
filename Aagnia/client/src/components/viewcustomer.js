import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function Viewcustomeretails() {
    const { sno } = useParams();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');



    useEffect(() => {
        fetch("http://localhost:3302/Viewcustomer/" + sno + "")
            .then(response => response.json())
            .then(function (res) {
                setName(res[0].name);
                setAddress(res[0].address);
                setCity(res[0].city);
                setPincode(res[0].pincode);
                setCountry(res[0].country);

            })

            .catch(function (error) {
                alert("errorrrrr");
                window.location.href = "/";
            })
    }, [])



    return (
        <>
            <div className=" container-fluid col-lg-4 view py-3 mt-5">
                <div className=" mt-5 py-5">
                <h3 className="text-center fw-bold fs-1 text-secondary text-dark mb-3">View Customer</h3>
                <form >
                    <input type="text" name="firstname" className="form-control bg-light text-dark fw-bold fs-5 mb-3" disabled  value={name} />
                    <input type="text" name="address" className="form-control bg-light  text-dark fw-bold fs-5  mb-3" disabled   value={address} />
                    <input type="text" name="city" className="form-control bg-light  text-dark fw-bold fs-5  mb-3" disabled   value={city} />
                    <input type="number" name="pincode" className="form-control bg-light  text-dark fw-bold fs-5  mb-3" disabled   value={pincode} />
                    <input type="text" name="country" className="form-control bg-light  text-dark fw-bold fs-5  mb-3" disabled   value={country} />
                </form>
                    <Link to='/'><input type="Button" value="CustomerTable" className="rounded-3 mt-2 mb-3 float-end fw-bold text-secondary" /></Link>
                </div>
            </div>
        </>
    );
}