import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  useEffect(() => {
    console.log('start');
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        console.log(response.data);
      });
  }, []);

  return <div>HEllo</div>;
};

export default App;
