import React,{useContext} from "react";
import "../styles/Navbar.css"
import logo from"../assets/Navlogo.svg"
import { NavLink } from "react-router-dom";
import { MdSecurity,MdOutlineAccountBalanceWallet,MdSettings } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AuthContext } from '../Context/auth';
function Nav(){
  const context = useContext(AuthContext);
  function handleLogout(){
    context.logout();

  }

    return( <div className="sidebar">
   
    <div className="sidebarWrapper">
    <img src={logo} alt="BigCo Inc. logo" className="logo"/>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Managements</h3>
        <ul className="sidebarList">
      
         <NavLink to="/page" activeClassName="sidebarListItemActive"> <li className="sidebarListItem active">
         <MdSecurity className="navIcon"/>
            Home
          </li></NavLink>
        
          <NavLink to="/page3" activeClassName="sidebarListItemActive">   <li className="sidebarListItem">
          <MdOutlineAccountBalanceWallet className="navIcon"/>
          All Requests
          </li></NavLink>
          <NavLink to="/page4" activeClassName="sidebarListItemActive">  <li className="sidebarListItem">
          <MdSettings className="navIcon"/>
            Requests to approve
          </li></NavLink>
          <NavLink to="/attendance" activeClassName="sidebarListItemActive">  <li className="sidebarListItem">
          <MdSettings className="navIcon"/>
          Attendace sheet
          </li></NavLink>
        </ul>
      </div>


      <div className="sidebarMenu" style={{marginTop:"1.5em"}}>
      <h3 className="sidebarTitle">Settings</h3>
      <ul className="sidebarList">
    
      <NavLink to="/salary" activeClassName="sidebarListItemActive"> <li className="sidebarListItem ">
       <MdSecurity className="navIcon"/>
       Salary settings
        </li></NavLink> 
      
        <NavLink to="/salary" activeClassName="sidebarListItemActive"> 
        <li className="sidebarListItem">
        <MdOutlineAccountBalanceWallet className="navIcon"/>
        Vacations
        </li></NavLink>
        <NavLink to="/config" activeClassName="sidebarListItemActive"> 
        <li className="sidebarListItem">
        <MdOutlineAccountBalanceWallet className="navIcon"/>
        Company Settings
        </li></NavLink>
      </ul>
    </div>

      </div>
   <button onClick={handleLogout} className="logOutBtn"><RiLogoutBoxLine className="navIcon"/> Log Out</button>
     </div>)
}

export default Nav;