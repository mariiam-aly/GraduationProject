import React, { useContext,useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { validate } from '../Utils/api2'
import { AuthContext } from '../Context/auth';

function AuthRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        validate(user.token).then(response => {
        localStorage.setItem("valid",JSON.stringify(response));
       
       
        });},[])

    return (
        <Route
            {...rest}
            render={(props) =>
                JSON.parse(localStorage.getItem("valid")) ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
}

export default AuthRoute;