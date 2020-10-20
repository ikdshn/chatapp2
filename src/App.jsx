import React from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Room from "./pages/Room";

// routing (react-router-dom)
// URLのエンドイポイント(/xxx)によって表示ページを変える

const App = () => {
  return (
    <>
      <Login />
      <Signup />
      <Room />
    </>
  );
};

export default App;
