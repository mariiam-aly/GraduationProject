import React, {useState,useContext,useEffect} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";
import { AuthContext } from '../Context/auth';
import { shifts,Edit_shifts } from '../Utils/api2';
function EditShift(props) {

const [check,setCheck]=useState(true);
const { user } = useContext(AuthContext);
const [shift,setShift]=useState();
const [shiftID,setShiftId]=useState();
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
      useEffect(() => {
        shifts(user.token).then(response => {
          setShift(response.data.data[props.id-1]);
         console.log(response.data.data);
      
         setValues({
     
            name: response.data.data[props.id-1].name,
            start_time: response.data.data[props.id-1].start_time,
            midday: response.data.data[props.id-1].midday,
            end_time:response.data.data[props.id-1].end_time,

         })
        });
       
      },[]) 
 
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        console.log(focus);
        Edit_shifts(props.id,values,user.token).then(response => {
    
          console.log(response);
          props.setEditModalOpen(false);
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
               props.setEditModalOpen(false);
              
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
          <input className="start" type="time" name="start_time" value={values.start_time} onChange={onChange} required  onBlur={handleFocus} focused={focus.start_time.toString()}/>
          <span>Please pick start time</span>
           <label  htmlFor="midday"></label>
           <input className="mid" type="time" name="midday" value={values.midday} onChange={onChange} required  onBlur={handleFocus} focused={focus.midday.toString()}/>
           <span>Please pick midday time</span>
           <label  htmlFor="end_time"></label>
           <input className="end" type="time" name="end_time" value={values.end_time} onChange={onChange} required  onBlur={handleFocus} focused={focus.end_time.toString()}/>
           <span>Please pick end time</span>
           </div>
          <div  className="footer">
            <button className="shiftBtn" type="submit" >
              Confirm Edit
            </button>
           
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default EditShift;