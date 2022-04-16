import"../styles/AddUser.css"

import logo from "../assets/Titlelogo.svg"

import React, {useEffect,useState } from 'react'
import { listData } from '../Utils/api'
import { BsSun,BsMoonStars } from "react-icons/bs";

function AddUser(){
  const [tmp,setTmp]= useState([]);
  useEffect(() => {
     listData().then(response => {
      const test=response.data.data;
   
     setTmp(test);
     console.log(test);
   
    });
  },[])

return(        <div className="page5">
<div className="title"> <img alt="logo" src={logo} />&nbsp;Add New Employee</div>

<div className="container space">
<form>
<div className="row">
<div className="col-lg-6">
<label className='lbl' htmlFor="name">Name</label>
<input className='inpuser' type="text" name="name" placeholder="Username"/>

<label className='lbl' htmlFor="no">Phone Number</label>
<input className='inpuser' type="text" name="no" placeholder="Phone Number"/>
<label className='lbl' htmlFor="email">Email</label>
<input className='inpuser' type="email" name="email" placeholder="Name@Domail.com"/>

<div className=" overflow-hidden">
  <div className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="no">Department</label>
    <select id="cars" name="cars">
    {tmp && tmp.map(data =>
      <option key={data.id} value={data.first_name}>{data.first_name}</option>
  )}
  
  </select>
  <div className=" rel">
<button className="formAdd">Add new Department</button></div>
  </div>
   
    <div className="col-6 ">
    <label className='lbl' htmlFor="no">Job Title</label>
    <select id="cars" name="cars">
    {tmp && tmp.map(data =>
      <option key={data.id} value={data.first_name}>{data.first_name}</option>
  )}
  </select>
  <div className=" rel">
  <button className="formAdd">Add new Title</button></div>
  </div>
  
    <div style={{marginTop:"20px"}} className="col-6 ">
    <label className='lbl' htmlFor="no">Supervisor</label>
    <select id="cars" name="cars">
    {tmp && tmp.map(data =>
      <option key={data.id} value={data.first_name}>{data.first_name}</option>
  )}
  </select></div>

    <div style={{marginTop:"20px"}} className="col-6">
    <label className='lbl' htmlFor="no">Permission</label>
    <select id="cars" name="cars">
    {tmp && tmp.map(data =>
      <option key={data.id} value={data.first_name}>{data.first_name}</option>
  )}
  </select></div>
   
  </div>
</div>
</div>
<div className="col-lg-6">
<label className='lbl' htmlFor="bd">Birthdate</label>
<input  className='inpuser ' type="date" name="bd" placeholder="dd-mm-yyyy"/>
<div className=" overflow-hidden">
<p className="allowance">Allowance</p>
  <div className="row g-2">
    <div className="col-4">
   
<input className='inpuserA ' type="text" name="vacation" placeholder="30 Days"/>
<label className='lbl2' htmlFor="vacation">Vacation</label>
  </div>
   
    <div className="col-4">
    <input className='inpuserA ' type="text" name="pLeave" placeholder="15 Days"/>
    <label className='lbl2' htmlFor="pLeave">Medical Leave</label></div>
  
    <div className="col-4">
    <input className='inpuserA ' type="text" name="uLeave" placeholder="8 Days"/>
    <label className='lbl2' htmlFor="uLeave">Unpaid Leave</label></div>

   
  </div>
</div>
<div className=" overflow-hidden">
<p className="allowance">Shift</p>
  <div className="row g-2">
   
    <div className="col-6 ">
    <div className="rad ">
    <input  type="radio" id="shift1" name="shift"  />
    <label className='lblR' htmlFor="shift1"><BsMoonStars/>&nbsp;10AM - 4PM</label></div>
    </div>
    <div className="col-6 ">
    <div className="rad ">
    <input  type="radio" id="shift2" name="shift"/>
    <label className='lblR' htmlFor="shift2"><BsSun/>&nbsp;10AM - 4PM</label></div>
    </div>
    <div className="col-3 "></div>
    <div className="col-6 ">
   <button className="cShift">Custom Shift</button> </div>
    <div className="col-3 "></div>
  </div>
</div>

<div className=" overflow-hidden">
  <div  style={{marginTop:"19px"}} className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="bsalary">Basic Salary</label>
    <input className='inpuserS' type="text" name="bsalary" placeholder="EGP 1,500"/>
  </div>
   
    <div className="col-6">
    <label className='lbl' htmlFor="benefits">Benefits</label>
    <input className='inpuserS' type="text" name="benefits" placeholder="EGP 2,000"/></div>

   
  </div>
</div>
</div>
</div>
<div className="btns">
<button className="btn1">Cancel</button>
<button className="btn2">Add Employee</button>
</div>
</form>
</div>
</div>);

}

export default AddUser;