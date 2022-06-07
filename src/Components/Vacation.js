import"../styles/Shift.css"
import React, {useState} from 'react'

import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function Vacation(props){

function handleEdit(){
  props.setShiftId(props.id);
  props.setEdit(true);
}

return(     
    <div className="col-lg-6 line pad">
      <div className="time">
      <div>
      <p style={{display:"inline"}} className="timeT">{props.name}</p>
      <button style={{display:"inline"}} onClick={()=>props.setModalOpen(true)} className="addShift">Add</button></div>
    <div > 
   
      <button onClick={handleEdit} style={{marginRight:"20px"}} className="biEdit"><BiEdit style={{color:"#0B1963"}}/></button><p className="biText">Edit</p>
      <button  className="biEdit bRed"><AiOutlineDelete style={{color:"#D43500"}}/></button><p className="biText2">Delete</p>
  </div>
      </div>
      
     <div>
     <div className="shiftTime">
     <p className="st-p1">Eid:</p>
     <p className="st-p2">829/129/123</p>
     </div>
     <div className="shiftTime">
     <p className="st-p1">Mid Day:</p>
     <p className="st-p2">829/129/123</p>
     </div>
  
  </div>
  

</div>);

}

export default Vacation;