import"../styles/AddUser.css"

import logo from "../assets/Titlelogo.svg"

import React, {useEffect,useState,useContext } from 'react'

import { BsSun,BsMoonStars } from "react-icons/bs";
import { EditoContext } from "../Context/EditoContext";
import { AuthContext } from '../Context/auth';
import { editUser } from '../Utils/api2'
import { useHistory,useParams } from "react-router-dom";
import { departments,JobTitles,singleUser,listData2,shifts,uploadImageUser } from '../Utils/api2';
function EditUser(){ 
  let history = useHistory();
  const {userId}= useContext(EditoContext);
  const { user } = useContext(AuthContext);
  const id = useParams().id;
  const [department,setDepartment]= useState();
const [title,setTitle]= useState();
const [load,setLoad]= useState(true);
const [users,setUsers]= useState();
const [single,setSingle]= useState();
const [shift,setShift]=useState();
const [role,setRole]=useState();
const [editData,seteditData]= useState();
const [ediImage, setEditImage] = useState();
const roles=["Admin","HR","Accountant","Normal"];
const yes=true;
const no=false
  useEffect(() => {
    console.log(id)
    departments(user.token).then(response => {
    
      setDepartment(response.data.data);
   
    });
    shifts(user.token).then(response => {
      setShift(response.data.data);
     console.log(response);})


    JobTitles(user.token).then(response => {
    
      setTitle(response.data.data);
   
    });
    singleUser(id,user.token).then(response => {
    console.log(response.data.data[0][0]);
    const role= response.data.data.role[0];
    console.log(response.data.data.role[0]);
    const userData= response.data.data[0][0];
    setSingle(userData)
    setValues({
      name: userData.name,
      phone:userData.phone,
      email: userData.email,
      department_id: userData.profile.department_id,
      job__title_id:userData.profile.job__title_id,
      supervisor :userData.supervisor,
      role:role,
      birthdate: userData.birthdate,
      scheduled:userData.vacationday.scheduled,
      unscheduled:userData.vacationday.unscheduled,
      shift_id:"1",
      can_wfh:userData.can_wfh,  
      shift_id: userData.shift_id,
      salary:userData.salary_term.salary_agreed,
    
      image: ""

    })

    });
    listData2(user.token).then(response => {
      setUsers(response.data.data);
      setLoad(false);
      });
  },[])

  const [imagePath, setImage] = useState();
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
    shift_id:"",
    can_wfh:"",  
    salary:"",
 
    image:""
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
    shift_id:"false",
    can_wfh:"false", 
    salary:"false",
  
    image:"false"
  });
  const [tmp,setTmp]= useState([]);

  const formdata =new FormData();
  
  formdata.append('image',imagePath)
  formdata.append('user_id',id)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(focus);
    const token= localStorage.getItem("token")
    editUser(id,editData,token).then(response => {
    
      console.log(response);
      uploadImageUser(formdata,user.token).then(response => {
        console.log(response)
        setEditImage(!ediImage)
      
        })

        history.push('/Userlist');
    
     })

  
   
 for (var key of formdata.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }


  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    seteditData({ ...editData, [e.target.name]: e.target.value });
    console.log(values);
  };

  const onChange2 = (e) => {
    setValues({ ...values, [e.target.name]: JSON.parse(e.target.value)});
    seteditData({ ...editData, [e.target.name]:  JSON.parse(e.target.value)});
    console.log(editData);
  };

 

  const handleFocus = (e) => {
    setFocus({ ...focus, [e.target.name]: "true" });
   
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0])
     console.log(e.target.files[0])
    };
 
 
