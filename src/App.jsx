import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthService";

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
          <Route exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
