import"../styles/Config.css"

import logo from "../assets/Titlelogo.svg"
import { MdSecurity} from "react-icons/md";
import React, {useEffect,useState } from 'react'
import { listData } from '../Utils/api'
import arrow from "../assets/Arrow.svg"
import arrowb from "../assets/Arrowb.svg"
import arrowr from "../assets/Arrowr.svg"
import arrowl from "../assets/Arrowl.svg"
function Config(){
  const [tmp,setTmp]= useState([]);
  useEffect(async() => {
    await listData().then(response => {
      const test=response.data.data;
   
     setTmp(test);
     console.log(test);
   
    });
  },[])

return(        <div className="page6">
<div className="contitle"><div className="contitle2"> <img src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
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
    <div className="col-lg-3 col-md-4">
      <div className=" control"><div className="borderDecor"><div></div><img className="arrow"  src={arrow}/><p className="number ">250</p> <p className="category ">Employees</p></div></div>
 <div className="buttons">
      <button className="view">View</button>
 <a href="adduser"> <button className="add">Add Employee</button></a> </div>
      </div>
    <div className="col-lg-3 col-md-4">
    <div className=" control"><div className="borderDecor dep"><div></div><img className="arrow"  src={arrowb}/><p className="number blue">25</p> <p className="category bl">Departments</p></div></div>
    <div className="buttons">
         <button className="view viewb">View</button>
      <button className="add addb">Add Department</button></div>
    </div>
    <div className="col-lg-3 col-md-4">
    <div className=" control"><div className="borderDecor tit"><div></div><img className="arrow"  src={arrowr}/><p className="number red">50</p> <p className="category re">Job Titles</p></div></div>
    <div className="buttons">
         <button className="view viewr">View</button>
      <button className="add addr">Add Title</button></div>
    </div>
    <div className="col-lg-3 col-md-4">
    <div className=" control"><div className="borderDecor shft"><div></div><img className="arrow"  src={arrowl}/><p className="number lilac">7</p> <p className="category lil">Shifts</p></div></div>
    <div className="buttons">
         <button className="view viewl">View</button>
         <a href="shift">   <button className="add addl">Add Shift</button></a></div>
    </div>
  </div>
</div>
</div>);

}

export default Config;