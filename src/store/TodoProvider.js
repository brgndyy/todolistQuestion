import React, { useReducer } from "react";
import TodoContext from "./todo-context";


const initialTodds = {
  totalTodoNum: 5,
  todos: [
    {
      id: Math.floor(Math.random() * 10000),
      title: "공부하기",
      checked: true,
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: "밥먹기",
      checked: true,
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: "강의보기",
      checked: false,
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: "카페가기",
      checked: false,
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: "청소하기",
      checked: false,
    },
  ],
};

const toDoReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      title: action.todo,
      checked: false,
    };

    return {
      totalTodoNum: state.totalTodoNum + 1,
      todos: [...state.todos, newTodo],
    };
  }

  if (action.type === "REMOVE") {
    return {
      totalTodoNum: state.totalTodoNum - 1,
      todos: state.todos.filter((todo) => todo.id !== action.id),
    };
  }

  if (action.type === "TOGGLE") {
    return {
      totalTodoNum: state.totalTodoNum,
      todos: state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    };
  }

  return initialTodds;
};


function TodoProvider(props) {
  const [todoState, todoDispatch] = useReducer(toDoReducer, initialTodds);


  const addToDoDispatch = (todo) => {
    todoDispatch({ type: "ADD", todo: todo });
  };

  const removeToDoDispatch = (id) => {
    todoDispatch({ type: "REMOVE", id: id });
  };

  const toggleToDoDispatch = (id) => {
    todoDispatch({ type: "TOGGLE", id: id });
  };

  const todoContext = {
    todos: todoState.todos,
    totalTodoNum: todoState.totalTodoNum,
    addTodo: addToDoDispatch,
    removeTodo: removeToDoDispatch,
    toggleTodo: toggleToDoDispatch,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
