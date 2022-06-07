import React from "react";
import "../styles/Mission.css"

function MainMission(props) {
  

  const handleShow= ()=>{
    
    props.setMissionId(props.id);
    props.setMissionName({name:props.fName, status:props.status, describe:props.describe,price:props.price});
    props.setOpenModal(true);
console.log( props.describe);
  }

return(
    <div className="col-12">
    <div className=" mission">
    <div className="arrange">
    <div className="data">
    <img alt="profile pic" className="profile" src={props.image}/>&nbsp;
   
    <div>
    <p className="name">{props.fName} {" "}{props.lName} </p>
  
    <p className="date">{props.date}</p></div></div>
  
    
    </div>
    <button onClick={() => handleShow()} className="show">Show Details</button> 
    
   </div>
  </div>
    
    );}


export default MainMission;