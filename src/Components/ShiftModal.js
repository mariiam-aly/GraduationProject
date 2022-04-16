import React, {useState} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";


function ShiftModal(props) {

const [check,setCheck]=useState(true);
      async function handleSubmit(event) {
        props.setOpenModal(false);
        
       }


    return (
      <div className="modalBackground2">
        <div className="modalContainer2">
          <div className="titleCloseBtn">
            <button className="cls2"
            onClick={() => {
               props.setOpenModal(false);
              
              }}
            >
              <GoX  color="#E80B0B"></GoX>
            </button>
          </div>
          <div className="cardTitleM">
                      
        {props.day}</div>
        <form onSubmit={handleSubmit}>
<div >
<p className="wd">Working day</p>
<label className="switch">
  <input type="checkbox" checked={check} onChange={() => {
    setCheck(check?false:true);
   }}/>
  <span className="slider round"></span>
</label>
</div>
         
          <div style={{visibility:check?"visible":"hidden"}} className="body2">
         <div style={{marginTop:"30px"}}>
          <label className="from" htmlFor="from">From</label>
          <input type="time" id="appt" name="from"/></div>
          <div style={{marginTop:"30px"}}>
          <label style={{marginRight:"15px"}} className="from" htmlFor="to">To</label>
          <input type="time" id="appt" name="to"/></div>
            </div>
          <div className="footer">
            <button type="submit" >
              Update
            </button>
           
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default ShiftModal;