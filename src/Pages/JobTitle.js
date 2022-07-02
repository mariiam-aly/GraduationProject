import"../styles/Department.css"
import logo from "../assets/Titlelogo.svg"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import {CompanyConfig, JobTitles,JobTitles_Create,JobTitles_Delete,JobTitles_Edit} from '../Utils/api2';
import { AiOutlineDelete,AiOutlineSearch } from "react-icons/ai";
import JobT from "../Components/JobT";
import { TitleSharp } from "@material-ui/icons";
import dp from "../assets/default-profile-icon-24.jpg"
function Department(){
  const[addNew,setAddNew]= useState(false);
  const[titles,setTitles]= useState();
  const[del,selDel]= useState(false);
  const [newName,setNewName]= useState("");
  const[checkCount,setCheckCount]= useState(0);
  const { user } = useContext(AuthContext);
  const [con,setConfig]= useState([]);
  const [searchTerm,SetSearchTerm]=useState('');
  useEffect(() => {
    CompanyConfig(user.token).then(response => {
      const test=response.data.data;
   
      setConfig(test);     
   console.log(response.data.data)
    });  
    JobTitles(user.token).then(response => {
      const test=response.data.data;
      setTitles(test);
     console.log(response);
   
    });
   
  },[addNew,del])


function setCheck(no){
  setCheckCount(checkCount+no);
}

function Create_JobTitle(){
  console.log("click");
  JobTitles_Create(newName,user.token).then(response => {
  
   console.log(response);
  
   setNewName("");
   setAddNew(false);

  });
}
function handleDelete(id){
  JobTitles_Delete(id,user.token).then(response => {
    const test=response.data.data;
    selDel(!del);
   console.log(response);
 
  });
  const newList = titles.filter((item) =>  id!=item.id) ;
  setTitles(newList);
}
  function handleEdit(id,name){
    JobTitles_Edit(id,name,user.token).then(response => {
      const test=response.data.data;
    
     console.log(response);
     
    });
    const exist = titles.find((x) => x.id ===id) ;

    setTitles( titles.map((x)=>  x.id ===id? { ...exist, name: name}: x));
}
return(        <div className="page6">

<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src={con.photo!==null && con.photo!==" "?con.photo:dp}/>
<div style={{marginLeft:"20px"}}>
<p className="compName">{con.company_name}</p> 
<p className="compType">{con.specifity}</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Job Titles</p>
<div className="end">
<button onClick={() => setAddNew(true)} className="addDep">Add new job title</button>
<div style={{position:"relative"}}>
<AiOutlineSearch className="srchI"/>
<input  className="search" type="text"  onChange={(e)=>SetSearchTerm(e.target.value)} placeholder="Search Title"/></div>
</div>
</div>
<div className="delDiv">

</div>
<div style={{marginTop:"50px"}} className="container">
{addNew?<div className="row g-2">
<div className="col-lg-6 remove">
 <div className="spc">
<div style={{marginBottom:"55px"}} className="dep ">
<div>
<label htmlFor="name"></label>
<input className="depName nameEdit" type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
</div>   
<div> 

<button onClick={Create_JobTitle} className="update">Add</button>
<button onClick={()=>setAddNew(false)} className="cancel">Cancel</button>
</div>

</div>
<div className="center">
<hr className="hr"/>
</div>
</div> </div>  

  {titles && titles.filter((data)=>{
    if(searchTerm===""){
        return data;
    } 
    else if(data.job_name.toLowerCase().includes(searchTerm.toLowerCase())){
return data;
   }
 }).map((data,index) =>

  <JobT handleDel={handleDelete} edit={handleEdit} index={index} key={data.id} name={data.job_name} setCheck={setCheck} id={data.id}/>)}
  
  </div> :  
<div className="row g-2">
{titles && titles.filter((data)=>{
  if(searchTerm===""){
      return data;
  } 
  else if(data.job_name.toLowerCase().includes(searchTerm.toLowerCase())){
return data;
 }
}).map((data,index) =>

<JobT handleDel={handleDelete} edit={handleEdit} index={index} key={data.id} name={data.job_name} setCheck={setCheck} id={data.id}/>)}

 
  </div>
}
 </div>
  </div>

);

}

export default Department;