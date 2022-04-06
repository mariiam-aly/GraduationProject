import React, {useState,useEffect} from "react";
import { listData } from '../Utils/api'
import "../styles/Page2.css"
import logo from "../assets/Titlelogo.svg"
import { BsFillCircleFill } from "react-icons/bs";
import MainMission from "../Components/MainMission.js";
import MissionDetails from "../Components/MissionDetails";
function Page2() {

    const [missionId,setMissionId]= useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [tmp,setTmp]= useState([]);
    useEffect(async() => {
        await listData().then(response => {
          const test=response.data.data;
       
         setTmp(test);
         console.log(test);
       
        });
      },[])
    return (

        <div className="page2">

        {modalOpen && <MissionDetails setOpenModal={setModalOpen} id={missionId}/>}

            <div className="title2"> <img src={logo} />&nbsp;Mission Expenses Tracking</div>
            <div className="container px-4" >
                <div className="row  gy-5">
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs" style={{ backgroundColor: "#F8F7FF" }}> <div className="top" style={{ backgroundColor: "#F8F7FF" }}> <div style={{ textAlign: "left" }}>  <BsFillCircleFill color="rgba(11, 25, 99, 1)" className="icon" />To Do&nbsp;<div class="circle">13</div></div>   <hr className="hr1" />

                        </div>


                            <div className="p-3 row gy-4">
                            {tmp && tmp.map(data =>
                                <MainMission key={data.id} id={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} setOpenModal={setModalOpen} setMissionId={setMissionId}/>
                            )}
                            </div>

                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#FFF9EE" }}><div className="top" style={{ backgroundColor: "#FFF9EE" }}> <div style={{ textAlign: "left" }}><BsFillCircleFill color="rgba(255, 165, 0, 1)" className="icon" />In Progress&nbsp; <div class="circle2">24</div></div> <hr className="hr2" /></div><div className="p-3 row gy-4">
                         
                        {tmp && tmp.map(data =>
                            <MainMission key={data.id} id={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} setOpenModal={setModalOpen} setMissionId={setMissionId}/>
                        )}

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#F4FFF3" }}><div className="top" style={{ backgroundColor: "#F4FFF3" }}><div style={{ textAlign: "left" }}> <BsFillCircleFill color="rgba(139, 196, 138, 1)" className="icon" />Done&nbsp; <div class="circle3">3</div> </div><hr className="hr3" /></div><div className="p-3 row gy-4">

                        {tmp && tmp.map(data =>
                            <MainMission key={data.id} id={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} setOpenModal={setModalOpen} setMissionId={setMissionId}/>
                        )}
                      

                        </div></div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Page2;
