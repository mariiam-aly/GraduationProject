import"../styles/Department.css"
import React, { useState } from 'react'
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function Dep(props){
  const [depName,setDepName]= useState("Sales Departmentd");
  const[editMode,setEditMode]= useState(false);
 
  function handleEdit(){ 
    setEditMode(true);}
  

 const handleCheck= (e)=>{
  const checked = e.target.checked;
  if(checked){
  props.setCheck(1);}
  else{
    props.setCheck(-1);
  }

}

return(       
    <div className="col-lg-6 remove">
    
    {editMode? <div className="spc">
    <div style={{marginBottom:"55px"}} className="dep ">
    <div>
    <label htmlFor="name"></label>
    <input className="depName nameEdit" type="text" name="name" value={depName} onChange={(e) => setDepName(e.target.value)} />
    </div>   
    <div> 
 
    <button className="update">Update</button>
   
</div>

</div>
<div className="center">
<hr className="hr"/>
</div>
</div>:
      <div className="spc">
      <div className="dep ">
      <div>
 
      <input onChange={(e) => {
        handleCheck(e)
    }} className="check" type="checkbox"/>
      <p  className="depName">{props.name} <br/><span className="depQuan">25 Departments</span></p>  </div>   
      <div> 
   
      <button onClick={handleEdit}  style={{marginRight:"20px"}} className="biEdit"><BiEdit style={{color:"#0B1963"}} /></button><p className="biText">Edit</p>
      <button  className="biEdit bRed"><AiOutlineDelete style={{color:"#D43500"}}/></button>
      <p className="biText22">Delete</p>
  </div>
  
  </div>
  <div className="center">
  <hr className="hr"/>
  </div>
  </div>
    }
  
</div>);

}

export default Dep;