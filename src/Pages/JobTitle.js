import"../styles/Department.css"
import logo from "../assets/Titlelogo.svg"
import React, {useState } from 'react'
import { AiOutlineDelete,AiOutlineSearch } from "react-icons/ai";
import JobT from "../Components/JobT";
function Department(){
  const[addNew,setAddNew]= useState(false);
  const [newName,setNewName]= useState("");
  const[checkCount,setCheckCount]= useState(0);
  
function setCheck(no){
  setCheckCount(checkCount+no);
}
  
return(        <div className="page6">

<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">AevaPay Company</p> <button className="edit">Edit</button>
<p className="compType">Financial Services</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Job Titles</p>
<div className="end">
<button onClick={() => setAddNew(true)} className="addDep">Add new job title</button>
<div style={{position:"relative"}}>
<AiOutlineSearch className="srchI"/>
<input className="search" type="text" placeholder="Search Title"/></div>
</div>
</div>
<div className="delDiv">
<p className="count">{checkCount} Titles Selected</p>
<div>
<button  className="biEdit bRed delAll"><AiOutlineDelete style={{color:"#D43500"}}/></button>&nbsp;
<p className="delP">Delete All</p></div>
</div>
<div style={{marginTop:"50px"}} className="container">
{addNew?<div className="row g-2">
<div className="col-lg-6 remove">
 <div className="spc">
<div style={{marginBottom:"55px"}} className="dep ">
<div>
<label htmlFor="name"></label>
<input className="depName nameEdit" type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
</div>   
<div> 

<button className="update">Add</button>

</div>

</div>
<div className="center">
<hr className="hr"/>
</div>
</div> </div>  

<JobT name="Sales Representive" setCheck={setCheck}/>
<JobT name="Sales Representive" setCheck={setCheck}/>
<JobT name="Sales Representive" setCheck={setCheck}/>
<JobT name="Sales Representive" setCheck={setCheck}/>
<JobT name="Sales Representive" setCheck={setCheck}/> </div> :  
<div className="row g-2">
 <JobT name="Sales Representive" setCheck={setCheck}/>
 <JobT name="Sales Representive" setCheck={setCheck}/>
 <JobT name="Sales Representive" setCheck={setCheck}/>
 <JobT name="Sales Representive" setCheck={setCheck}/>
 <JobT name="Sales Representive" setCheck={setCheck}/>
 </div>
}
 </div>
  </div>

);

}

export default Department;