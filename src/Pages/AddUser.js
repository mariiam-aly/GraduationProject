import"../styles/AddUser.css"

import logo from "../assets/Titlelogo.svg"
import { listData } from '../Utils/api'
import { BsSun,BsMoonStars } from "react-icons/bs";
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { departments,JobTitles,listData2,createUser } from '../Utils/api2';
function AddUser(){
  const { user } = useContext(AuthContext);
const [department,setDepartment]= useState();
const [title,setTitle]= useState();
const [users,setUsers]= useState();
const roles=["Admin","HR","Accountant","Normal"];
  useEffect(() => {
    departments(user.token).then(response => {
    
      setDepartment(response.data.data);
   
    });
    JobTitles(user.token).then(response => {
    
      setTitle(response.data.data);
   
    });
    listData2(user.token).then(response => {
    console.log(response);
      setUsers(response.data.data);
   
    });
  },[])
  const [values, setValues] = useState({
    name: "",
    phone:"",
    email: "",
    department_id:"",
    job__title_id:"",
    supervisor :"",
    role:"",
    birthdate: "",
    scheduled:"",
    unscheduled:"",
    shift_id:"1",
    can_wfh:true,  
  
    salary:"",
    id:""
  });
  const [focus, setFocus] = useState({
    name: "false",
    phone:"false",
    email: "false",
    department_id:"false",
    job__title_id:"false",
    supervisor :"false",
    role:"false",
    birthdate: "false",
    scheduled:"false",
    unscheduled:"false",
   
    salary:"false",
    id:"false"
  });
  const [tmp,setTmp]= useState([]);
useEffect(() => {
   listData().then(response => {
    const test=response.data.data;
 
   setTmp(test);
   console.log(test);
 
  });
},[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    createUser(values,user.token).then(response => {
    
      console.log(response);
   
    });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
   
  };
  console.log(values);

  const handleFocus = (e) => {
    setFocus({ ...focus, [e.target.name]: "true" });
   
  };
 
return(        <div className="page5">
<div className="title"> <img alt="logo" src={logo} />&nbsp;Add New Employee</div>

<div className="container space">
<form onSubmit={handleSubmit}>
<div className="row">
<div className="col-lg-6">
<label className='lbl' htmlFor="name">Name</label>
<input className='inpuser' type="text" name="name" placeholder="Username" pattern="^[a-zA-Z ]{3,100}$" value={values.name} onChange={onChange} required onBlur={handleFocus} focused={focus.name.toString()}/>
<span>Username should be 3-16 characters with phone special characters</span>
<label className='lbl' htmlFor="phone">Phone Number</label>

<input className='inpuser' type="text" name="phone" placeholder="Phone Number" pattern= "^[0]([0-9]{10})$" value={values.phone} onChange={onChange} required onBlur={handleFocus} focused={focus.phone.toString()}/>
<span>Phone Number should be 9 Numbers</span>
<label className='lbl' htmlFor="email">Email</label>
<input className='inpuser' type="email" name="email" placeholder="Name@Domain.com" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" value={values.email} onChange={onChange} required  onBlur={handleFocus} focused={focus.email.toString()}/>
<span>Email must be in the format Name@Domain.com</span>
<div className=" overflow-hidden">
  <div className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="department_id">Department</label>
    <select  name="department_id" value={values.department_id} onChange={onChange} required  onBlur={handleFocus} focused={focus.department_id.toString()}>
  
    {department && department.map(data =>
      <option key={data.id} value={data.id}>{data.name}</option>
  )}
  
  </select>
 {/*-  <div className=" rel">
<button className="formAdd">Add new Department</button></div>*/}
<span>Please choose department</span>
  </div>
   
    <div className="col-6 ">
    <label className='lbl' htmlFor="job__title_id" >Job Title</label>
    <select  name="job__title_id" value={values.job__title_id} onChange={onChange} required  onBlur={handleFocus} focused={focus.job__title_id.toString()}>
    {title && title.map(data =>
      <option key={data.id} value={data.id}>{data.job_name}</option>
  )}
  </select>
  <span>Please choose job title</span>
  {/*- <div className=" rel">
  <button className="formAdd">Add new Title</button></div>*/}
 
  </div> 
  <div className="col-6">
    <label className='lbl' htmlFor="supervisor">Supervisor</label>
    <select  name="supervisor" value={values.supervisor} onChange={onChange} required  onBlur={handleFocus} focused={focus.supervisor.toString()}>
  
    {users && users.map(data =>
      <option key={data.id} value={data.id}>{data.id} {data.name}</option>
  )}
  
  </select>
<span>Please choose supervisor</span>
  </div>
  

    <div  className="col-6">
    <label className='lbl' htmlFor="role">Permission</label>
    <select  name="role" value={values.role} onChange={onChange} required onBlur={handleFocus} focused={focus.role.toString()}>
    { roles.map((data,index) =>
      <option key={index} value={data}>{data}</option>
  )}
  </select>
  <span>Please choose roleission</span>
  </div>
   
  </div>
</div>
</div>
<div className="col-lg-6">
<label className='lbl' htmlFor="birthdate">Birthdate</label>
<input  className='inpuser ' type="date" name="birthdate" value={values.birthdate} onChange={onChange} placeholder="dd-mm-yyyy" required  onBlur={handleFocus} focused={focus.birthdate.toString()}/>
<span>Please pick birthdate</span>
<div className=" overflow-hidden">
<p className="allowance">Allowance</p>
  <div className="row g-2">
    <div className="col-4">
   
<input className='inpuserA ' type="number" name="scheduled" value={values.scheduled} onChange={onChange} pattern= "^[0-9]{0,100})$" placeholder="30 Days" required onBlur={handleFocus} focused={focus.scheduled.toString()}/>
<span>Please enter number</span>
<label className='lbl2' htmlFor="scheduled">Vacation</label>

  </div>
   
    
    
    <div className="col-4">
    <input className='inpuserA ' type="number" name="unscheduled" placeholder="8 Days" value={values.unscheduled} onChange={onChange} pattern= "^[0-9]{0,100})$" required  onBlur={handleFocus} focused={focus.unscheduled.toString()}/>
    <span>Please enter number</span>
    <label className='lbl2' htmlFor="unscheduled">Unpaid Leave</label></div>
   
   
  </div>
</div>
<div className=" overflow-hidden">
{/*}
<p className="allowance">Shift</p>
  <div className="row g-2">
   
    <div className="col-6 ">
    <div className="rad ">
    <input  type="radio" id="shift1" name="shift" value={values.shift} onChange={onChange} />
    <label className='lblR' htmlFor="shift1"><BsMoonStars/>&nbsp;10AM - 4PM</label></div>
    </div>
    <div className="col-6 ">
    <div className="rad ">
    <input  type="radio" id="shift2" name="shift"/>
    <label className='lblR' htmlFor="shift2"><BsSun/>&nbsp;10AM - 4PM</label></div>
    </div>
    <div className="col-3 "></div>
    <div className="col-6 ">
   <button className="cShift">Custom Shift</button> </div>
    <div className="col-3 "></div>
    </div>*/}
</div>
 
<div className=" overflow-hidden">
  <div  style={{marginTop:"19px"}} className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="salary">Basic Salary</label>
    <input className='inpuserS' type="text" name="salary" value={values.salary} onChange={onChange} pattern="^[0-9]{1,6}(\.[0-9]+)?$" placeholder="EGP 1.500" required  onBlur={handleFocus} focused={focus.salary.toString()}/>
    <span>Please enter number</span>
    </div>
   
    <div className="col-6">
    <label className='lbl' htmlFor="id">ID</label>
    <input className='inpuserS' type="text" name="id" value={values.id} onChange={onChange} pattern="^[0-9]{1,6}(\.[0-9]+)?$" placeholder="01234567" required onBlur={handleFocus}  focused={focus.id.toString()}/>
    <span>Please enter number</span>
   </div>
  </div>
</div>
</div>
</div>
<div className="btns">
<button className="btn1">Cancel</button>
<button type="submit" className="btn2">Add Employee</button>
</div>
</form>
</div>
</div>);

}

export default AddUser;