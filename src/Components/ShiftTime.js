import"../styles/Shift.css"
import React, {useState} from 'react'

import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function ShiftTime(props){
const[editMode,setEditMode]= useState(false);
function handleEdit(){
    setEditMode(true);
}
const handleOpen= (day)=>{
    props.setDay(day);
    props.setOpenModal(true);

  }
return(     
    <div className="col-lg-6 line pad">
      <div className="time">
      <p className="timeT">{props.name}</p>
      <div style= {editMode?{visibility:"hidden"}: null}> 
   
      <button onClick={handleEdit} style={{marginRight:"20px"}} className="biEdit"><BiEdit style={{color:"#0B1963"}}/></button><p className="biText">Edit</p>
      <button  className="biEdit bRed"><AiOutlineDelete style={{color:"#D43500"}}/></button><p className="biText2">Delete</p>
  </div>
      </div>
      
     <div>
     <div className="row ">
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Friday"): null}  className={editMode?"clock point": "clock"}>time</div><p className="day">Friday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Saturday"): null}  className={editMode?"clock point": "clock"}>time</div><p className="day">Saturday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Sunday"): null}  className={editMode?"clock point": "clock"}>time</div><p className="day">Sunday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Monday"): null}  className={editMode?"clock point": "clock"}>time</div><p className="day">Monday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Tuesday"): null}  className={editMode?"clock point": "clock"}>time</div><p className="day">Tuesday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Wednesday"): null}  className={editMode?"clock point": "clock"}>time</div><p className="day">Wednesday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Thursday"): null}  className={editMode?"clock point": "clock"}>time</div><p className="day">Thursday</p></div>

    
   </div></div>
  

</div>);

}

export default ShiftTime;