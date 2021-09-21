import React from 'react';
import AnimalF from './AnimalF';
import { useState, useEffect } from 'react';
import getId from '../Shared/getId';

function App() {
  const [animals, setAnimals] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addAnimal = (a) => {
    const animal = {
      farm1: true,
      id: getId(),
      color: input,
      animal: a,
    };
    const animalsCopy = animals.slice();
    animalsCopy.push(animal);
    setAnimals(animalsCopy);
    localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
  };

  const deleteAnimal = (id) => {
    const animalsCopy = animals.slice();

    for (let i = 0; i < animalsCopy.length; i++) {
      if (animalsCopy[i].id == id) {
        animalsCopy.splice(i, 1);
        break;
      }
    }
    setAnimals(animalsCopy);
    localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
  };

  const editAnimal = (id, color) => {
    const animalsCopy = animals.slice();
    for (let i = 0; i < animalsCopy.length; i++) {
      if (animalsCopy[i].id == id) {
        animalsCopy[i].color = color;
        break;
      }
    }
    setAnimals(animalsCopy);
    localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
  };

  const editType = (id) => {
    const animalsCopy = animals.slice();
    for (let i = 0; i < animalsCopy.length; i++) {
      if (animalsCopy[i].id == id) {
        animalsCopy[i].farm1 = !animalsCopy[i].farm1;
        break;
      }
    }
    setAnimals(animalsCopy);
    localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
  };

  useEffect(() => {
    const animalsCopy = JSON.parse(localStorage.getItem('allAnimals'));
    if (null == animalsCopy) {
      return;
    }
    setAnimals(animalsCopy);
  }, []);

  return (
    <>
      <input type="text" value={input} onChange={inputHandler} />
      <button className="but" onClick={() => addAnimal('cow')}>
        Cow
      </button>
      <button className="but" onClick={() => addAnimal('sheep')}>
        Sheep
      </button>
      <div className="feald">
        <div className="animalContaoner">
          <h1>Farm Nr. 1</h1>

          {animals.map((a) => (
            <AnimalF
              id={a.id}
              key={a.id}
              color={a.color}
              animal={a.animal}
              farm1={a.farm1}
              farmNumber={1}
              delete={deleteAnimal}
              editColor={editAnimal}
              changeType={editType}
            />
          ))}
        </div>
        <div className="animalContaoner">
          <h1>Farm Nr. 2</h1>
          {animals.map((a) => (
            <AnimalF
              id={a.id}
              key={a.id}
              color={a.color}
              animal={a.animal}
              farm1={a.farm1}
              farmNumber={2}
              delete={deleteAnimal}
              editColor={editAnimal}
              changeType={editType}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
