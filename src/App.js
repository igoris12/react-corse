
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'




function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function addTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTods => {
      return [...prevTods, { id: uuidv4(), name: name, complete: false }]
    })

  }


  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={addTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
