import React from "react";
import TodoForm from "../todo_list/todo_form"
// import TodoListContainer from "./todo_list_container";
// export default () => <h3>todo list goes here! </h3>

const todoList = ({todos = [], receiveTodo}) => {
  return (
    <div>
      <ul className="list">
        <h1>Todo List</h1>
        {todos.map(todo => (
            <li className="todo-item" key={todo.id}>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
            </li>
         ))}
      </ul>
      < TodoForm receiveTodo={receiveTodo}/>
    </div>
  )
}
export default todoList;