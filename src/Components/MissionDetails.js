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

function MissionDetails(props) {
  const { user } = useContext(AuthContext);
 
const [missnDetail,setMissnDetail]= useState();

    useEffect(() => {
      /*   AxiosProvider2.get(`/admin/${1}`).then(response => {
          
          setMissnDetail(response);
   console.log(response)*/

   mission_Details(props.id,user.token).then(response => {
    
    console.log(response.data.data.mission.mission_updates);    
    setMissnDetail(response.data.data.mission.mission_updates);
   });  
       
      },[props.id])

      async function handleSubmit(event) {
        props.setOpenModal(false);
       }

       var Status;
       if (props.name.status==="pending") {
         Status = <Pending/>;
       } 
       else if (props.name.status==="in-progress") {
         Status = <Inprogress/>;
       }
       else {
         Status = <Approved/>;
       }



    return (
      <div className="modalBackground2">
     
      {console.log(missnDetail)}
        <div style={{paddingRight:"0"}}  className="modalContainer2">
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
                      {console.log(props.name)}
          <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;{props.type} Request</div>
<p className="general">{props.name.name}. </p><div className="missionState">  {Status}</div>
<p className="missionName">{props.name.describe} </p>
<p className="inital">Initial Cost:{props.name.price} </p>
         
<div style={{overflow:"auto",height:"350px"}}>
{missnDetail && missnDetail.map((data,index) =>
          <div key={index} style={{textAlign:"center",marginTop:"2em"}}>
         

            <p className="mdDate">{data.date}</p>
      <div className="mdFees">
      <div>
 
      <p className="mdFees-p1">{data.description}</p>
      {data.approved_file?
    <a className="missionImage" href={ data.approved_file} target="_blank">Attached File</a>
    :null}
    </div>
      
      <p className="mdFees-p2">{data.extra_cost} EGP</p>
      </div>

            </div>)}
            </div>
        
        </div>
      </div>
    );
  }
  
  export default MissionDetails;