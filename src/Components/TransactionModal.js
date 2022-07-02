import React, {useState,useContext,useEffect} from "react";
import "../styles/ShiftModal.css"
import { GoX } from "react-icons/go";
import { AuthContext } from '../Context/auth';
import { Add_shifts,deduct,deducting } from '../Utils/api2';
function TransactionModal(props) {

const [check,setCheck]=useState(true);

const [loading,setLoading]=useState(true);
const [deduction,setDeduct]=useState(true);
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
  id:"",
  percent: 0,
 }
)


},[])


       
const [focus, setFocus] = useState({
  name: "false",
  amount:"false",
  id:"false",
  percent: "false",


});


      useEffect(() => {
        deduct(user.token).then(response => {
         const test=response.data.data;
      
         setDeduct(test);
         setLoading(false);
        console.log(test);
      
       });
     
       
  
     },[])
     const handleSubmit = (e) => {
      e.preventDefault();
    /*  if(type==="amount")
      {
      setValues({ ...values, amount: 0, percent: parseInt(amount) });
   
      } 
      else{
setValues({ ...values, amount: parseInt(amount), percent: 0 });


      };*/
      var body={};

      if(amount && type=="percent"){
       body={

        percent:amount,
        salary_adjustment_type_id:values.id,
   
      }}

      else if(amount && type=="amount"){
        body={
 
         amount:amount,
         salary_adjustment_type_id:values.id,
    
        }}
       else{
        body={
        salary_adjustment_type_id:values.id

       } }

      console.log(body);
 
      props.ids.map((data)=>{
      
        deducting(data,body,user.token).then(response => {
    console.log(response);
    props.setOpenModal(false);
    });});
    


    };
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
    
      const handleFocus = (e) => {
        setFocus({ ...focus, [e.target.name]: "true" });
       
      };
    return (
      <div className="modalBackground2">
      {loading?<p></p>:
        <div  className="modalContainer2">
        {console.log(props.ids)}
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
        <form onSubmit={handleSubmit} style={{marginTop:"2em"}}>

          
          <div  className="AddShift Transaction">
         <div >
         <select name="id" value={values.id} onChange={onChange} required  onBlur={handleFocus} focused={focus.id.toString()}>
         <option  value='' disabled>Select Deduction</option>
      
         {deduction && deduction.map(data =>
          
          <option key={data.id} value={data.id}>{data.name}</option>
      )}
         </select>
         <span>Please choose Deduction</span>
         <p className="textBorder">OR CREATE A SPECIFIC TRANSACTION</p>
          
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
          <input type="number"   placeholder="value"   onChange={onChangeInt}  onBlur={handleFocus}/>
          <span> Please enter amount</span>
          </div>
          
            </div>
          <div  className="footer">
            <button className="shiftBtn" type="submit" >
              Add new deduction
            </button>
           
          </div>
          </form>
        </div>}
      </div>
    );
  }
  
  export default TransactionModal;