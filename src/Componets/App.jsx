import React from 'react';
import AnimalF from './AnimalF';
import { useState } from 'react';

function App() {
  const [animals, setAnimals] = useState([]);

  return (
    <div>
      <input type="text" />
      <button>Cow</button>
      <button>Sheep</button>
      <div>
        <AnimalF />
      </div>
    </div>
  );
}

export default App;
