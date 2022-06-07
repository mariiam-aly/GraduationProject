import Attended from "../Components/Attended";
import "../styles/Page1.css"
import Absent from"../Components/Absent";
import logo from "../assets/Titlelogo.svg"

import React, {useState,useEffect} from "react";
function AttendanceSheet(){

    const[active,setActive]=useState(true);
 
return(<div className="page1">

<div className="title"> <img alt="logo" src={logo} />&nbsp;Attendance Sheet</div>
<div className="page11 ">


<div className="attendChoose">
<p onClick={()=>setActive(true)} className={active?"chosen":""}>Attendance</p>
<p onClick={()=>setActive(false)} className={!active?"chosen":""}>Absence</p>
</div>
</div>{active? <Attended/>:<Absent/>}</div>

);

}
export default AttendanceSheet