import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
const addTask = (e) => {
    // code under prevents page from refreshing when entering task//
    e.preventDefault()
    let task = {
        "id":Math.floor(Date.now()/1000),
        "label":e.target.todo.value,
    }
    //v--including whats there while adding the new otherwise would replace//
    setTodos([...todos,task])
    e.target.todo.value = ""
}
const deleteTask = (id) => {
let filtered = todos.filter(todo => todo.id !== id)
setTodos([...filtered])
}

    return (
       <div className="todo-container">
        <h1>Todos</h1>
        <div className="todoAdd">
            <form className="todo-form" onSubmit={addTask}>
                <input type="text" name="todo" placeholder={todos[0]?"Add another todo.":"No todos, add todos"}></input>
            </form>
        </div>
        <ul className="task-list">
        {todos.map((todo, i) => {
            return (
                <li key={i} className="task-item">
                    <p>{todo.label}</p>
                    <button onClick={() => deleteTask(todo.id)}>X</button>
                </li>
            )
        })}
        </ul>
       </div>
    )
}
export default TodoList;