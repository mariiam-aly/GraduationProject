import"../styles/AddUser.css"

import logo from "../assets/Titlelogo.svg"

import React, {useEffect,useState,useContext } from 'react'

import { BsSun,BsMoonStars } from "react-icons/bs";
import { EditoContext } from "../Context/EditoContext";
import { AuthContext } from '../Context/auth';
import { editUser } from '../Utils/api2'
import { departments,JobTitles,singleUser,listData2 } from '../Utils/api2';
function EditConfig(){

  const { user } = useContext(AuthContext);
  const [department,setDepartment]= useState();
const [title,setTitle]= useState();
const [users,setUsers]= useState();
const [single,setSingle]= useState();
const roles=["Admin","HR","Accountant","Normal"];
  useEffect(() => {
    departments(user.token).then(response => {
    
      setDepartment(response.data.data);
   
    });
    JobTitles(user.token).then(response => {
    
      setTitle(response.data.data);
   
    });
  
    listData2(user.token).then(response => {
      setUsers(response.data.data);
   
      });
  },[])
  const [values, setValues] = useState({
    company_name: "",
    company_phone:"",
    company_email: "",
    specificity:"",
    branches :"",
    distance:"",
    country: "",
    location:"",
    LatePeriod:"",
    halfDayAbsenceDeduction:"1",
    fullDayAbsenceDeduction:"",  
    latitude:"",
    longitude:""
  });
  const [focus, setFocus] = useState({
    company_name: "false",
    specificity:"false",
    company_phone:"false",
    company_email: "false",
    branches:"false",
    distance:"false",
    country :"false",
    location:"false",
    LatePeriod: "false",
    halfDayAbsenceDeduction:"false",
    fullDayAbsenceDeduction:"false",
    latitude:"false",
    longitude:"false"
  });
  const [tmp,setTmp]= useState([]);
useEffect(() => {

},[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(focus);
   
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
   
  };

  const handleFocus = (e) => {
    setFocus({ ...focus, [e.target.name]: "true" });
   
  };
  console.log(focus);
 
return(        <div className="page5">
<div className="title"> <img alt="logo" src={logo} />&nbsp;Company Configuration</div>

<div className="container space">
<form onSubmit={handleSubmit}>
<div className="row">
<div className="col-lg-6">

<label className='lbl' htmlFor="company_name">Company Name</label>
<input className='inpuser' type="text" name="company_name"  pattern="^[a-zA-Z ]{3,100}$" placeholder="company_name " value={values.name} onChange={onChange} required onBlur={handleFocus} focused={focus.company_name.toString()}/>
<span>Username should be 3-16 characters with phone special characters</span>


<label className='lbl' htmlFor="specificity">Specificity </label>
<input className='inpuser' type="text" name="specificity"  pattern="^[a-zA-Z ]{3,100}$" placeholder="Company Specificity" value={values.specificity} onChange={onChange} required onBlur={handleFocus} focused={focus.specificity.toString()}/>
<span>Username should be 3-16 characters with phone special characters</span>


<label className='lbl' htmlFor="company_phone">Phone Number</label>
<input className='inpuser' type="text" name="company_phone" placeholder="Phone Number" pattern= "^[0]([0-9]{10})$" value={values.company_phone} onChange={onChange} required onBlur={handleFocus} focused={focus.company_phone.toString()}/>
<span>Phone Number should be 9 Numbers</span>


<label className='lbl' htmlFor="company_email">Email</label>
<input className='inpuser' type="email" name="company_email" placeholder="Name@Domain.com" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" value={values.company_email} onChange={onChange} required  onBlur={handleFocus} focused={focus.company_email.toString()}/>
<span>Email must be in the format Name@Domain.com</span>



<div className=" overflow-hidden">
  <div className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="branches">Branches</label>
    <input className='inpuser' type="text" name="branches" placeholder="Branches" pattern="^([0-9])$" value={values.branches} onChange={onChange} required  onBlur={handleFocus} focused={focus.branches.toString()}/>
    <span>Email must be in the format Name@Domain.com</span>
  </div>
   
    <div className="col-6 ">
    <label className='lbl' htmlFor="distance">Distance</label>
    <input className='inpuser' type="text" name="distance" placeholder="distance" pattern="^([0-9])$" value={values.distance} onChange={onChange} required  onBlur={handleFocus} focused={focus.distance.toString()}/>
    <span>Email must be in the format Name@Domain.com</span>
  </div> 
  <div className="col-6">
  <label className='lbl' htmlFor="country">Country</label>
  <input className='inpuser' type="text" name="country" placeholder="country" pattern="^([0-9])$" value={values.country} onChange={onChange} required  onBlur={handleFocus} focused={focus.country.toString()}/>
  <span>Email must be in the format Name@Domain.com</span>
  </div>
  

    <div  className="col-6">
    <label className='lbl' htmlFor="location">Location</label>
    <input className='inpuser' type="text" name="location" placeholder="location" pattern="^([0-9])$" value={values.location} onChange={onChange} required  onBlur={handleFocus} focused={focus.location.toString()}/>
    <span>Email must be in the format Name@Domain.com</span>
  </div>
   
  </div>
</div>
</div>
<div className="col-lg-6">
<label className='lbl' htmlFor="LatePeriod">Time allowed for latency</label>
<input  className='inpuser ' type="time" name="LatePeriod" value={values.LatePeriod} onChange={onChange} placeholder="dd-mm-yyyy" required  onBlur={handleFocus} focused={focus.LatePeriod.toString()}/>
<span>Please pick birthdate</span>
<div className=" overflow-hidden">
<p className="allowance">Deductions</p>
  <div className="row g-2">
    <div className="col-4">
   
<input className='inpuserA ' type="number" name="halfDayAbsenceDeduction" value={values.halfDayAbsenceDeduction} onChange={onChange} pattern= "^[0-9]{0,100})$" placeholder="30" required onBlur={handleFocus} focused={focus.halfDayAbsenceDeduction.toString()}/>
<span>Please enter number</span>
<label className='lbl2' htmlFor="halfDayAbsenceDeduction">Half day</label>

  </div>
   
    
    
    <div className="col-4">
    <input className='inpuserA ' type="number" name="fullDayAbsenceDeduction" placeholder="8" value={values.fullDayAbsenceDeduction} onChange={onChange} pattern= "^[0-9]{0,100})$" required  onBlur={handleFocus} focused={focus.fullDayAbsenceDeduction.toString()}/>
    <span>Please enter number</span>
    <label className='lbl2' htmlFor="fullDayAbsenceDeduction">Full day</label></div>
   
   
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
    <label className='lbl' htmlFor="latitude">Latitude</label>
    <input className='inpuserS' type="text" name="latitude" value={values.latitude} onChange={onChange} pattern="^[0-9]{1,6}(\.[0-9]+)?$" placeholder=" 1.500" required  onBlur={handleFocus} focused={focus.latitude.toString()}/>
    <span>Please enter number</span>
    </div>
   
    <div className="col-6">
    <label className='lbl' htmlFor="longitude">Longitude</label>
    <input className='inpuserS' type="text" name="longitude" value={values.longitude} onChange={onChange} pattern="^[0-9]{1,6}(\.[0-9]+)?$" placeholder=" 2.000" required onBlur={handleFocus}  focused={focus.longitude.toString()}/>
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

export default EditConfig;