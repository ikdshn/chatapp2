import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthService";

// componentとして受け取った値をComponentという名前に変更
const LoggedInRoute = ({ component: Component, ...otherProps }) => {
  const user = useContext(AuthContext);
  // userがログインしていればRoomへ、ログインしていなければLoginへ遷移する
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
