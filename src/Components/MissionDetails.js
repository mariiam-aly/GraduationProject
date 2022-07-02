import React, {useState,useEffect,useRef,useContext} from "react";
import { mission2,mission_Details,total,pay } from '../Utils/api2';
import { AuthContext } from '../Context/auth';
import "../styles/MissionDetails.css"
import AxiosProvider2 from "../AxiosProvider2";
import { GoX } from "react-icons/go";
import mlogo from "../assets/miniLogo.svg"
import Inprogress  from "../Components/State/InProgress.js"
import Approved from "../Components/State/Approved.js"
import Pending from "../Components/State/Pending.js"
import Canceled from "./State/Canceled";
import Done from "./State/Done";
function MissionDetails(props) {
  const { user } = useContext(AuthContext);
 
const [missnDetail,setMissnDetail]= useState();
const [tot,setTotal]= useState();
const [paid,setPaid]= useState();
const [loading,setLoading]= useState(true);
const [err,setErr]= useState(false);
    useEffect(() => {
      /*   AxiosProvider2.get(`/admin/${1}`).then(response => {
          
          setMissnDetail(response);
   console.log(response)*/
 
   mission_Details(props.id,user.token).then(response => {
    
    console.log(response.data.data.mission);   
    setPaid(response.data.data.mission.paid) 
    setMissnDetail(response.data.data.mission.mission_updates);
   });  
       
   total(props.id,user.token).then(response => {
    
    setTotal(response.data.data);    
   setLoading(false)
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
      
      else if (props.name.status==="finished") {
        Status = <Done/>;
      }
    
    else if (props.name.status==="canceled") {
      Status = <Canceled/>;
    }
       else {
         Status = <Approved/>;
       }
function handleAdd(){
  
  pay(props.id,user.token).then(response => {
    
    console.log(response);
    props.setOpenModal(false)
   }).catch(function (error) {
    console.log(error.message);

    setErr(true);
  });  ; 

}


    return (
      <>
      {loading?<p></p>:
      <div className="modalBackground2">
     
      {console.log(missnDetail)}
        <div style={props.name.status!=="in-progress"?{paddingRight:"0",height:"260px"}:{paddingRight:"0"}}  className="modalContainer2" >
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
<p className="inital">Initial Cost:{props.name.price}EGP </p>
<div style={{display:"flex",justifyContent:"space-between"}}>
{console.log(paid)}
{props.name.status==="finished"?<p style={{display:"inline-block"}} className="inital">Total Cost: {" "+ tot.total}EGP </p>:null}
{paid===false && props.name.status==="finished"?<button onClick={handleAdd} style={{marginRight:"1em",color:"#8FD817",background:"rgba(143, 216, 23, 0.2)"}} className="update">Add to salary</button>:null}</div>
{err==true?<p className="invalidSpan">This action must be done by an accountant</p>:null}
{console.log(err)}
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
      </div>}      </>
    );
  }
  
  export default MissionDetails;