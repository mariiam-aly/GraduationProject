import React from "react";
import "../styles/Mission.css"
import Done from "../Components/State/Done.js"
import Pending from "../Components/State/Pending.js"
import InProgress from "../Components/State/InProgress.js"
function Mission(props) {
    
return(
    <div className="col-12">
    <div className=" mission">
    <div className="arrange">
    <div className="data">
    <img  className="profile" src={props.image}/>&nbsp;
   
    <div>
    <p className="name">{props.fName} {" "}{props.lName} </p>
  
    <p className="date">Jan 12,2022.</p></div></div>
    <InProgress/>
    
    </div>
    <button className="show">Show Details</button> 
    
   </div>
  </div>
    
    );}


export default Mission;