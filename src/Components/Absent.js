import "../styles/Page1.css"

import React, {useState,useEffect,useContext} from "react";
import { Attend } from '../Utils/api2';

import { AuthContext } from '../Context/auth';
import { DataGrid } from '@mui/x-data-grid';

import { listData } from '../Utils/api'

function Absent(){
  const { user } = useContext(AuthContext);
  const [attend,setAttend]= useState([]);
  const columns = [
    { field: 'user_id', headerName: 'ID', width: 70 },

    { field: 'name', headerName: 'Name', width: 230 },
    { field: 'date', headerName: 'Date', width: 230 },
   
    
    

  ];
  
 

  useEffect(() => {
    console.log(user.token);
    Attend("absences",user.token).then(response => {
      const test=response.data.data;
   console.log(response);
      if(test==undefined){
        setAttend([ ]);  
       }
       else{
          setAttend(test);     
       console.log(response)
        }   
   
    });   

  
      
  },[])



const rows = attend;
    return(<div className="list container">
    <hr/>
    
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={6}
    rowsPerPageOptions={[6]}
   
    disableSelectionOnClick
    />
    </div>)
}

export default Absent;