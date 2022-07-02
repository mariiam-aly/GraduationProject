import React, {useState,useEffect,useRef,useContext} from "react";
import { mission2,mission_Details } from '../Utils/api2';
import { AuthContext } from '../Context/auth';
import "../styles/MissionDetails.css"
import AxiosProvider2 from "../AxiosProvider2";
import { GoX } from "react-icons/go";
import mlogo from "../assets/miniLogo.svg"
import Inprogress  from "../Components/State/InProgress.js"
import Approved from "../Components/State/Approved.js"
import Pending from "../Components/State/Pending.js"

function PendingModal(props) {
  const { user } = useContext(AuthContext);
 
const [missnDetail,setMissnDetail]= useState();

 

      async function handleSubmit(event) {
        props.setOpenModal(false);
       }

     



    return (
      <div className="modalBackground2">
     
 
        <div style={{paddingRight:"0",height:"200px"}}   className="modalContainer2">
          <div className="titleCloseBtn">
            <button className="cls2"
            onClick={() => {
               props.setOpenModal(false);
           
              }}
            >
              <GoX  color="#E80B0B"></GoX>
            </button>
          </div>
          <div style={{background:"linear-gradient(256.88deg, #D73434 24.97%, #820000 159.02%)"}} className="cardTitleM">
                  
          <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;{props.modalData.type} Request</div>
<p className="general">{props.modalData.name}. </p>
{props.modalData.price?
    <div>
<p className="missionName">{props.modalData.description} </p>
<p className="inital">Initial Cost:{" "+props.modalData.price} </p></div>: <p className="inital">Leave time:{" "+props.modalData.leave} </p>}
         
        
        </div>
      </div>
    );
  }
  
  export default PendingModal;