import React,{useContext,useEffect, useState} from "react";
import "../styles/Navbar.css"
import logo from"../assets/Navlogo.svg"
import { NavLink } from "react-router-dom";
import { MdSecurity,MdOutlineAccountBalanceWallet,MdSettings } from "react-icons/md";
import { RiLogoutBoxLine,RiGitPullRequestFill,RiMessage3Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsShieldFillCheck,BsFillCloudSunFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineMoneyOffCsred
} from "react-icons/md";
import { AuthContext } from '../Context/auth';
import { useHistory } from "react-router-dom";
function Nav(){
  const context = useContext(AuthContext);
const history = useHistory();
const [role,setRole]=useState("");
  function handleLogout(){
    context.logout();
    localStorage.removeItem("valid")
    history.push("/");
  }

  useEffect(() => {
  const data=localStorage.getItem("role");
  console.log(data);
if(data){
if(data=="Normal"){
  history.push("/");
}

}

  setRole(JSON.parse(data));
  const valid=localStorage.getItem("valid");
  if(valid){
  if(JSON.parse(valid).data.valid===false){
    history.push("/");
  }}
    }, [])

    return( <div className="sidebar">
   
    <div className="sidebarWrapper">
    <img src={logo} alt="BigCo Inc. logo" className="logo"/>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Managements</h3>
        { role!=="Accountant"?
        <ul className="sidebarList">
      
         <NavLink to="/dashboard" activeClassName="sidebarListItemActive"> <li className="sidebarListItem active">
         <AiFillHome className="navIcon"/>
            Home
          </li></NavLink>
        
          <NavLink to="/requests" activeClassName="sidebarListItemActive">   <li className="sidebarListItem">
          <RiMessage3Fill className="navIcon"/>
          All Requests
          </li></NavLink>
          <NavLink to="/requests-approve" activeClassName="sidebarListItemActive">  <li className="sidebarListItem">
          <BsShieldFillCheck className="navIcon"/>
            Requests to approve
          </li></NavLink>
          <NavLink to="/attendance" activeClassName="sidebarListItemActive">  <li className="sidebarListItem">
          <SiGooglesheets className="navIcon"/>
          Attendace sheet
          </li></NavLink>
        </ul>:
        <ul className="sidebarList">
      
         
          <NavLink to="/missions" activeClassName="sidebarListItemActive">  <li className="sidebarListItem">
          <RiMessage3Fill className="navIcon"/>
         Mission Requests
          </li></NavLink>
          <NavLink to="/attendance" activeClassName="sidebarListItemActive">  <li className="sidebarListItem">
          <SiGooglesheets className="navIcon"/>
          Attendace sheet
          </li></NavLink>
         
        </ul>
      
      
      }
      </div>


      <div className="sidebarMenu" style={{marginTop:"1.5em"}}>
      <h3 className="sidebarTitle">Settings</h3>
      { role!=="Accountant"?
      <ul className="sidebarList">
    
      <NavLink to="/salary" activeClassName="sidebarListItemActive"> <li className="sidebarListItem ">
       <FaMoneyCheckAlt className="navIcon"/>
       Salary settings
        </li></NavLink> 
      
        <NavLink to="/vacation" activeClassName="sidebarListItemActive"> 
        <li className="sidebarListItem">
        <BsFillCloudSunFill className="navIcon"/>
        Vacations
        </li></NavLink>
        <NavLink to="/config" activeClassName="sidebarListItemActive"> 
        <li className="sidebarListItem">
        <MdSettings className="navIcon"/>
        Company Settings
        </li></NavLink>
      </ul>: 
      <ul className="sidebarList">
    
      <NavLink to="/salary" activeClassName="sidebarListItemActive"> <li className="sidebarListItem ">
          <FaMoneyCheckAlt className="navIcon"/>
          Salary settings
           </li></NavLink> 
           <NavLink to="/deductions" activeClassName="sidebarListItemActive"> <li className="sidebarListItem ">
           <MdOutlineMoneyOffCsred className="navIcon"/>
          Deductions
            </li></NavLink> 
        
      </ul>
    
    }
    </div>

      </div>
   <button onClick={handleLogout} className="logOutBtn"><RiLogoutBoxLine className="navIcon"/> Log Out</button>
     </div>)
}

export default Nav;