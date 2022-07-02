import"../styles/Dashboard.css"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import dp from "../assets/default-profile-icon-24.jpg"
import { mission2,cancel,approve,listData2,activeUser,birthdays } from '../Utils/api2';
import Approve from "../Components/Approve";
import PendingModal from "../Components/pendingModal";
import {Link,useHistory} from "react-router-dom"
import MainMission from "../Components/MainMission";
import MissionDetails from "../Components/MissionDetails";
import Chart from "react-apexcharts"
import {RiCake2Line} from "react-icons/ri";
function Dashboard(){
  let history = useHistory();
    const { user } = useContext(AuthContext);
    const [missn,setMissn]= useState([]);
    const [vcn,setVcn]= useState([]);
    const [wfh,setWfh]= useState([]);
    const [missnMsg,setMissnMsg]= useState(false);
    const [missn2Msg,setMissn2Msg]= useState(false);
    const [missn2,setMissn2]= useState(false);
    const [leave,setLeave]= useState([]);
    const [leaveMsg,setLeaveMsg]= useState(false);
    const [vcnMsg,setVcnMsg]= useState(false);
    const [wfhMsg,setWfhMsg]= useState(false);
    const [request,setRequest]= useState();
    const [activity,setActivity]= useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalData,setModalData]= useState();
    const [types,setType]= useState("Leave");
    const [birthday,setBirthdays]= useState([]);
    const [missionId,setMissionId]= useState("");
    const [missionName,setMissionName]= useState("");
    const [loading,setLoading]= useState(true);
