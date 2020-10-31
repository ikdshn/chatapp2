import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { AuthContext } from "../context/AuthService";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  message: {
    padding: "15px",
    margin: "15px",
  },
});

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const user = useContext(AuthContext);
  const classes = useStyles();
  const signout = () => {
    auth.signOut();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      content: text,
      username: user.displayName,
      createdAt: new Date(),
    });
    setText("");
  };

  useEffect(() => {
    db.collection("messages").onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setMessages(data);
    });
  }, []);

  return (
    <>
      <h1>Room</h1>
      {messages.map((message) => {
        return (
          <Card key={message.id} className={classes.message}>
            <Typography>user: {message.username}</Typography>
            <Typography>{message.content}</Typography>
          </Card>
        );
      })}
      <form onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          size="small"
          placeholder="メッセージを入力"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary">
          送信
        </Button>
      </form>
      <Button onClick={signout} variant="contained">
        ログアウト
      </Button>
    </>
  );
};

export default Room;
