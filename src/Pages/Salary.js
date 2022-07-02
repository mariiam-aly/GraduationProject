import "../styles/Page1.css"
import axios from 'axios';
import React, {useState,useEffect,useContext} from "react";
import { DataGrid } from '@mui/x-data-grid';

import { listData } from '../Utils/api'
import { salary } from '../Utils/api2' 
import Modal from "../Components/EditModal";
import { AiOutlineDown, AiOutlineDelete } from "react-icons/ai";
import {  BsExclamationTriangle } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import {Link} from "react-router-dom"
import { AuthContext } from '../Context/auth';
import TransactionModal from "../Components/TransactionModal";
import { generatePath,useHistory } from "react-router-dom";
function Salary(){
  const [modalOpen, setModalOpen] = useState(false);
  const [salaries, setSalaries] = useState([]);
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const columns = [
    { field: 'user_id', headerName: 'ID', width: 150 },

    { field: 'user_name', headerName: 'First name', width: 230 },
    { field: 'net_salary', headerName: 'Net Salary ', width: 230 },
   
   
    {    field: "transaction",
   
    headerName: "Transactions",
    width: 290,
   
    renderCell: (params) => {
      return (
        <div style={{display:"flex",justifyContect:"center"}}>
        <button onClick={()=>handleProceed(params.row.id,params.row.user_id)} className="viewAllTran"> View All Transactions </button>

        </div>
      );
    }, }

  ];
  
   
function handleProceed(num,usr){

  history.push( generatePath("/transaction/:id/:userId", {
    id: num,
 userId: usr
  }))
 
}

const [tmp,setTmp]= useState([]);
const [editId,setEditId]= useState("");

const [ids,setIds]= useState([]);

useEffect(() => {
   listData().then(response => {
    const test=response.data.data;
 
   setTmp(test);
   console.log(test);
 
  });
 
  
  salary(user.token).then(response => {
    const slry=response.data.data;
 
 console.log(slry)
    setSalaries(slry);
 
  });
},[modalOpen])

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
 function handleSet(data){
  console.log(data)
  setIds(data)
 }
const rows = salaries;
    return(<div className="page1">

    {modalOpen && <TransactionModal setOpenModal={setModalOpen} ids={ids} />}
   
    <div className="page11 ">
    <div className=" navbar">
    <p className="user">salary slip</p>
    <div className="d-flex">
  <button disabled={ids.length==0?true:false} onClick={()=>setModalOpen(true)} className="addUser" >Add New Transaction</button>
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
    onSelectionModelChange={(data)=>{handleSet(data)}}
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