import"../styles/Deduction.css"
import React, {useState,useEffect,useContext} from "react";
import { AuthContext } from '../Context/auth';
import {CompanyConfig,deduct ,deleteDeduct} from '../Utils/api2';
import logo from "../assets/Titlelogo.svg"
import {  AiOutlineDelete } from "react-icons/ai";
import DeduuctionModal from "../Components/DeduuctionModal";
import {BsThreeDotsVertical} from "react-icons/bs";
import dp from "../assets/default-profile-icon-24.jpg"

function Deductions(){
    const [modalOpen, setModalOpen] = useState(false);
    const [deductions, setDeductions] = useState(false);
    const [del, setDel] = useState(false);
    const [con,setConfig]= useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    CompanyConfig(user.token).then(response => {
      const test=response.data.data;
   
      setConfig(test);     
   console.log(response.data.data)
    });  
    deduct(user.token).then(response => {
      const test=response.data.data;
      setDeductions(test);
    console.log(test)
    })}
      
      
      ,[modalOpen,del])

function handleDelete(id){
  deleteDeduct(id,user.token).then(response => {
 
  console.log(response)
  setDel(!del);
  })

}

  
return(        <div className="page6">
{modalOpen && <DeduuctionModal  setOpenModal={setModalOpen} />}

<div className="contitle"><div className="contitle2"> <img alt="logo" src={logo} />&nbsp;Company Configurations</div></div>
<div className="details">
<img alt="profile" className="compProfile" src={con.photo!==null && con.photo!==" "?con.photo:dp}/>
<div style={{marginLeft:"20px"}}>
<p className="compName">{con.company_name}</p> 
<p className="compType">{con.specifity}</p></div></div>
<div>
<p className="shift">Company Configurations 	&gt; General Informations 	&gt; </p>&nbsp;<p className="shiftB">Deducations</p>
<div>
<div className="DeductLogo">
<img alt="logo" src={logo} /> &nbsp;Deducations
</div>
<button  onClick={()=>setModalOpen(true)} className="addDep">Add Deducations</button>
</div> 
</div>
<div className="container">
<table style={{margin:"3em 0"}} className="table ">
  <thead>
    <tr >
      <th scope="col">Name</th>
      <th scope="col">Apply to all</th>
      <th scope="col">Percentage</th>
   
      <th scope="col">Amount</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {deductions && deductions.map((data,index) =>

    <tr key={(index)}> 
      
    <td className="deductName">{data.name}</td>
    {data.isAll=="1"?
  
    <td className="alignTd"><p  className="true">True</p></td>:
    <td className="alignTd"><p className="false">False</p></td>
  }
   
    <td>{data.percent}%</td>
    <td> {data.amount}</td>
    <td> <div className="dropdownDed ">
    <button className="dropbtnDed " onClick={()=>handleDelete(data.id)}> <AiOutlineDelete  size={30}/> </button>
    
  </div></td>
  </tr>)}
  
    {/*<tr> 
      
      <td>Taxes</td>
      <td className="alignTd"><p  className="true">True</p></td>
      <td>14%</td>
      <td> --</td>
      <td> <div className="dropdownDed ">
      <button className="dropbtnDed "> <BsThreeDotsVertical  size={30}/> </button>
      <div className="dropdownDed-content">
      <p onClick={()=>setModalOpen(true)}>Add</p>
      <p  >Delete</p>
      
      </div>
    </div></td>
    </tr>
    <tr>
    
      <td>Taxes</td>
      <td className="alignTd"><p className="false">False</p></td>
      <td>--</td>
      <td>1300 LE</td>
      <td> <div className="dropdownDed ">
      <button className="dropbtnDed "> <BsThreeDotsVertical  size={30}/> </button>
      <div className="dropdownDed-content">
      <p onClick={()=>setModalOpen(true)}>Add</p>
      <p  >Delete</p>
      
      </div>
    </div></td>
    </tr>*/}
  
  
  </tbody>
</table>
</div>
  </div>

);

}

export default Deductions;