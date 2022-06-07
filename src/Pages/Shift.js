import"../styles/Shift.css"

import logo from "../assets/Titlelogo.svg"
import ShiftTime from "../Components/ShiftTime.js"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { BsSun,BsMoonStars } from "react-icons/bs";
import { shifts,Add_shifts,Edit_shifts } from '../Utils/api2';

import ShiftModal from "../Components/ShiftModal";
import EditShift from "../Components/EditShift";
function Shift(){
  const [day, setDay] = useState(false);
const [modalOpen, setModalOpen] = useState(false);
const [editModalOpen, setEditModalOpen] = useState(false);
const { user } = useContext(AuthContext);
const [shift,setShift]=useState();
const [shiftId,setShiftId]=useState();
  useEffect(() => {
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
<img alt="profile" className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">AevaPay Company</p>
<p className="compType">Financial Services</p></div></div>
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