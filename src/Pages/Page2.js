import React, {useState,useEffect,useContext} from "react";
import { mission2,mission_Details } from '../Utils/api2';
import "../styles/Page2.css";
import { AuthContext } from '../Context/auth';
import logo from "../assets/Titlelogo.svg";
import { BsFillCircleFill } from "react-icons/bs";
import MainMission from "../Components/MainMission.js";
import MissionDetails from "../Components/MissionDetails";
function Page2() {
    const { user } = useContext(AuthContext);
    const [missionId,setMissionId]= useState("");
    const [missionName,setMissionName]= useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [missn1,setMissn1]= useState([]);
    const [missn2,setMissn2]= useState([]);
    const [type,setType]= useState([]);
    const [missn3,setMissn3]= useState([]);
    const [missn4,setMissn4]= useState([]);
    const [missn5,setMissn5]= useState([]);
    const [missn1Msg,setMissn1Msg]= useState([]);
    const [missn2Msg,setMissn2Msg]= useState([]);
  
    const [missn3Msg,setMissn3Msg]= useState([]);
    const [missn4Msg,setMissn4Msg]= useState([]);
    const [missn5Msg,setMissn5Msg]= useState([]);
    useEffect(() => {
        console.log(user.token);
        mission2({status: 'approved',class: 'mission'},user.token).then(response => {
          const test=response.data.data.data;
        
          setMissn1(test);     
       console.log(test);
       setMissn1Msg(false);
        }).catch(function (error) {
            console.log(error.message);
            setMissn1([]);  
            setMissn1Msg(true);
          }); 
        mission2({status: 'in-progress',class: 'mission'},user.token).then(response => {
            const test=response.data.data.data;
            setMissn2Msg(false);
            setMissn2(test);     
         
          }).catch(function (error) {
            console.log(error.message);
            setMissn2([]);  
            setMissn2Msg(true);
          });  
          mission2({status: 'finished',class: 'mission'},user.token).then(response => {
            const test=response.data.data.data;
         
            setMissn3(test);     
            setMissn3Msg(false);
          }).catch(function (error) {
            console.log(error.message);
            setMissn3([]);  
            setMissn3Msg(true);
          });  
          
          mission2({status: 'canceled',class: 'mission'},user.token).then(response => {
            const test=response.data.data.data;
         
            setMissn4(test);     
            setMissn4Msg(false);
          }).catch(function (error) {
            console.log(error.message);
            setMissn4([]);  
            setMissn4Msg(true);
          });  
          mission2({status: 'pending',class: 'mission'},user.token).then(response => {
            const test=response.data.data.data;
         
            setMissn5(test);     
            setMissn5Msg(false);
          }).catch(function (error) {
            console.log(error.message);
            setMissn5([]);  
            setMissn5Msg(true);
          });  
          
      },[])


    return (

        <div className="page2"> 

        {modalOpen && <MissionDetails setOpenModal={setModalOpen} id={missionId} name={missionName} type={type}/>}

            <div className="title2"> <img alt="logo" src={logo} />&nbsp;Mission Expenses Tracking</div>
            <div className="container px-4" style={{marginBottom:"5em"}}>
                <div className="row  gy-5" >
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs" style={{ backgroundColor: "#F8F7FF" }}> <div className="top" style={{ backgroundColor: "#F8F7FF" }}> <div style={{ textAlign: "left" }}>  <BsFillCircleFill color= "#F8F7FF"  className="icon" />To Do&nbsp;<div className="circle">{missn1.length}</div></div>   <hr className="hr1"  />

                        </div>
 

                            <div className="p-3 row gy-4">
                            <p>{missn1Msg?"Nothing to show":null}</p> 
                            {missn1 && missn1.map(data =>
                                <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost} id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                            )}
                            </div>

                        </div>
  
                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#FFF9EE" }}><div className="top" style={{ backgroundColor: "#FFF9EE" }}> <div style={{ textAlign: "left" }}><BsFillCircleFill color="rgba(255, 165, 0, 1)" className="icon" />In Progress&nbsp; <div className="circle2">{missn2.length}</div></div> <hr className="hr2" /></div><div className="p-3 row gy-4">
                        <p>{missn2Msg?"Nothing to show":null}</p> 
                        {missn2 && missn2.map(data =>
                            <div>
                           
                            <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost}  id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status}  setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                      </div>
                  
                            )}

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#F4FFF3" }}><div className="top" style={{ backgroundColor: "#F4FFF3" }}><div style={{ textAlign: "left" }}> <BsFillCircleFill color="rgba(139, 196, 138, 1)" className="icon" />Done&nbsp; <div className="circle3">{missn3.length}</div> </div><hr className="hr3" /></div><div className="p-3 row gy-4">
                        <p>{missn3Msg?"Nothing to show":null}</p> 
                        {missn3 && missn3.map(data =>
                            <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost}  id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                        )}
                      

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs" style={{ backgroundColor: "#F8F7FF" }}> <div className="top" style={{ backgroundColor: "#F8F7FF" }}> <div style={{ textAlign: "left" }}>  <BsFillCircleFill color="rgba(11, 25, 99, 1)" className="icon" />Pending&nbsp;<div className="circle">{missn3.length}</div></div>   <hr className="hr1" />

                        </div>
 

                            <div className="p-3 row gy-4">
                            <p>{missn5Msg?"Nothing to show":null}</p> 
                            {missn5 && missn5.map(data =>
                                <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost} id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                            )}
                            </div>

                        </div>
 
                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs" style={{ backgroundColor: "#FFDEDE" }}> <div className="top" style={{ backgroundColor: "#FFDEDE" }}> <div style={{ textAlign: "left" }}>  <BsFillCircleFill color="#CF2121" className="icon" />Canceled&nbsp;<div className="circle" style={{background:"#cf212127",color:"#CF2121"}}>{missn4.length}</div></div>   <hr className="hr4" />

                        </div>
 

                            <div className="p-3 row gy-4">
                            <p>{missn4Msg?"Nothing to show":null}</p> 
                            {missn4 && missn4.map(data =>
                                <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost} id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                            )}
                            </div>

                        </div>
 
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Page2;
