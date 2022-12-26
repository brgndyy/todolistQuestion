import React from 'react'
import classes from './TodoInsert.module.css'
import { useContext, useRef  } from 'react'
import TodoContext from '../store/todo-context'

function TodoInsert() {

  const todoContext = useContext(TodoContext);
  const ref = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const todo = ref.current.value

    if(todo.trim() !== ''){
      todoContext.addTodo(todo);
    };
  
    ref.current.value = '';
  }

  

  return (
    <div className={classes.insert_container}>
    <form className={classes.add_form} onSubmit ={formSubmitHandler}>
    <input ref={ref}  type={'text'} placeholder ="Add Todo">
    </input>
    <button className={classes.AddBtn}>Add</button>
    </form>
    </div>
  )
}

export default TodoInsert