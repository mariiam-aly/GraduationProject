import React from "react";
import "../styles/Requests.css"

function Requests(props) {
    
return(
    <div className="col-12">
    <div className=" request">
    <div className="arrange2">
    <div className="data">
    <img alt="profile" className="rprofile" src={props.image}/>
   
    <div>
    <p className="name">{props.name}</p>
  
    <p className="date">{props.date}</p></div></div>
  
    
    </div>
    
   </div>
  </div>
    
    );}


export default Requests;