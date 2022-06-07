import "../styles/Page1.css"
import axios from 'axios';
import React, {useState,useEffect,useContext} from "react";
import { DataGrid } from '@mui/x-data-grid';
import { AuthContext } from '../Context/auth';
import { listData2, deactivate } from '../Utils/api2'
import Modal from "../Components/EditModal";
import { AiOutlineDown, AiOutlineDelete } from "react-icons/ai";
import {  BsExclamationTriangle } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import {Link} from "react-router-dom"
import { EditoContext } from "../Context/EditoContext";
import AxiosProvider2 from "../AxiosProvider2";

function Page(){
  const {userId,setUserId}= useContext(EditoContext);
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
const [active,setActive]=useState(true);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },

    { field: 'name', headerName: 'Name', width: 230 },
   
    { field: 'email', headerName: 'Email', width: 300 }, 
    { field: 'phone', headerName: 'Phone', width: 230 },
    { field: 'active', headerName: 'Active', width: 230 },
    { field: 'status', headerName: 'Status', width: 230 },
    { field: 'supervisor', headerName: 'Supervisor', width: 230 },
    {    field: "action",
    type:"number",
    headerName: " ",
    width: 290,
   
    renderCell: (params) => {
      return (
        <div className="actions">
   <Link style={{textDecoration:"none"}} to="/editUser" onClick={() => setUserId(params.row.id)}> <button className="action"  >
      {/*  <button className="action" onClick={() => handleEdit(params.row.id)}> */}<BiEdit className="actionIcon1"/>   <span className="tooltiptext">Edit </span></button></Link>
      
        <button className="action" > <AiOutlineDelete  className="actionIcon2" onClick={() => handleDeleteOneUser(params.row.id)} />  <span className="tooltiptext">Delete </span> </button>
        <button className="action"> <BsExclamationTriangle  className="actionIcon3" onClick={() => handleDeactiveOneUser(params.row.id)}/>  <span className="tooltiptext">Deactivate </span> </button>
     
        </div>
      );
    }, }, 

  ];
  
 


const [tmp,setTmp]= useState([]);
const [editId,setEditId]= useState("");

const [ids,setIds]= useState([]);

useEffect(() => {
   listData2(user.token).then(response => {
    const test=response.data.data;
 
   setTmp(test);
   console.log(response);
   console.log(userId);
 
  });
},[active])

const handleEdit= (id)=>{
  setModalOpen(true);
  setEditId(id);

}
const onEdit= (id,rData)=>{
  setTmp(tmp.map(data => data.id === id ? { ...rData } : data));
  console.log(rData)
}
const  handleDeleteUser=(event)=>{

  console.log(ids);
  event.preventDefault();
  ids.map((data)=>{AxiosProvider2.delete(`users/${data}`,{
    headers: {
        Authorization: `Bearer ${user.token}`
    }
}).then(response => {
console.log(response);
setActive(active);
const newList = tmp.filter((item) =>  !ids.includes(item.id));
 
  setTmp(newList);
});});


}




function handleDeleteOneUser(id){
  AxiosProvider2.delete(`users/${id}`,{
    headers: {
        Authorization: `Bearer ${user.token}`
    }
}).then(response => {
console.log(response);
const newList = tmp.filter((item) =>  id!=item.id) ;
setActive(active);
  setTmp(newList);
});

}

const  handleDeactiveUser=(event)=>{

  console.log(ids);
  event.preventDefault();
  ids.map((data)=>{  AxiosProvider2.patch(`admin/users/${data}/activate`,{},{
    headers: {
        Authorization: `Bearer ${user.token}`
    },
}).then(response => {
console.log(response);

});});

}
function handleDeactiveOneUser(id){
  AxiosProvider2.patch(`admin/users/${id}/activate`,{},{
    headers: {
        Authorization: `Bearer ${user.token}`
    },
}).then(response => {
console.log(response);
setActive(!active);
});

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
    const newList = tmp.filter((item) =>  !ids.includes(item.id));
 
    setTmp(newList);
  });
 

  
  

}
 
const rows = tmp;
    return(<div className="page1">

    {modalOpen && <Modal setOpenModal={setModalOpen} id={editId} doneEdit={onEdit}/>}
   
    <div className="page11 ">
    <div className=" navbar">
    <p className="user">users</p>
    <div className="d-flex">
   
    <Link to="/adduser"> <button className="addUser" >Add New User</button></Link>
  </div>
  </div>
    <div className="dropdown">
  <button className="dropbtn">Actions &nbsp; <AiOutlineDown/> </button>
  <div className="dropdown-content">
  <a href=" " onClick={(event)=>handleDeleteUser(event)}>Delete</a>
  <a href=" "  onClick={(event)=>handleDeactiveUser(event)}>Deactivate</a>
  
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
    pagination
  />
  
    <ul>
    {/*tmp.map(item => {
      return <li  key={item.id}>{item.last_name}</li>;
    })*/}
  </ul>
  </div>

  </div>)
}

export default Page;