import"../styles/Department.css"
import React, {useState } from 'react'
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function Dep(){


return(       
    <div className="col-lg-6 remove">
 
      <div className="spc">
      <div className="dep ">
      <div>
      <input className="check" type="checkbox"/>
      <p  className="depName">Sales Department <br/><span className="depQuan">25 Departments</span></p>  </div>   
      <div> 
   
      <button style={{marginRight:"20px"}} className="biEdit"><BiEdit style={{color:"#0B1963"}}/></button><p className="biText">Edit</p>
      <button  className="biEdit bRed"><AiOutlineDelete style={{color:"#D43500"}}/></button>
      <p className="biText22">Delete</p>
  </div>
  
  </div>
  <div className="center">
  <hr className="hr"/>
  </div>
  </div>
 
  
</div>);

}

export default Dep;