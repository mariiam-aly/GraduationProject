import React, {useState,useContext} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";
import { AuthContext } from '../Context/auth';
import { Add_shifts } from '../Utils/api2';
import { editVacation} from '../Utils/api2';
function EditVac(props) {

const [check,setCheck]=useState(true);
const { user } = useContext(AuthContext);


       const [values, setValues] = useState({
        name: props.editData.name,
       date:props.editData.date,
     
  
      });
      const [focus, setFocus] = useState({
        name: "false",
        date:"false",
      
      
      });
 
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        console.log(focus);
      
        editVacation(props.editData.id,values,user.token).then(response => {

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
        <div style={{height:"432px"}} className="modalContainer2">
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
          <input type="text"  name="name" placeholder="Vacation Name"  pattern="^[a-zA-Z ]{3,100}$" value={values.name} onChange={onChange} required onBlur={handleFocus} focused={focus.name.toString()}/>
          <span>Please enter Vacation name</span>
          </div>
          <label htmlFor="start_time"></label>
          <input className="start" type="date" name="date" value={values.date} onChange={onChange} required  onBlur={handleFocus} focused={focus.date.toString()} min={new Date().toISOString().split('T')[0]} />
          <span>Please pick Date</span>
       
           </div>
          <div  className="footer">
            <button className="shiftBtn" type="submit" >
              Edit Vacation
            </button>
           
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default EditVac;