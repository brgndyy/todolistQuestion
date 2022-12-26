import React from "react";
import classes from "./TodoTemplate.module.css";
import { useContext } from "react";
import DarkModeContext from "../store/darkMode-context";

function TodoTemplate(props) {
  const darkContext = useContext(DarkModeContext);

  return (
    <div
      className={
        darkContext.dark ? `${classes.TodoTemplate} ${classes.dark}` : classes.TodoTemplate
      }
    >
      {props.children}
    </div>
  );
}

export default TodoTemplate;
