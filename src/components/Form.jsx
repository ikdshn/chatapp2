import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { db } from "../config/firebase";
import { AuthContext } from "../context/AuthService";

const Form = () => {
  const [text, setText] = useState("");
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert("文字を入力してください");
      return;
    }
    db.collection("messages")
      .add({
        content: text,
        username: user.displayName,
        createdAt: new Date(),
      })
      .then(() => {
        setText("");
      });
  };

  return (
    <>
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
    </>
  );
};

export default Form;
