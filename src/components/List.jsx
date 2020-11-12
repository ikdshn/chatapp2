import React, { useEffect, useState } from "react";
import Item from "./Item";
import { db } from "../config/firebase";

const List = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMessages(data);
      });
  }, []);
  return (
    <>
      {messages.map((message) => {
        return <Item key={message.id} message={message} />;
      })}
    </>
  );
};

export default List;