return(        <div className="page5">
<div className="title"> <img alt="logo" src={logo} />&nbsp;Edit Employee</div>

<div className="container space">
{load? <p></p>:
<form onSubmit={handleSubmit}>

<div className="row">

<div className="col-lg-6">

<label className='lbl' htmlFor="name">Name</label>
<input className='inpuser' type="text" name="name"   value={values.name} onChange={onChange} required onBlur={handleFocus} focused={focus.name.toString()}/>
<span>Username should be 3-16 characters with phone special characters</span>
<label className='lbl' htmlFor="phone">Phone Number</label>

<input className='inpuser' type="text" name="phone" placeholder="Phone Number"  value={values.phone} onChange={onChange} required onBlur={handleFocus} focused={focus.phone.toString()}/>
<span>Phone Number should be 9 Numbers</span>
<label className='lbl' htmlFor="email">Email</label>
<input className='inpuser' type="email" name="email" placeholder="Name@Domain.com" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" value={values.email} onChange={onChange} required  onBlur={handleFocus} focused={focus.email.toString()}/>
<span>Email must be in the format Name@Domain.com</span>
<div className=" overflow-hidden">
  <div className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="department_id">Department</label>
    <select  name="department_id" value={values.department_id} onChange={onChange2} required  onBlur={handleFocus} focused={focus.department_id.toString()}>
   
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
    <select  name="job__title_id" value={values.job__title_id} onChange={onChange2} required  onBlur={handleFocus} focused={focus.job__title_id.toString()}>
    {title && title.map(data =>
      <option key={data.id} value={data.id}>{data.job_name}</option>
  )}
  </select>
  <span>Please choose job title</span>
  {/*- <div className=" rel">
  <button className="formAdd">Add new Title</button></div>*/}
 
  </div> 
  <div className="col-6 ">
  <label className='lbl' htmlFor="shift_id" >Shift</label>
  <select  name="shift_id" value={values.shift_id} onChange={onChange2} required  onBlur={handleFocus} focused={focus.shift_id.toString()}>
  {shift && shift.map(data =>
    <option key={data.id} value={data.id}>{data.name}</option>
)}
</select>
<span>Please choose shift</span>
{/*- <div className=" rel">
<button className="formAdd">Add new Title</button></div>*/}

</div> 
  <div className="col-6">
    <label className='lbl' htmlFor="supervisor">Supervisor</label>
    <select  name="supervisor" value={values.supervisor} onChange={onChange2} required  onBlur={handleFocus} focused={focus.supervisor.toString()}>
  
    {users && users.map(data =>
      <option key={data.id} value={data.id}>{data.id} {data.name}</option>
  )}
  
  </select>
<span>Please choose supervisor</span>
  </div>
  

    <div className="col-6">
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

<label className='lbl' htmlFor="image">Profile picture</label>
<input style={{padding:"15px 10px"}}  className='inpuser ' type="file" name="image" onChange={onChangeImage}    onBlur={handleFocus} focused={focus.image.toString()}/>
<span>Please upload image</span>

<div className=" overflow-hidden">
<p className="allowance">Allowance</p>
  <div className="row g-2">
    <div className="col-4">
   
<input className='inpuserA ' type="number" name="scheduled" value={values.scheduled} onChange={onChange2}  placeholder="30 Days" required onBlur={handleFocus} focused={focus.scheduled.toString()}/>
<span>Please enter number</span>
<label className='lbl2' htmlFor="scheduled">Vacation</label>

  </div>
   
    
    
    <div className="col-4">
    <input className='inpuserA ' type="number" name="unscheduled" placeholder="8 Days" value={values.unscheduled} onChange={onChange2}  required  onBlur={handleFocus} focused={focus.unscheduled.toString()}/>
    <span>Please enter number</span>
    <label className='lbl2' htmlFor="unscheduled">Unpaid Leave</label></div>
   
   
  </div>
</div>
<div className=" overflow-hidden">

<p className="allowance">Work from home</p>
  <div className="row g-2">
   
    <div className="col-6 ">
    <div className="rad ">
    <input  type="radio" id="can_wfh1" name="can_wfh" value={yes}  onChange={onChange2} defaultChecked={values.can_wfh}/>
    <label className='lblR' htmlFor="can_wfh1">Yes</label></div>
    </div>
    <div className="col-6 ">
    <div className="rad ">
    <input  type="radio" id="can_wfh2" name="can_wfh" value={no} onChange={onChange2} defaultChecked={!values.can_wfh}/>
    <label className='lblR' htmlFor="can_wfh2">No</label></div>
    </div>
   </div>
</div>

<div className=" overflow-hidden">
  <div   className="row g-2">
    <div className="col-6">
    <label className='lbl' htmlFor="salary">Basic Salary</label>
    <input className='inpuserS' type="text" name="salary" value={values.salary} onChange={onChange2}  placeholder="EGP 1.500" required  onBlur={handleFocus} focused={focus.salary.toString()}/>
    <span>Please enter number</span>
    </div>
   
    
  </div>
</div>
</div>
</div>
<div className="btns">
<button className="btn1">Cancel</button>
<button type="submit" className="btn2">Edit Employee</button>
</div>
</form>}
</div>
</div>);

}

export default EditUser;