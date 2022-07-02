import"../styles/Department.css"
import React, { useState,useEffect } from 'react'
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function Dep(props){
  const [depName,setDepName]= useState(props.name);
  const [name,setName]= useState(props.name);
  const[editMode,setEditMode]= useState(false);
 
  function handleEdit(){ 
    setEditMode(true);
  
  }
  
 function handleChange(e){
  setDepName(e.target.value)
 }

 
const update= ()=>{
  setEditMode(false);
  setDepName(depName);
  setName(depName);
  props.edit(props.id,depName);
} 

const cancel= ()=>{
  setEditMode(false);
  setDepName(name);
 
}
return(       
    <div className="col-lg-6 remove">
   
    {editMode? <div className="spc">
    <div style={{marginBottom:"55px"}} className="dep ">
    <div>
    <label htmlFor="name"></label>
    <input className="depName nameEdit" type="text" name="name" value={depName} onChange={(e)=>handleChange(e)} />
    </div>   
    <div> 
    <button onClick={update} className="update">Update</button>
    <button onClick={cancel} className="cancel">Cancel</button>
   
</div>

</div>
<div className="center">
<hr className="hr"/>
</div>
</div>:
      <div className="spc"> 
      <div className="dep ">
      <div>

      <p  className="depName">{depName} <br/><span className="depQuan">25 Departments</span></p>  </div>   
      <div> 
   
      <button onClick={handleEdit}  style={{marginRight:"20px"}} className="biEdit"><BiEdit style={{color:"#0B1963"}} /></button><p className="biText">Edit</p>
      <button   onClick={()=>props.handleDel(props.id)} className="biEdit bRed"><AiOutlineDelete style={{color:"#D43500"}}/></button>
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