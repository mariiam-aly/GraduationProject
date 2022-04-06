import React, {useState,useEffect,useRef} from "react";
import "../styles/MissionDetails.css"
import AxiosProvider from "../AxiosProvider";
import { GoX } from "react-icons/go";
import mlogo from "../assets/miniLogo.svg"
import Pending from "../Components/State/Pending.js"
function MissionDetails(props) {

    const fUserRef = useRef();
    const lUserRef = useRef();
   
const [firstName,setFirstName]= useState();
const [lastName,setLastName]= useState();
    useEffect(async() => {
        await AxiosProvider.get(`/users/${props.id}`).then(response => {
          const toBeEdited=response.data.data.first_name;
          const toBeEdited2=response.data.data.last_name;
          setFirstName(toBeEdited);
          setLastName(toBeEdited2);
   
       
        });
      },[])

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
                      
          <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;Mission Requests</div>
<p className="general">General Meeting</p><div className="missionState"> <Pending/></div>
<p className="det">Wednesday, March 9st - @Cairo - @Maged Moustafa.</p>
          <form onSubmit={handleSubmit}>
          <div className="body">
         
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}  ref={fUserRef}></input>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}  ref={lUserRef}></input>
            
      
            </div>
          <div className="footer">
            <button
            onClick={() => {
                props.setOpenModal(false);
               }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button type="submit">Confirm</button>
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default MissionDetails;