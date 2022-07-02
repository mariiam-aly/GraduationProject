
import"../styles/Login.css"

import logo from"../assets/LoginLogo.svg"
import ext from"../assets/Loginext.svg"
import React, { useRef, useContext,useState } from 'react'
import { useHistory } from "react-router-dom";
import { login } from '../Utils/api'
import { login2 } from '../Utils/api2'
import { AuthContext } from '../Context/auth'
import AxiosProvider2 from "../AxiosProvider2";
import { Formik, useFormik } from 'formik';

import * as Yup from 'yup';
function Login(){

  let history = useHistory();
  const context = useContext(AuthContext)
  const nameref = useRef();
  const passref = useRef();
const [errorMsg,setErrorMsg]=useState(false);

  const validate = Yup.object({
    id: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    password: Yup.string().min(9, 'Password must be at least 9 charaters').required('Password is required'),
 
  })
  
const formik= useFormik({
      initialValues: {
      
        id: "",
        password: "",
     
      },
      validationSchema: validate,
      onSubmit,
    });
    console.log(formik.errors);
  /*async function handleSubmit(event) {
    event.preventDefault();
    const id = nameref.current.value;
    const password = passref.current.value;
    console.log(id, password);
    const requestBody = {
      id,
      password
    }
    try {
      const res = await login2(requestBody)
      const userData = res.data
      context.login(userData)
      history.push('/page')
    }
    catch (err) {
      console.log(err)
    }



  }*/

  async function onSubmit(event) {

    const id = nameref.current.value;
    const password = passref.current.value;
    AxiosProvider2.post('/login', {
    id: id,
    password: password
  })
  .then(function (response) {
    console.log(response);
    localStorage.setItem("role",JSON.stringify(response.data.user.roles));
    context.login(response.data);
    if(response.data.user.roles==="Accountant"){
    history.push('/missions');}
    else{

      history.push('/dashboard');
    }
  })
  .catch(function (error) {
    console.log(error.message);
    setErrorMsg(true);
  });}

    return(
      
      
      
    
      <div className="login">
        <div className="login1"> 
        <img src={logo} alt="BigCo Inc. logo"/>
        <img src={ext} className="ext" alt="BigCo Inc. logo"/>
        </div>
        <div className="login2">
        <div className="loginForm">
        <p className="p1">Login</p>
        <p className="p2">Welcome to Human Resource <span style={{fontWeight:"bold"}}>Paperwork Dashboard.</span></p>
    
        <form style={{width:"35vw"}} onSubmit={formik.handleSubmit}>
        <label htmlFor="id"></label>
        <input className={formik.errors.id && formik.touched.id || errorMsg?'input invalid':'input'} type="text" name="id" placeholder="User Id" value={formik.values.id} ref={nameref} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <p className="invalidSpan">{formik.errors.id && formik.touched.id?formik.errors.id:null}</p>
       
        <label htmlFor="password"></label>
        <input  className={formik.errors.password && formik.touched.password || errorMsg?'input invalid':'input'} type="password" name="password" placeholder="Password" value={formik.values.password} ref={passref} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <p className="invalidSpan">{formik.errors.password && formik.touched.password?formik.errors.password:null}</p>
        
        <button className="forget">Forgot Password?</button>
        <p className="invalidSpan">{errorMsg?"Either the user id or password are invalid":null}</p>

        <a href="/page"><button type="submit" className='loginbtn'>Login</button></a>
        </form>
        </div>
        </div>
        </div>)
}

export default Login;