import React, { useState, useContext } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { AuthContext } from "../context/AuthService";

import { auth } from "../config/firebase";

const useStyles = makeStyles({
  title: {
    color: "#222222",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "350px",
    height: "400px",
    margin: "0 auto",
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.error("ログイン失敗...", error);
      });
  };

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h1 className={classes.title}>Login Page</h1>
      <TextField
        label="メールアドレス"
        variant="filled"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="パスワード"
        variant="filled"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="secondary">
        ログイン
      </Button>
      <Link to="/Signup">アカウントをお持ちでない方</Link>
    </form>
  );
};

export default Login;
