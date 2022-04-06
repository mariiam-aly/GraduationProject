import React, {useState,useEffect} from "react";
import { listData } from '../Utils/api'
import "../styles/Page3.css"
import logo from "../assets/Titlelogo.svg"
import mlogo from "../assets/miniLogo.svg"
import { BsFillCircleFill } from "react-icons/bs";
import Mission from "../Components/Mission.js"
import Requests from "../Components/Requests.js"
function Page3() {

    const [tmp,setTmp]= useState([]);
    useEffect(async() => {
        await listData().then(response => {
          const test=response.data.data;
       
         setTmp(test);
         console.log(test);
       
        });
      },[])
    return (

        <div className="page3">
            <div className="title"> <img src={logo} />&nbsp;All Requests</div>
            <div className="container px-4" >
                <div className="row  gy-5">
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs"> <div className="top"> 
                       <div className="cardTitle">
                      
                       <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;Mission Requests</div>
                       <div className=" navbar mnav">
  
    <p className="status"  >Status:</p>
    <div className="d-flex">
   <a className="ap3">All</a>
   <a className="ap3">In Progress</a>
   <a className="ap3">Done</a>
   <a className="ap3">Pending</a>
   </div>
   
  </div>

                       </div>


                            <div className="p-3 row gy-4">
                            {tmp && tmp.map(data =>
                                <Mission key={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} />
                            )}
                            </div>

                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#D6E1FF" }}><div className="top" style={{ backgroundColor: "#D6E1FF" }}>
                        <div style={{background:"linear-gradient(256.88deg, #2850BC 24.97%, #03164B 159.02%)"}} className="cardTitle">
                      
                       <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;Vacation Requests</div>
                       <div className=" navbar mnav">
  
    <p className="status" style={{color:"rgba(21, 51, 132, 1)"}} >Status:</p>
    <div className="d-flex">
   <a  className="ap32 ap3">All</a>
   <a className="ap32 ap3">In Progress</a>
   <a className="ap32 ap3">Done</a>
   <a className="ap32 ap3">Pending</a>
   </div>
   
  </div></div>
  <div className="p-3 row gy-4 ">
                         
  {tmp && tmp.map(data =>
    <Requests key={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} />
)}

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#EDF2FF" }}><div className="top" style={{ backgroundColor: "#EDF2FF" }}>
                        <div style={{background: "linear-gradient(256.88deg, #6182E0 24.97%, #071A4F 159.02%)"}} className="cardTitle">
                      
                       <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;WFH Requests</div>
                       <div className=" navbar mnav">
  
    <p className="status" style={{color:"rgba(21, 51, 132, 1)"}} >Status:</p>
    <div className="d-flex">
   <a  className="ap32 ap3">All</a>
   <a className="ap32 ap3">In Progress</a>
   <a className="ap32 ap3">Done</a>
   <a className="ap32 ap3">Pending</a>
   </div>
   
  </div></div>
                        <div className="p-3 row gy-4">

                        {tmp && tmp.map(data =>
                            <Requests key={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} />
                        )}
                       
                      

                        </div></div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Page3;
