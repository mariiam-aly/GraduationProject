import React from "react";
import "../styles/Mission.css"

function MainMission(props) {
  

  const handleShow= ()=>{
    
    props.setMissionId(props.id);
    props.setOpenModal(true);

  }

return(
    <div className="col-12">
    <div className=" mission">
    <div className="arrange">
    <div className="data">
    <img alt="profile pic" className="profile" src={props.image}/>&nbsp;
   
    <div>
    <p className="name">{props.fName} {" "}{props.lName} </p>
  
    <p className="date">Jan 12,2022.</p></div></div>
  
    
    </div>
    <button onClick={() => handleShow()} className="show">Show Details</button> 
    
   </div>
  </div>
    
    );}


export default MainMission;