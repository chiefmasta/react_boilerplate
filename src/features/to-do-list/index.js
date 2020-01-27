import React, { useState, useRef, useEffect } from "react";
import AddToDo from "./component/AddTask";
import TodoList from "./component/List";
import TodoContext from "./context";

export default () => {
  const [list, setList] = useState([]);

  return (
    <TodoContext>
      <AddToDo list={list} setList={setList} />
      <TodoList list={list} />
    </TodoContext>
  );
};
