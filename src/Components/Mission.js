import React,{useEffect,useState} from "react";
import dp from "../assets/default-profile-icon-24.jpg"
import "../styles/Mission.css"
import Inprogress  from "../Components/State/InProgress.js"
import Done from "../Components/State/Done.js"
import Pending from "../Components/State/Pending.js"
import Approved from "./State/Approved";
import Canceled from "./State/Canceled";
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
  else if (props.status==="canceled") {
    Status = <Canceled/>;
  }
  else if (props.status==="approved") {
    Status = <Approved/>;
  }
  else {
    Status = <Done/>;
  }
return(
    <div className="col-12">
    <div className=" mission">
    <div className="arrange">
    <div className="data">
    <img alt="profile pic"  className="profile"  src={props.image!==null && props.image!==" "?props.image:dp}/>&nbsp;
   
    <div>
    <p className="name">{props.name} </p>
  
    <p className="date">{props.date}  <br/> {props.end? "to"+" "+ props.end:null}</p></div></div>
  {props.show==""?Status:null}
  
    
    </div>{props.modal?
    <button  onClick={() => handleShow()} className="show">Show Details</button> 
    :null}
   </div>
  </div>
    
    );}


export default Mission;