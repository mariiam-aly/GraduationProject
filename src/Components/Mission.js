import React,{useEffect,useState} from "react";
import "../styles/Mission.css"
import Inprogress  from "../Components/State/InProgress.js"
import Done from "../Components/State/Done.js"
import Pending from "../Components/State/Pending.js"
function Mission(props) {

  const handleShow= ()=>{
     
    props.setMissionId(props.id);
    props.setMissionName({name:props.name, status:props.status, describe:props.describe,price:props.price});
    props.setOpenModal(true);
    props.setType(props.type);
  }

  var Status;
  if (props.status==="pending") {
    Status = <Pending/>;
  } 
  else if (props.status==="in-progress") {
    Status = <Inprogress/>;
  }
  else {
    Status = <Done/>;
  }
return(
    <div className="col-12">
    <div className=" mission">
    <div className="arrange">
    <div className="data">
    <img alt="profile pic"  className="profile" src={props.image}/>&nbsp;
   
    <div>
    <p className="name">{props.name} </p>
  
    <p className="date">{props.date}</p></div></div>
  {props.show==""?Status:null}
  
    
    </div>
    <button  onClick={() => handleShow()} className="show">Show Details</button> 
    
   </div>
  </div>
    
    );}


export default Mission;