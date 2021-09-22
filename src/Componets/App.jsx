import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

export const App = () => {
  const [books, setTodos] = useState([]);
  useEffect(() => {
    console.log('Start');
    axios.get('https://in3.dev/knygos/').then(function (response) {
      console.log(response.data);
      setTodos(response.data);
    });
  }, []);

  const buy = (id) => {
    let booksCopy = books.slice();
    for (let i = 0; i < booksCopy.length; i++) {
      if (booksCopy[i].id === id) {
        booksCopy.splice(i, 1);

        break;
      }
    }
    console.log(booksCopy);
    setTodos(booksCopy);
  };

  return (
    <div className="books-container">
      {books.map((books) => (
        <Book key={books.id} data={books} buy={buy}></Book>
      ))}
    </div>
  );
};

export default App;
