import"../styles/Shift.css"

import logo from "../assets/Titlelogo.svg"
import ShiftTime from "../Components/ShiftTime.js"
import React, {useState } from 'react'
import { BsSun,BsMoonStars } from "react-icons/bs";
import ShiftModal from "../Components/ShiftModal";

function Shift(){
  const [day, setDay] = useState(false);
const [modalOpen, setModalOpen] = useState(false);

return(        <div className="page6">
{modalOpen && <ShiftModal day={day} setOpenModal={setModalOpen} />}

<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">AevaPay Company</p> <button className="edit">Edit</button>
<p className="compType">Financial Services</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Shifts</p>
<button className="addShift">Add new Shift</button>
</div>
<div style={{marginTop:'50px'}} className="container">
  <div className="row">
    <ShiftTime  setOpenModal={setModalOpen} setDay={setDay} name={[<BsMoonStars/>," ", "Night Shift"]}/>
    <ShiftTime   setOpenModal={setModalOpen} setDay={setDay} name={[<BsSun/>," ", "Normal Shift"]}/>
    <ShiftTime setOpenModal={setModalOpen} setDay={setDay} name="New Shift"/>
  </div>
</div>
</div>);

} 

export default Shift;