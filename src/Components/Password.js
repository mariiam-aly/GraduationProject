import React, {useState,useContext} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";
import { AuthContext } from '../Context/auth';
import { Add_shifts } from '../Utils/api2';
import { Link } from "react-router-dom";
function Password(props) {

const [check,setCheck]=useState(true);
const { user } = useContext(AuthContext);

 
     
 
    return (
      <div className="modalBackground2">
        <div style={{height:"272px"}} className="modalContainer2">
          <div className="titleCloseBtn">
            <button className="cls2"
            onClick={() => {
               props.setModal(false);
              
              }}
            >
              <GoX  color="#E80B0B"></GoX>
            </button>
          </div>
          <div className="passBody">
          <div className="pass">
            <p> User Password is: {" "+props.pass}</p>  </div>

              <Link to="/Userlist"><button className="Confirm">Confirm</button></Link> 
    
        </div></div>
      </div>
    );
  }
  
  export default Password;