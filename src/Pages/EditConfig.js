import"../styles/AddUser.css"

import logo from "../assets/Titlelogo.svg"

import React, {useEffect,useState,useContext } from 'react'

import { BsSun,BsMoonStars } from "react-icons/bs";
import { EditoContext } from "../Context/EditoContext";
import { AuthContext } from '../Context/auth';
import { editConfig } from '../Utils/api2'
import { CompanyConfig } from '../Utils/api2';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function EditConfig(){
  let history = useHistory();
  const { user } = useContext(AuthContext);
  const [department,setDepartment]= useState();
const [title,setTitle]= useState();
const [users,setUsers]= useState();
const [single,setSingle]= useState()
const [editData,seteditData]= useState();;
const roles=["Admin","HR","Accountant","Normal"];
  useEffect(() => {
    CompanyConfig(user.token).then(response => {
      const test=response.data.data;
   
      setValues({
        company_name: test.company_name,
        company_phone:test.company_phone,
        company_email: test.company_email,
        specifity:test.specifity,
        branches :test.branches,
        distance:test.distance,
        country: test.country,
        location:test.location,
        LatePeriod:test.LatePeriod,
        halfDayAbsenceDeduction:test.halfDayAbsenceDeduction,
        fullDayAbsenceDeduction:test.fullDayAbsenceDeduction,  
        latitude:test.latitude,
        longitude:test.longitude
      });     
   console.log(response.data.data)
    });   
 
  },[])
  const [values, setValues] = useState({
    company_name: "",
    company_phone:"",
    company_email: "",
    specifity:"",
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
    specifity:"false",
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
    const token= localStorage.getItem("token")
    editConfig(editData,token).then(response => {
    
      console.log(response);
     history.push('/config');
     })
   
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    seteditData({ ...editData, [e.target.name]: e.target.value });
   
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
<input className='inpuser' type="text" name="company_name"   placeholder="company_name " value={values.company_name} onChange={onChange} required onBlur={handleFocus} focused={focus.company_name.toString()}/>
<span>Please enter company name</span>


<label className='lbl' htmlFor="specificity">Specifity </label>
<input className='inpuser' type="text" name="specifity"   placeholder="Company Specifity" value={values.specifity} onChange={onChange} required onBlur={handleFocus} focused={focus.specifity.toString()}/>
<span>Please enter company specifity</span>


<label className='lbl' htmlFor="company_phone">Phone Number</label>
<input className='inpuser' type="text" name="company_phone" placeholder="Phone Number"  value={values.company_phone} onChange={onChange} required onBlur={handleFocus} focused={focus.company_phone.toString()}/>
<span>Please enter company phone number</span>


<label className='lbl' htmlFor="company_email">Email</label>
<input className='inpuser' type="email" name="company_email" placeholder="Name@Domain.com" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" value={values.company_email} onChange={onChange} required  onBlur={handleFocus} focused={focus.company_email.toString()}/>
<span>Email must be in the format Name@Domain.com</span>



<div className=" overflow-hidden">
  <div className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="branches">Branches</label>
    <input className='inpuser' type="number" name="branches" placeholder="Branches" value={values.branches} onChange={onChange} required  onBlur={handleFocus} focused={focus.branches.toString()}/>
    <span>Please enter number of branches</span>
  </div>
   
    <div className="col-6 ">
    <label className='lbl' htmlFor="distance">Distance</label>
    <input className='inpuser' type="number" name="distance" placeholder="distance" value={values.distance} onChange={onChange} required  onBlur={handleFocus} focused={focus.distance.toString()}/>
    <span>Please enter company distance</span>
  </div> 
  <div className="col-6">
  <label className='lbl' htmlFor="country">Country</label>
  <input className='inpuser' type="text" name="country" placeholder="country"  value={values.country} onChange={onChange} required  onBlur={handleFocus} focused={focus.country.toString()}/>
  <span>Please enter company origin country</span>
  </div>
  

    <div  className="col-6">
    <label className='lbl' htmlFor="location">Location</label>
    <input className='inpuser' type="text" name="location" placeholder="location" value={values.location} onChange={onChange} required  onBlur={handleFocus} focused={focus.location.toString()}/>
    <span>Please enter company location</span>
  </div>
    
  </div>
</div>
</div>
<div className="col-lg-6">
<label className='lbl' htmlFor="LatePeriod">Time allowed for latency - In minutes -</label>
<input  className='inpuser ' type="number" name="LatePeriod" value={values.LatePeriod} onChange={onChange} placeholder="dd-mm-yyyy" required  onBlur={handleFocus} focused={focus.LatePeriod.toString()}/>
<span>Please enter time allowed for latency</span>
<div className=" overflow-hidden">
<p className="allowance">Deductions</p>
  <div className="row g-2">
    <div className="col-4">
   
<input className='inpuserA ' type="text" name="halfDayAbsenceDeduction" value={values.halfDayAbsenceDeduction} onChange={onChange} placeholder="30" required onBlur={handleFocus} focused={focus.halfDayAbsenceDeduction.toString()}/>
<span>Please enter deduction amount</span>
<label className='lbl2' htmlFor="halfDayAbsenceDeduction">Half day</label>

  </div>
   
    
    
    <div className="col-4">
    <input className='inpuserA ' type="text" name="fullDayAbsenceDeduction" placeholder="8" value={values.fullDayAbsenceDeduction} onChange={onChange} required  onBlur={handleFocus} focused={focus.fullDayAbsenceDeduction.toString()}/>
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
    <input className='inpuserS' type="text" name="latitude" value={values.latitude} onChange={onChange} placeholder=" 1.500" required  onBlur={handleFocus} focused={focus.latitude.toString()}/>
    <span>Please enter number</span>
    </div>
   
    <div className="col-6">
    <label className='lbl' htmlFor="longitude">Longitude</label>
    <input className='inpuserS' type="text" name="longitude" value={values.longitude} onChange={onChange} placeholder=" 2.000" required onBlur={handleFocus}  focused={focus.longitude.toString()}/>
    <span>Please enter number</span>
   </div>
  </div>
</div>
</div>
</div>
<div className="btns">
<Link to="/config" style={{marginRight:"1em"}}><button className="btn1">Cancel</button></Link>
<button type="submit" className="btn2">Edit Configuration</button>
</div>
</form>
</div>
</div>);

}

export default EditConfig;