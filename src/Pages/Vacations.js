import"../styles/Shift.css"

import logo from "../assets/Titlelogo.svg"
import ShiftTime from "../Components/ShiftTime.js"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { BsSun,BsMoonStars } from "react-icons/bs";
import ShiftModal from "../Components/ShiftModal";
import EditShift from "../Components/EditShift";
import Vacation from "../Components/Vacation";
import { vacation,addVacation} from '../Utils/api2';
function Vacations(){

const [modalOpen, setModalOpen] = useState(false);
const [editModalOpen, setEditModalOpen] = useState(false);
const[holidays,setHolidays]=useState();
const d = new Date();
let month = d.getMonth();

const { user } = useContext(AuthContext);

useEffect(() => {

  vacation(month+1,user.token).then(response => {
    setHolidays(response.data.data);
   console.log(response);
 
  });

  addVacation({name:"agaza",date:"2022-6-27"},user.token).then(response => {

   console.log(response);
 
  });
 
},[]) 



return(      
    <div className="page6">

{modalOpen && <ShiftModal title="New Shift" setOpenModal={setModalOpen} />}
{editModalOpen && <EditShift title="Edit Shift" setEditModalOpen={setEditModalOpen} />}


<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
<div style={{marginLeft:"20px"}}>
<p className="compName">AevaPay Company</p> <button className="edit">Edit</button>
<p className="compType">Financial Services</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Vacations</p>

</div>
<div style={{marginTop:'50px'}} className="container">
  <div className="row">
    <Vacation  setOpenModal={setModalOpen}  setEdit={setEditModalOpen}  name={"Fixed Vacation"}/>
    <Vacation setOpenModal={setModalOpen} setEdit={setEditModalOpen}  name={"Vacations"}/>

  </div>
</div>
</div>);

} 

export default Vacations;