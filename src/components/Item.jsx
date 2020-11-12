import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  message: {
    padding: "15px",
    margin: "15px",
  },
});

const Item = ({ message }) => {
  const classes = useStyles();
  return (
    <Card key={message.id} className={classes.message}>
      <Typography>user: {message.username}</Typography>
      <Typography>{message.content}</Typography>
    </Card>
  );
};

export default Item;
