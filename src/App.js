import React, { useState } from 'react';

const TodoList = () => {
 const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState('');
  const addTodo = () => {
    let newArray = []
    for (let i = 0; i < todos.length; i++)newArray.push(todos[i])
    newArray.push(inputValue);
    setTodos(newArray)
    setInputValue('')
  }
  
 return (
 <div className="todo-container">
 <h1>Todo List</h1>
 <div className="todo-input-container">
      <input type="text" value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      </div> 

      </div>
 );
 
};
export default TodoList