const pie="pie"
useEffect(() => {
 
  const data=JSON.parse(localStorage.getItem("role"));
  console.log(data);
if(data==="Accountant"){
  
  history.push('/missions');
}

    mission2({status: 'pending',class:  'leave'},user.token).then(response => {
      const test=response.data.data.data;
   
      setMissn(test);     
  
   setMissnMsg(false);
    }).catch(function (error) {
  
      setMissn([]);  
      setMissnMsg(true);
    });   
   
      mission2({status: 'pending',class: 'wfh'},user.token).then(response => {
        const test=response.data.data.data;
        setWfhMsg(false);
        setWfh(test);     
     
      }).catch(function (error) {
       
        setWfh([]);  
        setWfhMsg(true);
      }); 
      mission2({status: 'in-progress',class: 'mission'},user.token).then(response => {
        const test=response.data.data.data;
        setMissn2Msg(false);
        setMissn2(test);     
     
      }).catch(function (error) {
     
        setMissn2([]);  
        setMissn2Msg(true);
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
const [users,setUsers]= useState([]);
useEffect(() => {
  const data=JSON.parse(localStorage.getItem("role"));
  console.log(data);
if(data==="Accountant"){
  
  history.push('/missions');
}
   listData2(user.token).then(response => {
    const test=response.data.data;
 
   setUsers(test);
   console.log(response);
  
 
  });
  activeUser(user.token).then(response => {
   
    console.log(response);
    setActivity(response.data.data)
    setLoading(false)
     })
     birthdays(user.token).then(response => {
      setBirthdays(response.data)
      console.log(response.data);
    
     
       })
},[])
   
return(    
  
  <>
  {loading?
    <div className="page6 dashboard">
    <p></p>
    </div>
    
    :
  
  <div className="page6 dashboard">

{modalOpen && <PendingModal setOpenModal={setModalOpen} modalData={modalData}/>}


{modalOpen2 && <MissionDetails setOpenModal={setModalOpen2} id={missionId} name={missionName} type="Mission"/>}

<div className="container overflow-hidden">
  <div style={{margin:"4em 0"}} className="row gy-4">
    <div className="col-lg-8 col-sm-12">
    <div>
    
    <div style={{height:"100%"}} className="  dbRequests ">
    <div className="dbRequests-top">
    <div>
    <p>Users Activity</p>
   
    </div></div> 
    <div className="main-div" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
  <div style={{display:"inline-block"}}>
    <Chart 
    
    type={"pie"}
    width={370}
    height={400}
    series={[activity.availableusers,activity.deactivatedusers,activity.readyusers]}
    options={{


noData:{text:"No Activity"},
labels:["Active","Deactivated","Ready"],

theme: {
  monochrome: {
    enabled: true,
    color: '#081878',
    shadeTo: 'light',
    shadeIntensity: 0.65
  }
},
dataLabels: {
  enabled: true,  },
  tooltip: {
    enabled: false,},
  
}}
    >
    
    
    </Chart>
    </div>
    <div style={{display:"inline-block"}}>
    
    <div className="birthdays">
    <p>Upcoming Birthdays:</p>
 <ul>
 {birthday && birthday.map((data,index) =>

  <li key={index}><RiCake2Line style={{ color: "#f47575"}}/>{" "+data.name + " : " + data.birthdate}</li>
  )}

{birthday.length==0?<p>No birthdays this month</p>:null}
 </ul>
   
    </div>
    
      </div></div>
      </div></div>
    </div>
    <div  className="col-lg-4 col-sm-6">
      <div style={{height:"16.25em",margin:"0"}} className="  dbRequests divs">
      
      
    <div className="dbRequests-top">
    <div>
    <p>Requests to approve</p>
    <p className="dbReqType">Leave Requests</p>
    </div>
    <Link to="/requests-approve"><button>Show All</button></Link>
    </div>
    <div className="row gy-4 p-3">
  {missnMsg?<p style={{marginTop:"4em"}}>Nothing to show</p>  :null}
    {missn && missn.map(data =>


      <Approve key={data.id} show={true} id={data.request_id}  image={data.image} name={data.name} date={data.start_date}  handleCancel={handleCancel} handleApprove={handleApprove} setModalOpen={setModalOpen} setModalData={setModalData} type="Leave" leave={data.requestable.leave_time}/>
 
        )}
    </div>

      
      
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div style={{height:"15em",margin:"0"}} class=" dbRequests divs">
      <div className="dbRequests-top">
  <div>
  <p>Currently Active Users</p>
 
  </div>
  <Link to="/Userlist"><button>Show All</button></Link>
  </div> 
  <div>
      {users && users.map(data =>
        
        data.status=="ready"?
        <div className="p-3 mission">  
        <div className="arrange">
        <div className="data">
        <img className="profile" alt=" " src={data.profile.image!==null &&data.profile.image!=="" ?data.profile.image:dp}/>&nbsp;
    
        <div>
        <p className="name">{data.name} </p>
   
        <p className="date">{data.profile.job_title.job_name} </p></div>
     
        </div>
      
        </div>
     
       </div>
:
null


      )}</div>
      {     !activity.readyusers?<p style={{marginTop:"4em"}}> No Ready Users</p>  :null}
      </div>
    </div>
    <div  className="col-lg-4 col-sm-6">
    <div style={{height:"15em",margin:"0"}} className="   dbRequests divs">
    
    
  <div className="dbRequests-top">
  <div>
  <p>Requests to approve</p>
  <p className="dbReqType">WFH Requests</p>
  </div>
 <Link to="/requests-approve"><button>Show All</button></Link> 
  </div>
  <div>
  <div className="row gy-4 p-3">
  {wfhMsg?<p style={{marginTop:"4em"}}>Nothing to show</p>  :null}
  {wfh && wfh.map(data =>
    <Approve show={false} key={data.id}  id={data.request_id}  image={data.image} name={data.name} date={data.start_date}  handleCancel={handleCancel} handleApprove={handleApprove}/>
  )}
  </div>
  </div>
    
    
    </div>
  </div>
  <div  className="col-lg-4 col-sm-6">
  <div style={{height:"15em",margin:"0"}} className="  dbRequests divs">
  
  
<div className="dbRequests-top">
<div>
<p>Missions In-progress</p>

</div>
<Link to="/requests"><button>Show All</button></Link>
</div>
<div className="row gy-4 p-3">
{missn2Msg?<p  style={{marginTop:"4em"}}>Nothing to show</p> :null}
{missn2 && missn2.map(data =>
    <div>
   
    <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost}  id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status}  setOpenModal={setModalOpen2} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
</div>

    )}
</div>

  
  
  </div>
</div>
  </div>
</div>

  </div>}
  </>
);

}

export default Dashboard;