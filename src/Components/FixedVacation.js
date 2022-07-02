import"../styles/Shift.css"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';

import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { vacation,deleteVacation,fixedV} from '../Utils/api2';
function FixedVacation(props){
  const[weekend,setWeekend]=useState();
  const[edit,setEdit]=useState(false);
  const[del,setDel]=useState(false);
  const[doneDel,setDoneDel]=useState();
  const d = new Date();
  let month = d.getMonth();
  
  const { user } = useContext(AuthContext);



  useEffect(() => {
    console.log(user.token);
    fixedV(user.token).then(response => {
       
   console.log((response.data.data).toString());
   setWeekend((response.data.data).toString());
    })
    const data={
      days:["Sunday","Monday"]
    }
   /* fixedV_edit(data,user.token).then(response => {
       
      console.log(response);
     
       })*/
  
  },[props.fixedModal])

function handleEdit(){ 
  //props.setShiftId(props.id);
  //props.setEdit(true);
 
  props.setFixedModal(true);
}

function deleteThis(id){
  deleteVacation(id,user.token).then(response => {
    setDoneDel(response);
   console.log(response);
 
  });

}

function handleDelete(){
  //props.setShiftId(props.id);
  //props.setEdit(true);
  console.log("del");
  setDel(true);
}
  
function editThis(name,date,id){
  //props.setShiftId(props.id);
  //props.setEdit(true);
 props.setEdit(true);
 props.setEditData({
  name: name,
  date: date,
  id: id}
 )
}
  

function handleAdd(){
console.log("add");
  props.setOpenModal(true);
}

function handleCancel(){

  setDel(false);
  setEdit(false);
}

useEffect(() => {

 /* vacation(month+1,user.token).then(response => {
    setHolidays(response.data.data);
   console.log(response);
 
  });*/

//  addVacation({name:"agaza",date:"2022-6-27"},user.token).then(response => {

   //console.log(response);
 
 // });
 
},[props.modalOpen, props.editModalOpen, doneDel]) 

return(     
    <div className="col-lg-6 line pad">
      <div className="time">
    
      <div>
      <p style={{display:"inline"}} className="timeT">{props.name}</p>
 </div>
 
  
 <div style={{position:"relative",bottom:"10px"}}> 
   
 
      <button onClick={handleEdit}  className="biEdit"><BiEdit style={{color:"#0B1963"}}/></button><p onClick={handleEdit} className="biText">Edit</p>
  

    </div>
 
      </div>
      
     <div>

      <div  className="shiftTime"  >
      {weekend?
      <p  className="st-p1" >{weekend}</p>
:
<p  className="st-p1" >No Fixed Vacations</p>
      }
    </div>

    
    
  
  </div>
  

</div>);

}

export default FixedVacation;