
import React, {useState,useEffect,useContext} from "react";

import { CompanyConfig } from '../Utils/api2';
import { AuthContext } from '../Context/auth';
import"../styles/Config.css"
import logo from "../assets/Titlelogo.svg"
import { MdSecurity} from "react-icons/md";
import arrow from "../assets/Arrow.svg"
import arrowb from "../assets/Arrowb.svg"
import arrowr from "../assets/Arrowr.svg"
import arrowl from "../assets/Arrowl.svg"
import arrowv from "../assets/Arrowv.svg"
import {Link} from "react-router-dom"
function Config(){
     const { user } = useContext(AuthContext);
     const [con,setConfig]= useState([]);
     useEffect(() => {
       
          CompanyConfig(user.token).then(response => {
            const test=response.data.data;
         
            setConfig(test);     
         console.log(response.data.data)
          });   
      
        },[])

return(        <div className="page6">
<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">{con.company_name}</p>  <Link to="/editconfig"> <button className="edit">Edit</button></Link>
<p className="compType">{con.specifity}</p></div></div>
<div className="generalInfo">
<MdSecurity style={{marginLeft:"22px"}} color="#0B1963"/>&nbsp;<p className="genText">General Information</p></div>
<div className="compInfo">
<table style={{width:"100%"}}>
<thead>
<tr>
<th><p className="infoTitle">Name</p></th>
<th><p className="infoTitle">specificity</p></th>
<th><p className="infoTitle">Company Email</p></th>
<th><p className="infoTitle">Company Phone</p></th>
<th><p className="infoTitle">Branches</p></th>
<th><p className="infoTitle">Country</p></th>
<th><p className="infoTitle">Total Employees</p></th></tr></thead>
<tbody>
<tr>
<td><p className="infoTitle2">{con.company_name}</p></td>
<td><p className="infoTitle2">{con.specifity}</p></td>
<td><p className="infoTitle2">{con.company_email}</p></td>
<td><p className="infoTitle2">{con.company_phone}</p></td>
<td><p className="infoTitle2">{con.branches}</p></td>
<td><p className="infoTitle2">{con.country}</p></td>
     <td><p className="infoTitle2">250</p></td></tr></tbody>
</table>
</div>
<div style={{marginTop:'50px', marginBottom:"50px"}} className="container">
  <div className="row gy-5">
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className=" control"><div className="borderDecor"><div></div><img alt="" className="arrow"  src={arrow}/><p className="number ">250</p> <p className="category ">Employees</p></div></div>
 <div className="buttons">
 <Link to="/page"> <button className="view">View</button></Link>
 <Link to="/adduser"> <button className="add addG">Add Employee</button></Link> </div>
      </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor dep2"><div></div><img alt="" className="arrow"  src={arrowb}/><p className="number blue">25</p> <p className="category bl">Departments</p></div></div>
    <div className="buttons">
    <Link to="/department"> <button className="view viewb">View</button></Link>
         <Link to="/department"> <button className="add addb">Add Department</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor tit"><div></div><img alt="" className="arrow"  src={arrowr}/><p className="number red">50</p> <p className="category re">Job Titles</p></div></div>
    <div className="buttons">
    <Link to="/jobtitle">    <button className="view viewr">View</button> </Link>
         <Link to="/jobtitle">  <button className="add addr">Add Title</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor shft"><div></div><img alt="" className="arrow"  src={arrowl}/><p className="number lilac">7</p> <p className="category lil">Shifts</p></div></div>
    <div className="buttons">
    <Link to="/shift">   <button className="view viewl">View</button> </Link>
         <Link to="/shift">   <button className="add addl">Add Shift</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor vccn"><div></div><img alt="" className="arrow"  src={arrowv}/><p className="number vccnB">7</p> <p className="category BVccn">Vacations</p></div></div>
    <div className="buttons">
         <button className="view viewV">View</button>
         <Link to="/shift">   <button className="add addV">Add Vacation</button></Link></div>
    </div>
  </div>
</div>
</div>);

}

export default Config;