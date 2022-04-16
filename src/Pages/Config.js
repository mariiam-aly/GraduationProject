import"../styles/Config.css"

import logo from "../assets/Titlelogo.svg"
import { MdSecurity} from "react-icons/md";
import React from 'react'

import arrow from "../assets/Arrow.svg"
import arrowb from "../assets/Arrowb.svg"
import arrowr from "../assets/Arrowr.svg"
import arrowl from "../assets/Arrowl.svg"
import {Link} from "react-router-dom"
function Config(){


return(        <div className="page6">
<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">AevaPay Company</p> <button className="edit">Edit</button>
<p className="compType">Financial Services</p></div></div>
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
<td><p className="infoTitle2">AevaPay</p></td>
<td><p className="infoTitle2">Financial Services</p></td>
<td><p className="infoTitle2">Hello@aevapay.com</p></td>
<td><p className="infoTitle2">+201270224224</p></td>
<td><p className="infoTitle2">1</p></td>
<td><p className="infoTitle2">Egypt</p></td>
<td><p className="infoTitle2">250</p></td></tr></tbody>
</table>
</div>
<div style={{marginTop:'50px', marginBottom:"50px"}} className="container">
  <div className="row gy-5">
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className=" control"><div className="borderDecor"><div></div><img alt="" className="arrow"  src={arrow}/><p className="number ">250</p> <p className="category ">Employees</p></div></div>
 <div className="buttons">
      <button className="view">View</button>
 <Link to="/adduser"> <button className="add">Add Employee</button></Link> </div>
      </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor dep2"><div></div><img alt="" className="arrow"  src={arrowb}/><p className="number blue">25</p> <p className="category bl">Departments</p></div></div>
    <div className="buttons">
         <button className="view viewb">View</button>
         <Link to="/department"> <button className="add addb">Add Department</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor tit"><div></div><img alt="" className="arrow"  src={arrowr}/><p className="number red">50</p> <p className="category re">Job Titles</p></div></div>
    <div className="buttons">
         <button className="view viewr">View</button>
         <Link to="/jobtitle">  <button className="add addr">Add Title</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor shft"><div></div><img alt="" className="arrow"  src={arrowl}/><p className="number lilac">7</p> <p className="category lil">Shifts</p></div></div>
    <div className="buttons">
         <button className="view viewl">View</button>
         <Link to="/shift">   <button className="add addl">Add Shift</button></Link></div>
    </div>
  </div>
</div>
</div>);

}

export default Config;