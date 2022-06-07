import "../styles/Page1.css"
import axios from 'axios';
import React, {useState,useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';

import { listData } from '../Utils/api'
import Modal from "../Components/EditModal";
import { AiOutlineDown, AiOutlineDelete } from "react-icons/ai";
import {  BsExclamationTriangle } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import {Link} from "react-router-dom"

function Salary(){
  const [modalOpen, setModalOpen] = useState(false);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },

    { field: 'first_name', headerName: 'First name', width: 230 },
    { field: 'last_name', headerName: 'Last name', width: 230 },
   
    { field: 'email', headerName: 'Email', width: 300 }, 
    {    field: "action",
    type:"number",
    headerName: "Bonus",
    width: 290,
   
    renderCell: (params) => {
      return (
        <div >
        <button className="action"> <GoDiffAdded  className="actionIcon3"/>  <span className="tooltiptext">Add </span> </button>
   <a style={{textDecoration:"none"}} href="\editUser"> <button className="action">
      {/*  <button className="action" onClick={() => handleEdit(params.row.id)}> */}<BiEdit className="actionIcon1"/>   <span className="tooltiptext">Edit </span></button></a>
        <button className="action" > <AiOutlineDelete  className="actionIcon2"/>  <span className="tooltiptext">Delete </span> </button>
        
     
        </div>
      );
    }, }, 

  ];
  
 


const [tmp,setTmp]= useState([]);
const [editId,setEditId]= useState("");

const [ids,setIds]= useState([]);

useEffect(() => {
   listData().then(response => {
    const test=response.data.data;
 
   setTmp(test);
   console.log(test);
 
  });
},[])

const handleEdit= (id)=>{
  setModalOpen(true);
  setEditId(id);

}
const onEdit= (id,rData)=>{
  setTmp(tmp.map(data => data.id === id ? { ...rData } : data));
  console.log(rData)
}

const handleDelete= async()=>{

  /* axios.delete(`https://reqres.in/api/users`, {
    headers: {
      'Content-type': 'application/json'
    },
    data: {
      id: [tmp]
    }
  }).then(response => {
    console.log(response);
  });*/

  await axios.delete(`https://reqres.in/api/users/2`)
  .then(response => {
    console.log(response);
  });
  const newList = tmp.filter((item) =>  !ids.includes(item.id));
 
  setTmp(newList);

  
  

}
 
const rows = tmp;
    return(<div className="page1">

    {modalOpen && <Modal setOpenModal={setModalOpen} id={editId} doneEdit={onEdit}/>}
   
    <div className="page11 ">
    <div className=" navbar">
    <p className="user">salary</p>

  </div>
    <div className="dropdown">
  <button className="dropbtn">Actions &nbsp; <AiOutlineDown/> </button>
  <div className="dropdown-content">
  <a href=" " onClick={handleDelete}>Delete</a>
  <a href=" "  onClick={handleDelete}>Deactivate</a>
  
  </div>
</div>
   </div>
   
  
    <div className="list container">
    <hr/>
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={6}
    rowsPerPageOptions={[6]}
    checkboxSelection
    disableSelectionOnClick
    onSelectionModelChange={(data)=>{setIds(data)}}
  />
  
    <ul>
    {/*tmp.map(item => {
      return <li  key={item.id}>{item.last_name}</li>;
    })*/}
  </ul>
  </div>

  </div>)
}

export default Salary;