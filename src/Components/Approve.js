import React from "react";
import "../styles/Approve.css"

import { FaCheck } from "react-icons/fa";
import { GoX } from "react-icons/go";
function Approve(props) {
    
return(
    <div className="col-12">
    <div className=" mission">
    <div className="arrange">
    <div className="data">
    <img className="profile" alt=" " src={props.image}/>&nbsp;
   
    <div>
    <p className="name">{props.name} </p>
  
    <p className="date">{props.date}</p></div></div>
    <div>
     <button onClick={()=>props.handleApprove(props.id)} className="approve"><FaCheck style={{color:"#8FD817"}}/></button> &nbsp;&nbsp;
    <button onClick={()=>props.handleCancel(props.id)} className="decline"><GoX style={{color:"#D43500"}}/></button>
   
    </div>
    </div>
    <button className="show">Show Details</button> 
    
   </div>
  </div>
    
    );}


export default Approve;