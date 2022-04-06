import"../styles/Department.css"

import logo from "../assets/Titlelogo.svg"

import React, {useState } from 'react'
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Dep from "../Components/Dep";
function Department(){


return(        <div className="page6">

<div className="contitle"><div className="contitle2"> <img src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">AevaPay Company</p> <button className="edit">Edit</button>
<p className="compType">Financial Services</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Department</p>
<button className="addShift">Add new Department</button>
</div>
<p className="count">0 Departments Selected</p>
<div style={{marginTop:"50px"}} className="container">
<div className="row g-2">
 <Dep/>
 <Dep/>
 <Dep/>
 <Dep/>
 <Dep/>
 <Dep/>
 <Dep/></div>
  </div>
</div>);

}

export default Department;