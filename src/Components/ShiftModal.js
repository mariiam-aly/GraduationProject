import React, {useState,useContext} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";
import { AuthContext } from '../Context/auth';
import { Add_shifts } from '../Utils/api2';
function ShiftModal(props) {

const [check,setCheck]=useState(true);
const { user } = useContext(AuthContext);
       const [values, setValues] = useState({
        name: "",
        start_time:"",
        midday: "",
        end_time:"",
 
      });
      const [focus, setFocus] = useState({
        name: "false",
        start_time:"false",
        midday: "false",
        end_time:"false",
      
      });
 
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        console.log(focus);
        Add_shifts(values,user.token).then(response => {
    
          console.log(response);
          props.setOpenModal(false);
        });
   
       
      };
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
       
      };
    
      const handleFocus = (e) => {
        setFocus({ ...focus, [e.target.name]: "true" });
       
      };
    return (
      <div className="modalBackground2">
        <div style={{height:"672px"}} className="modalContainer2">
          <div className="titleCloseBtn">
            <button className="cls2"
            onClick={() => {
               props.setOpenModal(false);
              
              }}
            >
              <GoX  color="#E80B0B"></GoX>
            </button>
          </div>
          <div className="cardTitleM">
                      
        {props.title}</div>
        <form onSubmit={handleSubmit}>

         
          <div  className="AddShift">
         <div >
        
          <label htmlFor="name"></label>
          <input type="text"  name="name" placeholder="Shift Name"  pattern="^[a-zA-Z ]{3,100}$" value={values.name} onChange={onChange} required onBlur={handleFocus} focused={focus.name.toString()}/>
          <span>Please enter shift name</span>
          </div>
          <label htmlFor="start_time"></label>
          <input className="start" type="time" step="2" max={values.midday}  name="start_time" value={values.start_time} onChange={onChange} required  onBlur={handleFocus} focused={focus.start_time.toString()}/>
          <span>Start time can't exceed midday time</span>
           <label  htmlFor="midday"></label>
           <input className="mid" type="time" step="2" min={values.start_time} name="midday" value={values.midday} onChange={onChange} required  onBlur={handleFocus} focused={focus.midday.toString()}/>
           <span> Midday time must exceed start time</span>
           <label  htmlFor="end_time"></label>
           <input className="end" type="time" step="2" min={values.midday} name="end_time" value={values.end_time} onChange={onChange} required  onBlur={handleFocus} focused={focus.end_time.toString()}/>
           <span> End time must exceed Midday time</span>
           </div>
          <div  className="footer">
            <button className="shiftBtn" type="submit" >
              Add new shift
            </button>
           
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default ShiftModal;