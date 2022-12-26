import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoListContainer.module.css";
import TodoContext from "../store/todo-context";
import { useContext } from "react";
import DarkModeContext from "../store/darkMode-context";
import ListModeContext from "../store/listmode-context";

function TodoListContainer() {
  const todoContext = useContext(TodoContext);
  const darkContext = useContext(DarkModeContext);
  const listContext = useContext(ListModeContext);

  const removeTodoHandler = (id) => {
    todoContext.removeTodo(id);
  };

  const toggleTodoHandler = (id) => {
    todoContext.toggleTodo(id);
  };

  return (
    <div
      className={
        darkContext.dark
          ? `${classes.TodoListContainer} ${classes.dark}`
          : classes.TodoListContainer
      }
    >
      <ul>
        {todoContext.todos.map((todo) => {
          if (listContext.listMode === "Active" && todo.checked === false) {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                checked={todo.checked}
                removeTodoHandler={() => {
                  removeTodoHandler(todo.id);
                }}
                toggleTodoHandler={() => {
                  toggleTodoHandler(todo.id);
                }}
              />
            );
          }

          if (listContext.listMode === "Completed" && todo.checked === true) {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                checked={todo.checked}
                removeTodoHandler={() => {
                  removeTodoHandler(todo.id);
                }}
                toggleTodoHandler={() => {
                  toggleTodoHandler(todo.id);
                }}
              />
            );
          }

          if (listContext.listMode === "All") {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                checked={todo.checked}
                removeTodoHandler={() => {
                  removeTodoHandler(todo.id);
                }}
                toggleTodoHandler={() => {
                  toggleTodoHandler(todo.id);
                }}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default TodoListContainer;
