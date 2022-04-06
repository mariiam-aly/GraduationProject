import React, {useState,useEffect,useRef} from "react";
import "../styles/Modal.css"
import AxiosProvider from "../AxiosProvider";
import { GoX } from "react-icons/go";
import mlogo from "../assets/miniLogo.svg"
function Modal(props) {

    const fUserRef = useRef();
    const lUserRef = useRef();
   
const [firstName,setFirstName]= useState();
const [lastName,setLastName]= useState();
const [email,setEmail]= useState();
    useEffect(async() => {
        await AxiosProvider.get(`/users/${props.id}`).then(response => {
          const toBeEdited=response.data.data.first_name;
          const toBeEdited2=response.data.data.last_name;
          const toBeEdited3=response.data.data.email;
          setFirstName(toBeEdited);
          setLastName(toBeEdited2);
          setEmail(toBeEdited3);
   
       
        });
      },[])

      async function handleSubmit(event) {
        props.setOpenModal(false);
        const fname = fUserRef.current.value;
        const lname = lUserRef.current.value;
     await AxiosProvider.patch(`/users/${props.id}`, {
        id: props.id,
        email: email,
        first_name: fname,
        last_name: lname
      })
      .then(response => {
        props.doneEdit(props.id,response.data); 
        console.log(response.data);
         });  
    
       }


    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button className="cls"
            onClick={() => {
               props.setOpenModal(false);
           
              }}
            >
              <GoX  color="#E80B0B"></GoX>
            </button>
          </div>
          <div className="cardTitleM">
                      
          <img src={mlogo} style={{minHeight:"30px"}} />&nbsp;Mission Requests</div>
          <form onSubmit={handleSubmit}>
          <div className="body">
         
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}  ref={fUserRef}></input>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}  ref={lUserRef}></input>
            
      
            </div>
          <div className="footer">
            <button
            onClick={() => {
                props.setOpenModal(false);
               }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button type="submit">Confirm</button>
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Modal;