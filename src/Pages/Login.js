
import"../styles/Login.css"

import logo from"../assets/LoginLogo.svg"
import ext from"../assets/Loginext.svg"
import React, { useRef, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { login } from '../Utils/api'
import { AuthContext } from '../Context/auth'
function Login(){

  let history = useHistory();
  const context = useContext(AuthContext)
  const nameref = useRef();
  const passref = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    const email = nameref.current.value;
    const password = passref.current.value;
    console.log(email, password);
    const requestBody = {
      email,
      password
    }
    try {
      const res = await login(requestBody)
      const userData = res.data
      context.login(userData)
      history.push('/page')
    }
    catch (err) {
      console.log(err)
    }



  }

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
        <label htmlFor="email"></label>
        <input className='input' type="text" name="email" placeholder="Username" ref={nameref}/>
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