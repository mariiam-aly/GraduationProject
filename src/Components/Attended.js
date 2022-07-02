import "../styles/Page1.css"
import React, {useState,useEffect,useContext} from "react";
import { Attend } from '../Utils/api2';

import { AuthContext } from '../Context/auth';
import { DataGrid } from '@mui/x-data-grid';

import { listData } from '../Utils/api'

function Attended(){
  const { user } = useContext(AuthContext);
  const [attend,setAttend]= useState([]);
  const columns = [
    { field: 'user_id', headerName: 'ID', width: 150 },

    { field: `user`, headerName: 'Name', width: 230,  
      renderCell: (params) => {
      return <div className="rowitem">{params.row.user.name}</div>;
    }},
    { field: 'date', headerName: 'Date', width: 230 },
   
    { field: 'start_time', headerName: 'Start Time', width: 300 }, 
    { field: 'leave_time', headerName: 'End Time', width: 230 },
   


  ];
  
 


  useEffect(() => {
    
    Attend("admin/attendancelog",user.token).then(response => {
      const test=response.data;
      console.log(response)
  
   if(test==undefined){
    setAttend([ ]);  
   }
   else{
      setAttend(test);     
  }
    });   
  
      
  },[])



 

const rows = attend;
    return(<div className="list container">
    <hr/>
    
    <DataGrid
    getRowId={(row) => row.user_id}
    rows={rows}
    columns={columns}
    pageSize={6}
    rowsPerPageOptions={[6]}

    disableSelectionOnClick
    />
    </div>)
}

export default Attended;