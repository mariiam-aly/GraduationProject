import React, {useState,useEffect,useContext} from "react";
import { mission2,cancel,approve } from '../Utils/api2';
import { AuthContext } from '../Context/auth';
import "../styles/Page4.css"
import logo from "../assets/Titlelogo.svg"
import mlogo from "../assets/miniLogo.svg"
import Approve from "../Components/Approve.js"
import PendingModal from "../Components/pendingModal";
import {Link,useHistory,generatePath} from "react-router-dom"
function Page4() {
    const { user } = useContext(AuthContext);
    const [missn,setMissn]= useState([]);
    const [vcn,setVcn]= useState([]);
    const [wfh,setWfh]= useState([]);
    const [missnMsg,setMissnMsg]= useState(false);
    const [leave,setLeave]= useState([]);
    const [leaveMsg,setLeaveMsg]= useState(false);
    const [vcnMsg,setVcnMsg]= useState(false);
    const [wfhMsg,setWfhMsg]= useState(false);
    const [request,setRequest]= useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData,setModalData]= useState();
    let history = useHistory();
    useEffect(() => {
      const data=JSON.parse(localStorage.getItem("role"));
      console.log(data);
    if(data==="Accountant"){
      
      history.push('/missions');
    }

        console.log(user.token);
        console.log(localStorage.getItem("token"));
        mission2({status: 'pending',class: 'mission'},user.token).then(response => {
          const test=response.data.data.data;
       
          setMissn(test);     
       console.log(response);
       setMissnMsg(false);
        }).catch(function (error) {
          console.log(error.message);
          setMissn([]);  
          setMissnMsg(true);
        });   
        mission2({status: 'pending',class: 'vacation'},user.token).then(response => {
            const test=response.data.data.data;
            setVcnMsg(false);
            setVcn(test);     
            console.log(response);
          }).catch(function (error) {
            console.log(error.message);
            setVcn([]);  
            setVcnMsg(true);
          });  
          mission2({status: 'pending',class: 'wfh'},user.token).then(response => {
            const test=response.data.data.data;
            setWfhMsg(false);
            setWfh(test);     
            console.log(response);
          }).catch(function (error) {
            console.log(error.message);
            setWfh([]);  
            setWfhMsg(true);
          }); 
          mission2({status: 'pending',class: 'leave'},user.token).then(response => {
            const test=response.data.data.data;
           setLeaveMsg(false);
            setLeave(test);     
            console.log(response);
          }).catch(function (error) {
            console.log(error.message);
           setLeave([]);  
           setLeaveMsg(true);
          }); 
          
      },[request])


function handleCancel(id){
 
    cancel(id,   localStorage.getItem("token")).then(response => {
      console.log(response);  
      setRequest("cancel");
      });  
  

}
function handleApprove(id){
    approve(id,user.token).then(response => {
      console.log(response);  
      setRequest("approve");
      });  
  

}
 
    return (

        <div className="page3">
        {modalOpen && <PendingModal setOpenModal={setModalOpen} modalData={modalData}/>}
            <div className="title"> <img alt="logo" src={logo} />&nbsp;Requests To Approve</div>
            <div className="container px-4" >
                <div className="row  gy-5">
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs"> <div className="top4"> 
                       
                        <p className=" rnum">*{missn.length} Requests</p>
                       <div className="cardTitle4">
                      
                       <img alt="logo"  src={mlogo} style={{minHeight:"30px"}} />&nbsp;Mission Requests</div>
                       

                       </div> 


                            <div className="p-3 row gy-4">
                            <p>{missnMsg?"Nothing to show":null}</p>  
                            {missn && missn.map(data =>
                                <Approve key={data.id} setModalOpen={setModalOpen} id={data.request_id} image={data.image} name={data.name} date={data.start_date} price={data.requestable.initial_cost} description={data.requestable.description}  handleCancel={handleCancel} handleApprove={handleApprove} show={true} setModalData={setModalData} type="Mission"/>
                            )}
                            </div>

                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#D6E1FF" }}><div className="top4" style={{ backgroundColor: "#D6E1FF" }}> 
                        <p style={{color:"#153383"}} className=" rnum">*{vcn.length} Requests</p>
                        <div style={{background:"linear-gradient(256.88deg, #2850BC 24.97%, #03164B 159.02%)"}} className="cardTitle4">
                      
                       <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;Vacation Requests</div>
               
                       </div>
  <div className="p-3 row gy-4 ">

  <p>{vcnMsg?"Nothing to show":null}</p>             
  {vcn && vcn.map(data =>
    <Approve key={data.id} image={data.image}  id={data.request_id}  name={data.name} date={data.start_date} end={data.end_date}  handleCancel={handleCancel} handleApprove={handleApprove} show={false}/>
)}

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#EDF2FF" }}><div className="top4" style={{ backgroundColor: "#EDF2FF" }}> 
                        <p  style={{color:"#6182E0"}} className=" rnum">*{wfh.length} Requests</p>
                        <div style={{background: "linear-gradient(256.88deg, #6182E0 24.97%, #071A4F 159.02%)"}} className="cardTitle4">
                      
                       <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;WFH Requests</div>
                  </div>
                        <div className="p-3 row gy-4">
                        <p>{wfhMsg?"Nothing to show":null}</p>  
                        {wfh && wfh.map(data =>
                            <Approve show={false} key={data.id}  id={data.request_id}  image={data.image} name={data.name} date={data.start_date}  handleCancel={handleCancel} handleApprove={handleApprove}/>
                        )}
                       
                      

                        </div>
                        
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                    <div className=" divs" style={{ backgroundColor: "#EDF2FF" }}><div className="top4" style={{ backgroundColor: "#EDF2FF" }}> 
                    <p  style={{color:"#6182E0"}} className=" rnum">*{leave.length} Requests</p>
                    <div style={{background: "linear-gradient(256.88deg, #6182E0 24.97%, #071A4F 159.02%)"}} className="cardTitle4">
                  
                   <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;Leave Requests</div>
              </div>
                    <div className="p-3 row gy-4">
                    <p>{leaveMsg?"Nothing to show":null}</p> 
                    {leave && leave.map(data =>
                        <Approve key={data.id} show={true} id={data.request_id}  image={data.image} name={data.name} date={data.start_date}  handleCancel={handleCancel} handleApprove={handleApprove} setModalOpen={setModalOpen} setModalData={setModalData} type="Leave" leave={data.requestable.leave_time}/>
                    )}
                   
                  

                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>




    );
}

export default Page4;
