import React from "react";
import "../styles/Approve.css"
import dp from "../assets/default-profile-icon-24.jpg"
import { FaCheck } from "react-icons/fa";
import { GoX } from "react-icons/go";
function Approve(props) {

  function handleShow(){
    props.setModalOpen(true);
    props.setModalData(
      props.price?
      {
price:props.price,
description:props.description,
name: props.name,
type: props.type

      }:{
        name: props.name,
        leave: props.leave,
        type: props.type

      }

    );
  }
    
return(
    <div className="col-12">
    <div className=" mission">
    <div className="arrange">
    <div className="data">
    <img className="profile" alt=" " src={props.image!==null && props.image!==" "?props.image:dp}/>&nbsp;
   
    <div>
    <p className="name">{props.name} </p>
  
    <p className="date">{props.date} <br/> {props.end? "to"+" "+ props.end:null}</p></div></div>
    <div>
     <button onClick={()=>props.handleApprove(props.id)} className="approve"><FaCheck style={{color:"#8FD817"}}/></button> &nbsp;&nbsp;
    <button onClick={()=>props.handleCancel(props.id)} className="decline"><GoX style={{color:"#D43500"}}/></button>
   
    </div>
    </div>
    {props.show?
    <button onClick={handleShow} className="show">Show Details</button> :null} 
    
   </div>
  </div>
    
    );}


export default Approve;