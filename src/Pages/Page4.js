import React, {useState,useEffect,useContext} from "react";
import { mission2,cancel,approve } from '../Utils/api2';
import { AuthContext } from '../Context/auth';
import "../styles/Page4.css"
import logo from "../assets/Titlelogo.svg"
import mlogo from "../assets/miniLogo.svg"
import Approve from "../Components/Approve.js"

function Page4() {
    const { user } = useContext(AuthContext);
    const [missn,setMissn]= useState([]);
    const [vcn,setVcn]= useState([]);
    const [wfh,setWfh]= useState([]);
    
    useEffect(() => {
        console.log(user.token);
        console.log(localStorage.getItem("token"));
        mission2({status: 'pending',class: 'mission'},user.token).then(response => {
          const test=response.data.data.data;
       
          setMissn(test);     
       console.log(response);
        });   
        mission2({status: 'pending',class: 'vacation'},user.token).then(response => {
            const test=response.data.data.data;
         
            setVcn(test);     
         
          });  
          mission2({status: 'pending',class: 'wfh'},user.token).then(response => {
            const test=response.data.data.data;
         
            setWfh(test);     
         
          });  
      
          
      },[])


function handleCancel(id){
 
    cancel(id,   localStorage.getItem("token")).then(response => {
      console.log(response);  
     
      });  
  

}
function handleApprove(id){
    approve(id,user.token).then(response => {
      console.log(response);  
     
      });  
  

}

    return (

        <div className="page3">
            <div className="title"> <img alt="logo" src={logo} />&nbsp;Requests To Approve</div>
            <div className="container px-4" >
                <div className="row  gy-5">
                    <div className="col-xl-4 col-lg-6 ">
                        <div className=" divs"> <div className="top4"> 
                       
                        <p className=" rnum">*25 Requests</p>
                       <div className="cardTitle4">
                      
                       <img alt="logo"  src={mlogo} style={{minHeight:"30px"}} />&nbsp;Mission Requests</div>
                       

                       </div> 


                            <div className="p-3 row gy-4">
                            {missn && missn.map(data =>
                                <Approve key={data.id} id={data.request_id} image={data.image} name={data.name} date={data.start_date} handleCancel={handleCancel} handleApprove={handleApprove}/>
                            )}
                            </div>

                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="divs" style={{ backgroundColor: "#D6E1FF" }}><div className="top4" style={{ backgroundColor: "#D6E1FF" }}> 
                        <p style={{color:"#153383"}} className=" rnum">*5 Requests</p>
                        <div style={{background:"linear-gradient(256.88deg, #2850BC 24.97%, #03164B 159.02%)"}} className="cardTitle4">
                      
                       <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;Vacation Requests</div>
                  </div>
  <div className="p-3 row gy-4 ">
                         
  {vcn && vcn.map(data =>
    <Approve key={data.id} image={data.image} name={data.name} date={data.start_date} />
)}

                        </div></div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className=" divs" style={{ backgroundColor: "#EDF2FF" }}><div className="top4" style={{ backgroundColor: "#EDF2FF" }}> 
                        <p  style={{color:"#6182E0"}} className=" rnum">*30 Requests</p>
                        <div style={{background: "linear-gradient(256.88deg, #6182E0 24.97%, #071A4F 159.02%)"}} className="cardTitle4">
                      
                       <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;WFH Requests</div>
                  </div>
                        <div className="p-3 row gy-4">

                        {wfh && wfh.map(data =>
                            <Approve key={data.id} image={data.image} name={data.name} date={data.start_date}/>
                        )}
                       
                      

                        </div>
                        
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                    <div className=" divs" style={{ backgroundColor: "#EDF2FF" }}><div className="top4" style={{ backgroundColor: "#EDF2FF" }}> 
                    <p  style={{color:"#6182E0"}} className=" rnum">*30 Requests</p>
                    <div style={{background: "linear-gradient(256.88deg, #6182E0 24.97%, #071A4F 159.02%)"}} className="cardTitle4">
                  
                   <img alt="logo" src={mlogo} style={{minHeight:"30px"}} />&nbsp;Leave Requests</div>
              </div>
                    <div className="p-3 row gy-4">

                    {wfh && wfh.map(data =>
                        <Approve key={data.id} image={data.image} name={data.name} date={data.start_date}/>
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
