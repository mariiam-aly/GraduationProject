import"../styles/Shift.css"

import logo from "../assets/Titlelogo.svg"
import ShiftTime from "../Components/ShiftTime.js"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { BsSun,BsMoonStars } from "react-icons/bs";
import EditVac from "../Components/EditVac";
import AddVac from "../Components/AddVac";
import Vacation from "../Components/Vacation";
import FixedVacation from "../Components/FixedVacation";
import { CompanyConfig,addVacation,fixedV_edit,fixedV} from '../Utils/api2';
import EditFixed from "../Components/EditFixedVac";
import dp from "../assets/default-profile-icon-24.jpg"
function Vacations(){
 
const [modalOpen, setModalOpen] = useState(false);
const [editModalOpen, setEditModalOpen] = useState(false);
const [fixedModal, setFixedModal] = useState(false);
const [editData, setEditData] = useState(false);
const [con,setConfig]= useState([]);
const d = new Date();
let month = d.getMonth();

const { user } = useContext(AuthContext);


useEffect(() => {
  CompanyConfig(user.token).then(response => {
    const test=response.data.data;
 
    setConfig(test);     
 console.log(response.data.data)
  });   
  console.log(user.token);
  fixedV(user.token).then(response => {
     
 console.log(response);

  })
  const data={
    days:["Sunday","Monday"]
  } 
 /* fixedV_edit(data,user.token).then(response => {
     
    console.log(response);
   
     })*/

},[])


return(       
    <div className="page6">

{modalOpen && <AddVac title="New Vacation" setOpenModal={setModalOpen} />}
{editModalOpen && <EditVac editData={editData} title="Edit Vacation" setEditModalOpen={setEditModalOpen} />}
{fixedModal && <EditFixed fixedModal={fixedModal}  title="Edit Vacation" setFixedModal={setFixedModal} />}


<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src={con.photo!==null && con.photo!==" "?con.photo:dp}/>
<div style={{marginLeft:"20px"}}>
<p className="compName">{con.company_name}</p> 
<p className="compType">{con.specifity}</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Vacations</p>

</div>
<div style={{marginTop:'50px'}} className="container">
  <div className="row">
    <FixedVacation  setFixedModal={setFixedModal} fixedModal={fixedModal}   name={"Fixed Vacation"}/>
    <Vacation editModalOpen={editModalOpen} setEditData={setEditData} setOpenModal={setModalOpen} modalOpen={modalOpen} setEdit={setEditModalOpen}  name={"Vacations"} />
 
  </div>
</div>
</div>);

} 

export default Vacations;