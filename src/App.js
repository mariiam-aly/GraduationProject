import React from "react";
import './App.css'
import { AuthProvider } from './Context/auth';
import AuthRoute from './Utils/AuthRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Pages/Login"
import Nav from "./Components/Nav"
import Page from "./Pages/Page"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import Page4 from "./Pages/Page4"
import AddUser from "./Pages/AddUser"
import Config from "./Pages/Config"
import Shift from "./Pages/Shift"
import Department from "./Pages/Department"
import JobTitle from "./Pages/JobTitle"
function App() {
    
return(
  /* identical to box height, or 175% 
  <div className="container">
<Nav/>
<div className="pages">
pages
</div>
  </div>*/

  <AuthProvider>
<Router>
<Switch>
<Route exact path="/" component={Login} />

       <div className="container1">
          <Nav/>
          
          <AuthRoute exact path="/page" component={Page}/>
          <AuthRoute exact path="/page2" component={Page2}/>
          <AuthRoute exact path="/page3" component={Page3}/>
          <AuthRoute exact path="/page4" component={Page4}/>
          <AuthRoute exact path="/addUser" component={AddUser}/>
          <AuthRoute exact path="/config" component={Config}/>
          <AuthRoute exact path="/shift" component={Shift}/>
          <AuthRoute exact path="/department" component={Department}/>
          <AuthRoute exact path="/jobtitle" component={JobTitle}/>
          </div>
          </Switch>
        </Router>
        
        </AuthProvider>

);
}

export default App;
