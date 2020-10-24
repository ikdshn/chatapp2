import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthService";

const LoggedInRoute = ({ component: Component, ...otherProps }) => {
  const user = useContext(AuthContext);
  console.log(otherProps);

  return (
    <Route
      {...otherProps}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default LoggedInRoute;
