import"../styles/Shift.css"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';

import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { vacation,deleteVacation} from '../Utils/api2';
function Vacation(props){
  const[holidays,setHolidays]=useState([]);
  const[edit,setEdit]=useState(false);
  const[del,setDel]=useState(false);
  const[doneDel,setDoneDel]=useState();
  const d = new Date();
  let month = d.getMonth();
  
  const { user } = useContext(AuthContext);

function handleEdit(){ 
  //props.setShiftId(props.id);
  //props.setEdit(true);
  console.log("edit");
  setEdit(true);
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

  vacation(user.token).then(response => {
    setHolidays(response.data.data);
   console.log(response);
 
  });

//  addVacation({name:"agaza",date:"2022-6-27"},user.token).then(response => {

   //console.log(response);
 
 // });
 
},[props.modalOpen, props.editModalOpen, doneDel]) 

return(     
    <div className="col-lg-6 line pad">
      <div className="time">
      {edit || del? null:
      <div>
      <p style={{display:"inline"}} className="timeT">{props.name}</p>
      <button style={{display:"inline",marginLeft:"0.5em"}} onClick={handleAdd} className="addShift">Add Vacation</button></div>
   }  
   {
    
    
    edit || del?  
    
    <div>
    <button style={{marginLeft:"0"}} onClick={handleCancel}  className="cancel">Close</button>
 </div>
 :
 <div style={holidays.length==0?{display:"none"}:{position:"relative",bottom:"10px"} } > 
   
 
      <button onClick={handleEdit} style={{marginRight:"20px"}} className="biEdit"><BiEdit style={{color:"#0B1963"}}/></button><p onClick={handleEdit} className="biText">Edit</p>
  
      <button  onClick={handleDelete} className="biEdit bRed"><AiOutlineDelete style={{color:"#D43500"}}/></button><p className="biText2">Delete</p>
    </div>}
 
      </div>
      
     <div>
    
     {edit? holidays && holidays.map(data =>
      <div key={data.id} className="shiftTime" style= {edit? {cursor:"pointer"}:null} onClick={()=>editThis(data.name,data.date,data.id)}>
      <p style= {edit? {color:"#081249"}:null} className="st-p1" >{data.name}:</p>
      <p style= {edit? {color:"#081249"}:null} className="st-p2">{data.date}</p>
      </div>  ):null}
       { !edit && !del?holidays && holidays.map(data =>
        <div key={data.id} className="shiftTime" style= {edit? {cursor:"pointer"}:null}>
        <p style= {edit? {color:"#081249"}:null} className="st-p1" >{data.name}:</p>
        <p style= {edit? {color:"#081249"}:null} className="st-p2">{data.date}</p>
        </div>  ):null}
        {del? holidays && holidays.map(data =>
          <div key={data.id} className="shiftTime" style= {del? {cursor:"pointer"}:null} onClick={()=>deleteThis(data.id)}>
          <p style= {del? {color:"#CF2121"}:null} className="st-p1" >{data.name}:</p>
          <p style= {del? {color:"#CF2121"}:null} className="st-p2">{data.date}</p>
          </div>  ):null}

    {holidays.length==0? <p   className="st-p1">No Upcoming Holidays</p>:null   }
    
  
  </div>
  

</div>);

}

export default Vacation;