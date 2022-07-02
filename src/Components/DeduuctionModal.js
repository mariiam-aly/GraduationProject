import React, {useState,useContext,useEffect} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";
import { AuthContext } from '../Context/auth';
import { Add_shifts } from '../Utils/api2';
import {addDeduct } from '../Utils/api2';
function DeduuctionModal(props) {

const [check,setCheck]=useState(true);
const [type,setType]=useState("percent");
const [amount,setAmount]=useState(0);
const { user } = useContext(AuthContext);
const [values, setValues] = useState({
  name: "",
  amount:"",
  percent: "",
  isAll:"",

});

useEffect(() => {


setValues(
{
  name: "",
  amount:0,
  percent: 0,
  isAll:false,}
)


},[])

    
    

       
      const [focus, setFocus] = useState({
        name: "false",
        amount:"false",
        percent: "false",
        isAll:"false",
      
      });
 
      const handleSubmit = (e) => {
        e.preventDefault();
        if(type==="amount")
        {
        setValues({ ...values, amount: 0, percent: parseInt(amount) });
     
        } 
        else{
  setValues({ ...values, amount: parseInt(amount), percent: 0 });
  
  
        };
        
        addDeduct(values,user.token).then(response => {
    
          console.log(response);
          props.setOpenModal(false);
        });
   
       
      };


      const handleType = (e) => {
      console.log(e.target.value);
      setType(e.target.value);
      if(e.target.value=="amount")
      {

      setValues({ ...values, amount: parseInt(amount), percent: 0 });
      } 
      else{

        setValues({ ...values, amount: 0, percent: parseInt(amount) });

      };
    
    }

      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
       
      };

      const onChangeInt = (e) => {
        setAmount( parseInt( e.target.value));
        if(type=="amount")
        {
     
        setValues({ ...values, amount: parseInt(e.target.value), percent: 0 });
        } 
        else{
          setValues({ ...values, amount: 0, percent: parseInt(e.target.value) });
  
  
        };
   
      
      };
      const onChange2 = (e) => {
        if(document.getElementById("icd").checked==false)
        {
        setValues({ ...values, [e.target.name]: false });
        } 
        else{
  setValues({ ...values, [e.target.name]:true });

        }
      };
    
    
      const handleFocus = (e) => {
        setFocus({ ...focus, [e.target.name]: "true" });
       
      };
    return (
      <div className="modalBackground2">
      {console.log(values,type)}
        <div style={{height:"80%"}} className="modalContainer2">
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
                      
          New deducation</div>
        <form onSubmit={handleSubmit}>

          
          <div  className="AddShift">
         <div >
        
          <label htmlFor="name"></label>
          <input type="text"  name="name" placeholder=" Deducation Name "  pattern="^[a-zA-Z ]{3,100}$" value={values.name} onChange={onChange} required onBlur={handleFocus} focused={focus.name.toString()}/>
          <span> Please enter deducation name</span>
          </div>
          <div >
          <div className="deductType">
          <div className="row">
          <div className="col-6">
         
          <input id="r1" type="radio"  name="type"  value="percent"  onChange={handleType} required defaultChecked />
          <label htmlFor="isAll">Percentage</label>
       </div>
          <div className="col-6">
       
          <input id="r2" type="radio"  name="type"   value="amount"  onChange={handleType} required/>
          <label htmlFor="isAll">Amount</label>
         </div></div>
          </div>
          <label htmlFor="percent"></label>
          <input type="number"   placeholder="value"   onChange={onChangeInt} required onBlur={handleFocus}/>
          <span> Please enter amount</span>
          </div>
          <div >
        
         { /*<label htmlFor="amount"></label>
          <input type="number"  name="amount" placeholder="Amount"  value={values.amount} onChange={onChangeInt} required onBlur={handleFocus} focused={focus.amount.toString()}/>
            <span>Please enter amount</span>*/}
          </div>
          <div className="checkDeduct check">
          <input id="icd" type="checkbox"  name="isAll"    value={values.isAll} onChange={onChange2}  onBlur={handleFocus} focused={focus.isAll.toString()}/>

          <label htmlFor="isAll">For all employees</label>
        
          </div>
            </div>
          <div  className="footer">
            <button className="shiftBtn" type="submit" >
              Add new deduction
            </button>
           
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default DeduuctionModal;