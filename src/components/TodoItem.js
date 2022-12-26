import React from "react";
import classes from "./TodoItem.module.css";
import { MdOutlineCheckBox } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

function TodoItem(props) {
  return (
    <div className={classes.todoItem}>
      <div className={classes.toDo}>
        <div className={classes.checkBtn}>
          {props.checked ? (
            <MdOutlineCheckBox onClick={props.toggleTodoHandler} />
          ) : (
            <RiCheckboxBlankLine onClick={props.toggleTodoHandler} />
          )}
        </div>
        <li className={props.checked ? classes.completed_todo : null}>
          {props.title}
        </li>
      </div>
      <div className={classes.deleteBtn}>
        <AiOutlineDelete onClick={props.removeTodoHandler} />
      </div>
    </div>
  );
}

export default TodoItem;
