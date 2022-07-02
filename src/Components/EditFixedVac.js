import React, {useState,useContext,useEffect} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";
import { AuthContext } from '../Context/auth';
import { Add_shifts } from '../Utils/api2';
import { fixedV_edit,fixedV} from '../Utils/api2';

function EditFixed(props) {

const [check,setCheck]=useState(true);
const [weekend,setWeekend]=useState([]);
const { user } = useContext(AuthContext);
       const [values, setValues] = useState({
        name: "",
       date:"",
     
 
      });
      const [focus, setFocus] = useState({
        name: "false",
        date:"false",
      
      
      });
 

      useEffect(() => {
        console.log(user.token);
        fixedV(user.token).then(response => {
          setWeekend(response.data.data);
       console.log((response.data.data));
     
        })

   
     
      
      },[])


      useEffect(() => {
   
        var form = document.getElementById("weekend"),
        inputs = form.getElementsByTagName("input")
    
    for (var i = 0, max = inputs.length; i < max; i += 1) {
       // Take only those inputs which are checkbox
    
       if (weekend.includes((inputs[i].value))) {
       
        form.getElementsByTagName("input")[i].checked = true;
       }
    }

     
      
      },[weekend])

      const handleSubmit = (e) => {
        e.preventDefault();
       /* console.log(values);
        console.log(focus);
      
        addVacation(values,user.token).then(response => {

            console.log(response);
            props.setOpenModal(false);
           });*/

           var form = document.getElementById("weekend"),
           inputs = form.getElementsByTagName("input"),
           arr = [];
       
       for (var i = 0, max = inputs.length; i < max; i += 1) {
          // Take only those inputs which are checkbox
          if (inputs[i].type === "checkbox" && inputs[i].checked) {
             arr.push(inputs[i].value);
          }
       }

       var data={
     days: arr
       }

       fixedV_edit(data,user.token).then(response => {
           
        console.log(response);
        props.setFixedModal(false);
       
         })
      };
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
       
      };
    
      const handleFocus = (e) => {
        setFocus({ ...focus, [e.target.name]: "true" });
       
      };
    return (
      <div className="modalBackground2">
        <div style={{height:"450px"}} className="modalContainer2">
          <div className="titleCloseBtn">
            <button className="cls2"
            onClick={() => {
               props.setFixedModal(false);
              
              }}
            >
              <GoX  color="#E80B0B"></GoX>
            </button>
          </div>
          <div className="cardTitleM">
                      
        {props.title}</div>
        <form id={"weekend"} onSubmit={handleSubmit}>

         
          <div  className="AddShift">
         <div className="weekendDays">
        <div>
        <input type="checkbox"  value="Saturday"/>
          <label htmlFor="name">Saturday</label>
        
          </div>
          <div>
          <input type="checkbox"  value="Sunday"/>
          <label htmlFor="name">Sunday</label>
        
          </div>
          <div>
          <input type="checkbox"  value="Monday"/>
          <label htmlFor="name">Monday</label>
       
          </div>
          <div>
          <input type="checkbox"  value="Tuesday"/>
          <label htmlFor="name">Tuesday</label>
      
          </div>
          <div>
          <input type="checkbox"  value="Wednesday"/>
          <label htmlFor="name">Wednesday</label>
    
          </div>
          <div>
          <input type="checkbox"  value="Thursday"/>
          <label htmlFor="name">Thursday</label>
      
          </div>
          <div>
          <input type="checkbox"  value="Friday"/>
          <label htmlFor="name">Friday</label>
        
          </div>
      
       </div>
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
  
  export default EditFixed;