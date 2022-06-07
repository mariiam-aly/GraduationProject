
import"../styles/Login.css"

import logo from"../assets/LoginLogo.svg"
import ext from"../assets/Loginext.svg"
import React, { useRef, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { login } from '../Utils/api'
import { login2 } from '../Utils/api2'
import { AuthContext } from '../Context/auth'
import AxiosProvider2 from "../AxiosProvider2";
function Login(){

  let history = useHistory();
  const context = useContext(AuthContext)
  const nameref = useRef();
  const passref = useRef();

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

  async function handleSubmit(event) {
    event.preventDefault();
    const id = nameref.current.value;
    const password = passref.current.value;
    AxiosProvider2.post('/login', {
    id: id,
    password: password
  })
  .then(function (response) {
    console.log(response);
    context.login(response.data);
    history.push('/page');
  })
  .catch(function (error) {
    console.log(error);
  });}

    return(<div className="login">
        <div className="login1"> 
        <img src={logo} alt="BigCo Inc. logo"/>
        <img src={ext} className="ext" alt="BigCo Inc. logo"/>
        </div>
        <div className="login2">
        <div className="loginForm">
        <p className="p1">Login</p>
        <p className="p2">Welcome to Human Resource <span style={{fontWeight:"bold"}}>Paperwork Dashboard.</span></p>
    
        <form onSubmit={handleSubmit}>
        <label htmlFor="id"></label>
        <input className='input' type="number" name="id" placeholder="Username" ref={nameref}/>
        <label htmlFor="password"></label>
        <input className='input' type="password" name="password" placeholder="Password" ref={passref}/>
        <button className="forget">Forgot Password?</button>
        <a href="/page"><button className='loginbtn'>Login</button></a>
        </form>
        </div>
        </div>
        </div>)
}

export default Login;