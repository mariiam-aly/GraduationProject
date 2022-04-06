import React, {useState,useEffect} from "react";
import { listData } from '../Utils/api'
import "../styles/Page4.css"
import logo from "../assets/Titlelogo.svg"
import mlogo from "../assets/miniLogo.svg"
import { BsFillCircleFill } from "react-icons/bs";
import Approve from "../Components/Approve.js"

function Page4() {

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
            <div className="title"> <img src={logo} />&nbsp;Requests To Approve</div>
            <div className="container px-4" >
                <div className="row  gy-5">
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs"> <div className="top4"> 
                       
                        <p className=" rnum">*25 Requests</p>
                       <div className="cardTitle4">
                      
                       <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;Mission Requests</div>
                       

                       </div>


                            <div className="p-3 row gy-4">
                            {tmp && tmp.map(data =>
                                <Approve key={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} />
                            )}
                            </div>

                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#D6E1FF" }}><div className="top4" style={{ backgroundColor: "#D6E1FF" }}> 
                        <p style={{color:"#153383"}} className=" rnum">*5 Requests</p>
                        <div style={{background:"linear-gradient(256.88deg, #2850BC 24.97%, #03164B 159.02%)"}} className="cardTitle4">
                      
                       <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;Vacation Requests</div>
                  </div>
  <div className="p-3 row gy-4 ">
                         
  {tmp && tmp.map(data =>
    <Approve key={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} />
)}

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#EDF2FF" }}><div className="top4" style={{ backgroundColor: "#EDF2FF" }}> 
                        <p  style={{color:"#6182E0"}} className=" rnum">*30 Requests</p>
                        <div style={{background: "linear-gradient(256.88deg, #6182E0 24.97%, #071A4F 159.02%)"}} className="cardTitle4">
                      
                       <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;WFH Requests</div>
                  </div>
                        <div className="p-3 row gy-4">

                        {tmp && tmp.map(data =>
                            <Approve key={data.id} image={data.avatar} fName={data.first_name} lName={data.last_name} />
                        )}
                       
                      

                        </div></div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Page4;
