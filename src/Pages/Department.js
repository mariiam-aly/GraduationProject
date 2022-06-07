import"../styles/Department.css"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { departments,delete_departments,Departments_Edit,Departments_Create } from '../Utils/api2';
import logo from "../assets/Titlelogo.svg"
import { AiOutlineDelete,AiOutlineSearch } from "react-icons/ai";
import Dep from "../Components/Dep";

function Department(){
  const[addNew,setAddNew]= useState(false);
  const[depart,setDepart]= useState(false);
  const [newName,setNewName]= useState("");
  const[checkCount,setCheckCount]= useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    departments(user.token).then(response => {
      const test=response.data.data;
      setDepart(test);
     console.log(response);
   
    });
   
  },[addNew])
  function handleDelete(id){
    delete_departments(id,user.token).then(response => {
      const test=response.data.data;
   
     console.log(response);
   
    });
  
  }

function setCheck(no){
  setCheckCount(checkCount+no);
}

function Create_dep(){
  console.log("click");
  Departments_Create(newName,user.token).then(response => {
  
   console.log(response);
   setNewName("");
   setAddNew(false);

  });
}

function handleEdit(id,name){
  Departments_Edit(id,name,user.token).then(response => {
    const test=response.data.data;
 
   console.log(response);
   
  });}
  
return(        <div className="page6">

<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">AevaPay Company</p> 
<p className="compType">Financial Services</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Departments</p>
<div className="end">
<button onClick={() => setAddNew(true)} className="addDep">Add new Department</button>
<div style={{position:"relative"}}>
<AiOutlineSearch className="srchI"/>
<input className="search" type="text" placeholder="Search Department"/></div>
</div>
</div>
<div className="delDiv">
<p className="count">{checkCount} Departments Selected</p>
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

<button onClick={Create_dep} className="update">Add</button>
<button onClick={()=>setAddNew(false)} className="cancel">Cancel</button>

</div>

</div>
<div className="center">
<hr className="hr"/>
</div>
</div> </div>  
{depart && depart.map((data,index) =>
  <Dep handleDel={handleDelete} edit={handleEdit}  index={index} key={data.id} name={data.name} setCheck={setCheck} id={data.id}/>)}
 </div> :  
<div className="row g-2">
{depart && depart.map((data,index) =>
  <Dep handleDel={handleDelete} edit={handleEdit}  index={index} name={data.name} setCheck={setCheck}  id={data.id}/>)}
 </div>
}
 </div>
  </div>

);

}

export default Department;