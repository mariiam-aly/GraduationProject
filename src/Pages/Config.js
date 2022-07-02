
import React, {useState,useEffect,useContext} from "react";

import { CompanyConfig,listData2,departments,shifts,vacation,JobTitles,deduct,uploadImage } from '../Utils/api2';
import { AuthContext } from '../Context/auth';
import"../styles/Config.css"
import logo from "../assets/Titlelogo.svg"
import { MdSecurity} from "react-icons/md";
import dp from "../assets/default-profile-icon-24.jpg"
import arrow from "../assets/Arrow.svg"
import arrowb from "../assets/Arrowb.svg"
import arrowr from "../assets/Arrowr.svg"
import arrowl from "../assets/Arrowl.svg"
import arrowv from "../assets/Arrowv.svg"
import arrowd from "../assets/Arrowd.svg"
import {Link} from "react-router-dom"
function Config(){
     const { user } = useContext(AuthContext);
     const [con,setConfig]= useState([]);
     const [role,setRole]= useState([]);
     const[usrs,setUsrs]= useState(0);
     const[dep,setDep]= useState(0);
     const[jt,setJt]= useState(0);
     const[shfts,setShfts]= useState(0);
     const[deduc,setDeduc]= useState(0);
     const[vcns,setVcns]= useState(0);
     const [imagePath, setImage] = useState();
     const [ediImage, setEditImage] = useState();
     const d = new Date();
     let month = d.getMonth();
   
     useEffect(() => {
          const data=localStorage.getItem("role");
          setRole(JSON.parse(data));
          CompanyConfig(user.token).then(response => {
            const test=response.data.data;
         
            setConfig(test);     
         console.log(response.data.data)
          });   
        

          listData2(user.token).then(response => {
               const usersL=response.data.data;
            if(usersL){
              setUsrs(usersL.length)
            }
             });


             departments(user.token).then(response => {
               const deps=response.data.data;
               if(deps){
                    setDep(deps.length)
                  }
            
             });
             shifts(user.token).then(response => {
               const shfts=response.data.data;
               if(shfts){
                    setShfts(shfts.length)
                  }
            
             });
             vacation(month+1,user.token).then(response => {
               const vccnL=response.data.data;
               if(vccnL){
                    setVcns(vccnL.length);
                  }
           
             });
             JobTitles(user.token).then(response => {
               const jtL=response.data.data;
               if(jtL){
                    setJt(jtL.length);
                  }
            
             });
             deduct(user.token).then(response => {
               const test=response.data.data;
               if(test){
                    setDeduc(test.length);
                  }
             })
               
           
        },[ediImage])

function upload(e){
    
     e.preventDefault();
    const formdata =new FormData();

    formdata.append('image',imagePath)
const body={
image: formdata

}
for (var key of formdata.entries()) {
     console.log(key[0] + ', ' + key[1]);
 }
     uploadImage(formdata,user.token).then(response => {
        console.log(response)
        setEditImage(!ediImage)
        })
          
}

const onChangeImage = (e) => {
   setImage(e.target.files[0])
    console.log(e.target.files[0])
   };
 

return(        <div className="page6">
<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src={con.photo!==null && con.photo!==" "?con.photo:dp}/>

<div style={{marginLeft:"20px"}}>{console.log(role)}
<p className="compName">{con.company_name}</p>{role==="Admin"?  <Link to="/editconfig"> <button className="edit">Edit</button></Link>:null}
<p style={ ediImage?{margin:"0"}:null} className="compType">{con.specifity}</p>{ !ediImage?
<p onClick={()=>setEditImage(true)} className="compType comptEdit">Edit Image?</p>:

<form className="compImage" onSubmit={(e)=>upload(e)} method="HTTP_METHOD" enctype="multipart/form-data">

<input className='inpuser ' type="file" name="image"  onChange={onChangeImage} />
<button type="submit" className="update">Upload</button> <button className="cancel" onClick={()=>setEditImage(false)}>Cancel</button>
</form>
}
</div></div>
<div className="generalInfo">
<MdSecurity style={{marginLeft:"22px"}} color="#0B1963"/>&nbsp;<p className="genText">General Information</p></div>
<div className="compInfo">{/*
<form onSubmit={(e)=>upload(e)} method="HTTP_METHOD" enctype="multipart/form-data">
<input style={{padding:"15px 10px"}}  className='inpuser ' type="file" name="image"  onChange={onChangeImage} />
<button type="submit">upload</button>
</form>*/}
<table style={{width:"100%"}}>
<thead>
<tr>
<th><p className="infoTitle">Name</p></th>
<th><p className="infoTitle">specificity</p></th>
<th><p className="infoTitle">Company Email</p></th>
<th><p className="infoTitle">Company Phone</p></th>
<th><p className="infoTitle">Branches</p></th>
<th><p className="infoTitle">Country</p></th>
</tr></thead>
<tbody>
<tr>
<td><p className="infoTitle2">{con.company_name}</p></td>
<td><p className="infoTitle2">{con.specifity}</p></td>
<td><p className="infoTitle2">{con.company_email}</p></td>
<td><p className="infoTitle2">{con.company_phone}</p></td>
<td><p className="infoTitle2">{con.branches}</p></td>
<td><p className="infoTitle2">{con.country}</p></td>
  </tr></tbody>
</table>
</div>
<div style={{marginTop:'50px', marginBottom:"50px"}} className="container">
  <div className="row gy-5">
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className=" control"><div className="borderDecor"><div></div><img alt="" className="arrow"  src={arrow}/><p className="number ">{usrs}</p> <p className="category ">Employees</p></div></div>
 <div className="buttons">
 <Link to="/Userlist"> <button className="view">View</button></Link>
 <Link to="/adduser"> <button className="add addG">Add Employee</button></Link> </div>
      </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor dep2"><div></div><img alt="" className="arrow"  src={arrowb}/><p className="number blue">{dep}</p> <p className="category bl">Departments</p></div></div>
    <div className="buttons">
    <Link to="/department"> <button className="view viewb">View</button></Link>
         <Link to="/department"> <button className="add addb">Add Department</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor tit"><div></div><img alt="" className="arrow"  src={arrowr}/><p className="number red">{jt}</p> <p className="category re">Job Titles</p></div></div>
    <div className="buttons">
    <Link to="/jobtitle">    <button className="view viewr">View</button> </Link>
         <Link to="/jobtitle">  <button className="add addr">Add Title</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor shft"><div></div><img alt="" className="arrow"  src={arrowl}/><p className="number lilac">{shfts}</p> <p className="category lil">Shifts</p></div></div>
    <div className="buttons">
    <Link to="/shift">   <button className="view viewl">View</button> </Link>
         <Link to="/shift">   <button className="add addl">Add Shift</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor vccn"><div></div><img alt="" className="arrow"  src={arrowv}/><p className="number vccnB">{vcns}</p> <p className="category BVccn">Vacations</p></div></div>
    <div className="buttons">
    <Link to="/vacation">   <button className="view viewV">View</button></Link>
    <Link to="/vacation">      <button className="add addV">Add Vacation</button></Link></div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className=" control"><div className="borderDecor ddct"><div></div><img alt="" className="arrow"  src={arrowd}/><p className="number ddctB">{deduc}</p> <p className="category BDdct">Deducations</p></div></div>
    <div className="buttons">
    <Link to="/deductions">  <button className="view viewD">View</button></Link>
         <Link to="/deductions">   <button className="add addD">Add Deducations</button></Link></div>
    </div>
  </div> 
</div>
</div>);

}

export default Config;