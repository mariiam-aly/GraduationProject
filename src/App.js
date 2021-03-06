import React,{useEffect, useState} from "react";
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
import EditUser from "./Pages/EditUser";
import Salary from "./Pages/Salary";
import EditConfig from "./Pages/EditConfig";
import Vacations from "./Pages/Vacations";
import AttendanceSheet from "./Pages/AttendanceSheet";
import { EditoContext } from "./Context/EditoContext";
import Deductions from "./Pages/Deductions";
import SingleUserTransaction from "./Pages/SingleUserTransaction";
import Dashboard from "./Pages/Dashboard";
function App() {
    const [userId,setUserId]=useState("test");
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
          <EditoContext.Provider value={{userId,setUserId}}>
          <AuthRoute exact path="/Userlist" component={Page}/>
          <AuthRoute exact path="/editUser/:id" component={EditUser}/>
          </EditoContext.Provider>
          <AuthRoute exact path="/missions" component={Page2}/>
          <AuthRoute exact path="/requests" component={Page3}/>
          <AuthRoute exact path="/requests-approve" component={Page4}/>
          <AuthRoute exact path="/addUser" component={AddUser}/>
          <AuthRoute exact path="/config" component={Config}/>
          <AuthRoute exact path="/editconfig" component={EditConfig}/>
          <AuthRoute exact path="/shift" component={Shift}/>
          <AuthRoute exact path="/attendance" component={AttendanceSheet}/>
          <AuthRoute exact path="/department" component={Department}/>
          <AuthRoute exact path="/vacation" component={Vacations}/>
          <AuthRoute exact path="/jobtitle" component={JobTitle}/>
          <AuthRoute exact path="/salary" component={Salary}/>
          <AuthRoute exact path="/deductions" component={Deductions}/>
          <AuthRoute exact path="/dashboard" component={Dashboard}/>
          <AuthRoute exact path="/transaction/:id/:userId" component={SingleUserTransaction}/>
          </div>
          </Switch>
        </Router>
        
        </AuthProvider>

);
}

export default App;
