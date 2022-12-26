import { createContext } from "react";



const TodoContext = createContext({
    totalTodoNum : 0,
    todos : [],
    addTodo(todo){},
    removeTodo(id){},
    toggleTodo(id){},
})

export default TodoContext;