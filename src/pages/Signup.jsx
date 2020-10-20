import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

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

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("ユーザー登録成功！", response);
      })
      .catch((error) => {
        console.error("ユーザー登録失敗...", error);
      });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h1 className={classes.title}>Signup Page</h1>
      <TextField
        label="ユーザー名"
        variant="filled"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="メールアドレス"
        variant="filled"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="パスワード"
        type="Password"
        variant="filled"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        登録
      </Button>
      <Link to="/login">すでにアカウントをお持ちの方</Link>
    </form>
  );
};

export default Signup;
