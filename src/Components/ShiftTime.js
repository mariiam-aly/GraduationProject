import"../styles/Shift.css"
import React, {useState} from 'react'

import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function ShiftTime(props){

function handleEdit(){
  props.setShiftId(props.id);
  props.setEdit(true);
}

return(     
    <div className="col-lg-6 line pad">
      <div className="time">
      <p className="timeT">{props.name}</p>
    <div > 
   
      <button onClick={handleEdit} style={{marginRight:"20px"}} className="biEdit"><BiEdit style={{color:"#0B1963"}}/></button><p className="biText">Edit</p>
      <button  className="biEdit bRed"><AiOutlineDelete style={{color:"#D43500"}}/></button><p className="biText2">Delete</p>
  </div>
      </div>
      
     <div>
     <div className="shiftTime">
     <p className="st-p1">Start Time:</p>
     <p className="st-p2">{props.start}</p>
     </div>
     <div className="shiftTime">
     <p className="st-p1">Mid Day:</p>
     <p className="st-p2">{props.mid}</p>
     </div>
     <div className="shiftTime">
     <p className="st-p1">End Time:</p>
     <p className="st-p2">{props.end}</p>
     </div>
    {/*} <div className="row ">
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Friday"): null}  className={editMode?"clock point clockH": "clock"}>time</div><p className="day">Friday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Saturday"): null}  className={editMode?"clock point clockH": "clock"}>time</div><p className="day">Saturday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Sunday"): null}  className={editMode?"clock point clockH": "clock"}>time</div><p className="day">Sunday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Monday"): null}  className={editMode?"clock point clockH": "clock"}>time</div><p className="day">Monday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Tuesday"): null}  className={editMode?"clock point clockH": "clock"}>time</div><p className="day">Tuesday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Wednesday"): null}  className={editMode?"clock point clockH": "clock"}>time</div><p className="day">Wednesday</p></div>
       <div className="col-4 cent"><div onClick={editMode?() => handleOpen("Thursday"): null}  className={editMode?"clock point clockH": "clock"}>time</div><p className="day">Thursday</p></div>

    
</div>*/}</div>
  

</div>);

}

export default ShiftTime;