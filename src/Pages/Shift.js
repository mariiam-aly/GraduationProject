import"../styles/Shift.css"

import logo from "../assets/Titlelogo.svg"
import ShiftTime from "../Components/ShiftTime.js"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { BsSun,BsMoonStars } from "react-icons/bs";
import { CompanyConfig,shifts,Add_shifts,Edit_shifts } from '../Utils/api2';
import dp from "../assets/default-profile-icon-24.jpg"
import ShiftModal from "../Components/ShiftModal";
import EditShift from "../Components/EditShift";
function Shift(){
  const [day, setDay] = useState(false);
const [modalOpen, setModalOpen] = useState(false);
const [editModalOpen, setEditModalOpen] = useState(false);
const { user } = useContext(AuthContext);
const [shift,setShift]=useState();
const [shiftId,setShiftId]=useState();
const [con,setConfig]= useState([]);
  useEffect(() => {
    CompanyConfig(user.token).then(response => {
      const test=response.data.data;
   
      setConfig(test);     
   console.log(response.data.data)
    });   
    shifts(user.token).then(response => {
      setShift(response.data.data);
     console.log(response);
   
    });
   
  },[modalOpen,editModalOpen]) 
  

return(        <div className="page6">
{modalOpen && <ShiftModal title="New Shift" setOpenModal={setModalOpen} />}
{editModalOpen && <EditShift title="Edit Shift" setEditModalOpen={setEditModalOpen} id={shiftId}/>}
<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src={con.photo!==null && con.photo!==" "?con.photo:dp}/>
<div style={{marginLeft:"20px"}}>
<p className="compName">{con.company_name}</p> 
<p className="compType">{con.specifity}</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Shifts</p>
<button onClick={()=>setModalOpen(true)} className="addShift">Add new Shift</button>
</div>
<div style={{marginTop:'50px'}} className="container">
  <div className="row">
     
    {shift && shift.map((data,index) =>
      <ShiftTime key={index} id={data.id} setShiftId={setShiftId} setEdit={setEditModalOpen} setDay={setDay} name={data.name} start={data.start_time} mid={data.midday} end={data.end_time}/>)}
  
  </div>
</div>
</div>);

} 

export default Shift;