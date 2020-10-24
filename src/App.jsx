import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthService";
import LoggedInRoute from "./components/LoggedInRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Room from "./pages/Room";

// routing (react-router-dom)
// URLのエンドイポイント(/xxx)によって表示ページを変える

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
