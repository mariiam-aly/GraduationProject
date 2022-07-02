import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { Request, wfh_all, vacation_all } from '../Utils/api2';
import "../styles/Page3.css"
import logo from "../assets/Titlelogo.svg"
import mlogo from "../assets/miniLogo.svg"
import {Link,useHistory,generatePath} from "react-router-dom"
import Mission from "../Components/Mission.js"
import MissionDetails from "../Components/MissionDetails";
import Requests from "../Components/Requests.js"
function Page3() {
    const { user } = useContext(AuthContext);
    const [missionId,setMissionId]= useState("");
    const [missionName,setMissionName]= useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [missn,setMissn]= useState([]);
    const [wfh,setWfh]= useState([]);
    const [vcn,setVcn]= useState([]);
    const [type,setType]= useState();
    const [missnStat,setMissnStat]= useState({status: '',class: 'mission'});
    const [wfhStat,setWfhStat]= useState({status: '',class: 'wfh'});
    const [vcnStat,setVcnStat]= useState({status: '',class: 'vacation'});
    const [missnMsg,setMissnMsg]= useState(false);
    const [vcnMsg,setVcnMsg]= useState(false);
    const [wfhMsg,setWfhMsg]= useState(false);
    let history = useHistory();
    useEffect(() => {
        const data=JSON.parse(localStorage.getItem("role"));
        console.log(data);
      if(data==="Accountant"){
        
        history.push('/missions');
      }
        console.log(user.token);
        console.log(localStorage.getItem("token"));
        Request(missnStat,user.token).then(response => {
          const test=response.data.data.data;
       
          setMissn(test);
         console.log(test);
         setMissnMsg(false);
        }).catch(function (error) {
            console.log(error.message);
            setMissn([]);  
            setMissnMsg(true);
          });
       
      },[missnStat])
      useEffect(() => {
     
        Request(wfhStat,user.token).then(response => {
            const test=response.data.data.data;
         
            setWfh(test);
            setWfhMsg(false);
         
          }).catch(function (error) {
            console.log(error.message);
            setWfh([]);  
            setWfhMsg(true);
          });
    
      },[wfhStat])
      useEffect(() => {
    
        Request(vcnStat,user.token).then(response => {
            const test=response.data.data.data;
         
            setVcn(test);
            console.log(test)
            setVcnMsg(false);
         
          }).catch(function (error) {
            console.log(error.message);
            setVcn([]);  
            setVcnMsg(true);
          });
      },[vcnStat])
    return (

        <div className="page3">
        {modalOpen && <MissionDetails setOpenModal={setModalOpen} id={missionId} name={missionName} type={type}/>}
            <div className="title"> <img alt="logo" src={logo} />&nbsp;All Requests</div>
            <div className="container px-4" >
                <div className="row  gy-5">
                    <div className=" col-lg-6 ">
                        <div className=" divs"> <div className="top"> 
                       <div className="cardTitle">
                      
                       <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;Mission Requests</div>
                       <div className=" navbar mnav">
  
    <p className="status"  >Status:</p>
    <div className="d-flex">
   <p onClick={()=>setMissnStat({status: '',class: 'mission'})} className={missnStat.status==""?"ap3 active":"ap3 "}>All</p>
   <p  onClick={()=>setMissnStat({status: 'pending',class: 'mission'})} className={missnStat.status=="pending"?"ap3 active":"ap3 "}>Pending</p>
   <p onClick={()=>setMissnStat({status: 'approved',class: 'mission'})} className={missnStat.status=="approved"?"ap3 active":"ap3 "}>Approved</p>

   <p  onClick={()=>setMissnStat({status: 'in-progress',class: 'mission'})} className={missnStat.status=="in-progress"?"ap3 active":"ap3 "}>In Progress</p>
   <p onClick={()=>setMissnStat({status: 'finished',class: 'mission'})} className={missnStat.status=="finished"?"ap3 active":"ap3 "}>Done</p>
   <p onClick={()=>setMissnStat({status: 'canceled',class: 'mission'})} className={missnStat.status=="canceled"?"ap3 active":"ap3 "}>Canceled</p>

   </div>
  </div> 

                       </div>


                            <div className="p-3 row gy-4">
                            <p>{missnMsg?"Nothing to show":null}</p> 
                            {missn && missn.map(data =>
                                <Mission key={data.id} id={data.requestable_id} describe={data.requestable.description} price={data.requestable.initial_cost} image={data.image} fName={data.name} date={data.start_date} status={data.request_status}   name={data.name} show={missnStat.status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} type="Mission" setType={setType} modal={true}/>
                            )}
                           
                            </div>

                        </div>

                    </div>
                    <div className=" col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#D6E1FF" }}><div className="top" style={{ backgroundColor: "#D6E1FF" }}>
                        <div style={{background:"linear-gradient(256.88deg, #2850BC 24.97%, #03164B 159.02%)"}} className="cardTitle">
                      
                       <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;Vacation Requests</div>
                       <div className=" navbar mnav">
  
    <p className="status" style={{color:"rgba(21, 51, 132, 1)"}} >Status:</p>
    <div className="d-flex">
    <p onClick={()=>setVcnStat({status: '',class: 'vacation'})} className={vcnStat.status==""?"ap32 ap3 active2":"ap32 ap3 "}>All</p>
    <p  onClick={()=>setVcnStat({status: 'pending',class: 'vacation'})} className={vcnStat.status=="pending"?"ap32 ap3 active2":"ap32 ap3 "}>Pending</p>
    <p  onClick={()=>setVcnStat({status: 'approved',class: 'vacation'})} className={vcnStat.status=="approved"?"ap32 ap3 active2":"ap32 ap3 "}>Approved</p>

    <p  onClick={()=>setVcnStat({status: 'in-progress',class: 'vacation'})} className={vcnStat.status=="in-progress"?"ap32 ap3 active2":"ap32 ap3 "}>In Progress</p>
    <p onClick={()=>setVcnStat({status: 'finished',class: 'vacation'})} className={vcnStat.status=="finished"?"ap32 ap3 active2":"ap32 ap3 "}>Done</p>
    <p  onClick={()=>setVcnStat({status: 'canceled',class: 'vacation'})} className={vcnStat.status=="canceled"?"ap32 ap3 active2":"ap32 ap3 "}>Canceled</p>

  
   </div>
   
  </div></div> 
  <div className="p-3 row gy-4 ">
  <p>{vcnMsg?"Nothing to show":null}</p>                
  {vcn && vcn.map(data =>
    
    <Mission key={data.id} image={data.image} id={data.requestable_id} name={data.name} date={data.start_date} end={data.end_date} status={data.request_status} show={vcnStat.status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName}  setType={setType} modal={false}/>
    )}

                        </div></div>
                    </div>
                    <div className="col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#EDF2FF" }}><div className="top" style={{ backgroundColor: "#EDF2FF" }}>
                        <div style={{background: "linear-gradient(256.88deg, #6182E0 24.97%, #071A4F 159.02%)"}} className="cardTitle">
                      
                       <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;WFH Requests</div>
                       <div className=" navbar mnav">
  
    <p className="status" style={{color:"rgba(21, 51, 132, 1)"}} >Status:</p>
    <div className="d-flex">
    <p onClick={()=>setWfhStat({status: '',class: 'wfh'})} className={wfhStat.status==""?"ap32 ap3 active2":"ap32 ap3 "}>All</p>
    <p  onClick={()=>setWfhStat({status: 'pending',class: 'wfh'})} className={wfhStat.status=="pending"?"ap32 ap3 active2":"ap32 ap3 "}>Pending</p>
    <p onClick={()=>setWfhStat({status: 'approved',class: 'wfh'})} className={wfhStat.status=="approved"?"ap32 ap3 active2":"ap32 ap3 "}>Approved</p>
    <p  onClick={()=>setWfhStat({status: 'in-progress',class: 'wfh'})} className={wfhStat.status=="in-progress"?"ap32 ap3 active2":"ap32 ap3 "}>In Progress</p>
    <p onClick={()=>setWfhStat({status: 'finished',class: 'wfh'})} className={wfhStat.status=="finished"?"ap32 ap3 active2":"ap32 ap3 "}>Done</p>
    <p onClick={()=>setWfhStat({status: 'canceled',class: 'wfh'})} className={wfhStat.status=="canceled"?"ap32 ap3 active2":"ap32 ap3 "}>Canceled</p>

  
   </div>
   
  </div></div>
                        <div className="p-3 row gy-4">
                        <p>{wfhMsg?"Nothing to show":null}</p> 
                        {wfh && wfh.map(data =>
                            <Mission key={data.id} id={data.requestable_id} image={data.image} name={data.name} date={data.start_date} status={data.request_status} show={wfhStat.status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} type="WFH" setType={setType}  modal={false}/>
                            )}
                       
                      

                        </div></div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Page3;
