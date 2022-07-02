import"../styles/Deduction.css"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import { getEarn, getDeduct,singleUser,salary } from '../Utils/api2';
import logo from "../assets/Titlelogo.svg"
import { AiOutlineDown, AiOutlineDelete } from "react-icons/ai";
import DeduuctionModal from "../Components/DeduuctionModal";
import {BsThreeDotsVertical} from "react-icons/bs";
import { useHistory,useParams } from "react-router-dom";
import dp from "../assets/default-profile-icon-24.jpg"
function SingleUserTransaction(){
    const [month, setMonth] = useState("jan");
    const id = useParams().id;
    const usrId = useParams().userId;
  const { user } = useContext(AuthContext);
  const [single,setSingle]= useState();
 // const [salary,setSalary]= useState();
  const [deduct,setDeduct]= useState();
  const [earn,setEarn]= useState();
  const [salaries, setSalaries] = useState([]);
  const [loading,setLoading]=useState(true);
  const [totDeduct,setTotDeduct]= useState();
  const [totEarn,setTotEarn]= useState();
useEffect(() => {
 

  singleUser(usrId,user.token).then(response => {
    const userData= response.data.data[0][0];
    setSingle(userData)
    console.log(response);
   
    setLoading(false);
   });
 

getDeduct(id,user.token).then(response => {

   console.log(response.data.data);
   setDeduct(response.data.data)
   var count=0;
   if(response.data.data){
    Object.keys(response.data.data).map((data,index) =>{
    
  

count+= parseInt(response.data.data[data].amount);

})
setTotDeduct(count)
console.log(count, "deduct")
   }
  
  });

  getEarn(id,user.token).then(response => {

    setEarn(response.data.data)
   console.log(response.data.data)

   var count=0;
   if(response.data.data){
    Object.keys(response.data.data).map((data,index) =>{
    
  

count+= parseInt(response.data.data[data].amount);

})
setTotEarn(count)
console.log(count)
   }
  
   });
   salary(user.token).then(response => {
    const slry=response.data.data;
 
 console.log(slry)
 const net_sal= slry.find((x)=>x.id== id )
    setSalaries(net_sal);
 
  });
},[])


  
return(     
  
  <>
  {loading? <div className="page6"></div>:
  <div className="page6">


<div style={{backgroundColor:"#58AA5C" }} className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Salary Slip</div></div>
<div className="details">
<img alt="profile" className="compProfile" src={single.profile.image!==null && single.profile.image!==""?single.profile.image:dp}/>
<div style={{marginLeft:"20px"}}>
<p className="compName">{single.name}</p> 
<p  className="compType">Agreed Salary: {" "+single.salary_term.salary_agreed}</p>
</div></div>
{/*
<div className="Month"> 
<div >
<p onClick={()=>setMonth("jan")} className={month=="jan"?"activeMonth":null}>January </p>
<p onClick={()=>setMonth("feb")} className={month=="feb"?"activeMonth":null}>February</p>
<p onClick={()=>setMonth("mar")} className={month=="mar"?"activeMonth":null}>March</p>
<p onClick={()=>setMonth("ap")} className={month=="ap"?"activeMonth":null}>April</p>
<p onClick={()=>setMonth("may")} className={month=="may"?"activeMonth":null}>May</p>
<p onClick={()=>setMonth("jun")} className={month=="jun"?"activeMonth":null}>June </p>
<p onClick={()=>setMonth("jul")} className={month=="jul"?"activeMonth":null}>July</p>
<p onClick={()=>setMonth("aug")} className={month=="aug"?"activeMonth":null}>August</p>
<p onClick={()=>setMonth("sep")} className={month=="sep"?"activeMonth":null}>September</p>
<p onClick={()=>setMonth("oct")} className={month=="oct"?"activeMonth":null}>October</p>
<p onClick={()=>setMonth("nov")} className={month=="nov"?"activeMonth":null}>November</p>
<p onClick={()=>setMonth("dec")} className={month=="dec"?"activeMonth":null}>December</p>
</div>
</div> */}
<div className="ssTotal">
<div >
<p>Net Salary</p>
<p className="ssTotalNum">EGP {salaries.net_salary}</p></div>
</div>



<div className="container-fluid" style={{marginTop:"2em",marginBottom:"5em"}}>
<div className="row">
<div className="col-lg-6">

<div className="slipContainer">
<div>
<div className="InDeducCenter">
<div className="DeductLogo">
InDeducations
</div>
</div>
</div>
<div style={{marginTop:"2em"}}>

{ earn && Object.keys(earn).map((data,index) =>
  <div key={index} className="breakdown">

  <p style={{width:"10vw"}}>{earn[data].title}</p>
  <hr style={{display:"inline-block",width:"12vw",height:"0.5px"}}/>
  <p style={{width:"1vw"}}>{earn[data].amount}</p>
  
  </div> 
)}
<div className="breakdown breakdownTotal">

  <p style={{width:"10vw"}}>Total</p>
  <hr style={{display:"inline-block",width:"12vw",height:"0.5px"}}/>
  <p style={{width:"1vw"}}>{totEarn}</p>
  
  </div> 

</div>
  </div>
</div>
  <div className="col-lg-6">
  <div className="slipContainer">
<div>
<div className="deducCenter">
<div className="DeductLogo">
Deducations
</div>
</div>
</div>
<div >
<div style={{marginTop:"2em"}}>
{deduct && Object.keys(deduct).map((data,index) =>
  <div key={index} className="breakdown">
  <p style={{width:"10vw"}}>{deduct[data].title}</p>
  <hr style={{display:"inline-block",width:"12vw",height:"0.5px"}}/>
  <p style={{width:"1vw"}}>{deduct[data].amount}</p>
  </div> 
)}
<div className="breakdown breakdownTotalR">

  <p style={{width:"10vw"}}>Total</p>
  <hr style={{display:"inline-block",width:"12vw",height:"0.5px"}}/>
  <p style={{width:"1vw"}}>{totDeduct}</p>
  
  </div> 

</div>
</div></div>
  </div>
  </div></div></div>} </>
);

}

export default SingleUserTransaction;