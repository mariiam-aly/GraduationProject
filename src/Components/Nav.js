import React from "react";
import "../styles/Navbar.css"
import logo from"../assets/Navlogo.svg"

import { MdSecurity,MdOutlineAccountBalanceWallet,MdSettings } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

function Nav(){

    return( <div className="sidebar">
   
    <div className="sidebarWrapper">
    <img src={logo} alt="BigCo Inc. logo" className="logo"/>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Managements</h3>
        <ul className="sidebarList">
      
          <li className="sidebarListItem active">
         <MdSecurity className="navIcon"/>
            All Requests
          </li>
        
          <li className="sidebarListItem">
          <MdOutlineAccountBalanceWallet className="navIcon"/>
            Payroll
          </li>
          <li className="sidebarListItem">
          <MdSettings className="navIcon"/>
            Company Settings
          </li>
        </ul>
      </div>


      <div className="sidebarMenu" style={{marginTop:"30%"}}>
      <h3 className="sidebarTitle">Policies</h3>
      <ul className="sidebarList">
    
        <li className="sidebarListItem active">
       <MdSecurity className="navIcon"/>
          All Requests
        </li>
      
        <li className="sidebarListItem">
        <MdOutlineAccountBalanceWallet className="navIcon"/>
          Payroll
        </li>
        <li className="sidebarListItem">
        <MdSettings className="navIcon"/>
          Company Settings
        </li>
      </ul>
    </div>

      </div>
     <a href="/"> <button className="logOutBtn"><RiLogoutBoxLine className="navIcon"/> Log Out</button>
     </a> </div>)
}

export default Nav;