import React from "react";
export function Register(){
    return(
        <>
        <form>
            <table>
                <tr>
                    <td><label>User ID</label></td>
                    <td><input type="text" id="uid"/></td>
                </tr>
                <tr>
                    <td><label>First Name</label></td>
                    <td><input type="text" id="fname"/></td>
                </tr>
                <tr>
                    <td><label>Last Name</label></td>
                    <td><input type="text" id="lname"/></td>
                </tr>
                <tr>
                    <td><label>Phone No</label></td>
                    <td><input type="number" id="pno"/></td>
                </tr>
                <tr>
                    <td><label>Email</label></td>
                    <td><input type="email" id="email"/></td>
                </tr>
                <tr>
                    <td><label>Gender</label></td>
                    <td><input type="radio" name="Male" value="Male" id="male"/></td>
                    <td><input type="radio" name="Female" value="female" id="female"/></td>
                </tr>
                <tr>
                    <td><label>DOB</label></td>
                    <td><input type="date" id="date"/></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type="password" id="pword"/></td>
                </tr>

            </table>
        </form>
        </>
    );
}