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
    useEffect(() => {
        console.log(user.token);
        mission2({status: 'approved',class: 'mission'},user.token).then(response => {
          const test=response.data.data.data;
       
          setMissn1(test);     
       console.log(test);
        });   
        mission2({status: 'in-progress',class: 'mission'},user.token).then(response => {
            const test=response.data.data.data;
         
            setMissn2(test);     
         
          });  
          mission2({status: 'finished',class: 'mission'},user.token).then(response => {
            const test=response.data.data.data;
         
            setMissn3(test);     
         
          });  
         
          
      },[])


    return (

        <div className="page2">

        {modalOpen && <MissionDetails setOpenModal={setModalOpen} id={missionId} name={missionName} type={type}/>}

            <div className="title2"> <img alt="logo" src={logo} />&nbsp;Mission Expenses Tracking</div>
            <div className="container px-4" >
                <div className="row  gy-5">
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs" style={{ backgroundColor: "#F8F7FF" }}> <div className="top" style={{ backgroundColor: "#F8F7FF" }}> <div style={{ textAlign: "left" }}>  <BsFillCircleFill color="rgba(11, 25, 99, 1)" className="icon" />To Do&nbsp;<div className="circle">13</div></div>   <hr className="hr1" />

                        </div>
 

                            <div className="p-3 row gy-4">
                            {missn1 && missn1.map(data =>
                                <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost} id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                            )}
                            </div>

                        </div>
 
                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#FFF9EE" }}><div className="top" style={{ backgroundColor: "#FFF9EE" }}> <div style={{ textAlign: "left" }}><BsFillCircleFill color="rgba(255, 165, 0, 1)" className="icon" />In Progress&nbsp; <div className="circle2">24</div></div> <hr className="hr2" /></div><div className="p-3 row gy-4">
                         
                        {missn2 && missn2.map(data =>
                            <div>
                           
                            <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost}  id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status}  setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                      </div>
                  
                            )}

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#F4FFF3" }}><div className="top" style={{ backgroundColor: "#F4FFF3" }}><div style={{ textAlign: "left" }}> <BsFillCircleFill color="rgba(139, 196, 138, 1)" className="icon" />Done&nbsp; <div className="circle3">3</div> </div><hr className="hr3" /></div><div className="p-3 row gy-4">

                        {missn3 && missn3.map(data =>
                            <MainMission key={data.id} describe={data.requestable.description} price={data.requestable.initial_cost}  id={data.requestable_id} image={data.image} fName={data.name} date={data.start_date} status={data.request_status} setOpenModal={setModalOpen} setMissionId={setMissionId} setMissionName={setMissionName} setType={setType}/>
                        )}
                      

                        </div></div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Page2;
