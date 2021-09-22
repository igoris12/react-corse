import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

export const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log('Start');
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        console.log(response.data);
        setTodos(response.data);
      });
  }, []);

  const sniuriukas = (id) => {
    let todosCopy = todos.slice();
    for (let i = 0; i < todosCopy.length; i++) {
      if (todosCopy[i].id === id) {
        todosCopy[i].completed = !todosCopy[i].completed;
        console.log(todosCopy[i].completed);
        break;
      }
    }
    setTodos(todosCopy);
  };

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <Todo key={todo.id} data={todo} sniuriukas={sniuriukas}></Todo>
      ))}
    </div>
  );
};

export default App;
