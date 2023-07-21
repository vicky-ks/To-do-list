import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ListCom from "./ListCom";

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="centre_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="enter values"
            value={item}
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val, index) => {
              return <ListCom text={val} key={index} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
