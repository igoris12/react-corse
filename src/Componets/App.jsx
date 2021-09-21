import React from 'react';
import AnimalF from './AnimalF';
import { useState } from 'react';
import getId from '../Shared/getId';

function App() {
  const [animals, setAnimals] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const getType = () => {
    if (Math.random() < 0.5) {
      return 'right';
    }
    return 'left';
  };

  const addAnimal = (a) => {
    const animal = {
      type: getType(),
      id: getId(),
      color: input,
      animal: a,
    };
    const animalsCopy = animals.slice();
    animalsCopy.push(animal);
    setAnimals(animalsCopy);
    // localStorage.setItem('allAnimals', JSON.stringify(animals));
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
    // localStorage.setItem('allAnimals', JSON.stringify(animals));
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
    // localStorage.setItem('allAnimals', JSON.stringify(animals));
  };

  const editType = (id) => {
    const animalsCopy = animals.slice();
    for (let i = 0; i < animalsCopy.length; i++) {
      if (animalsCopy[i].id == id) {
        if (animalsCopy[i].type == 'right') {
          animalsCopy[i].type = 'left';
          break;
        }
        animalsCopy[i].type = 'right';
        break;
      }
    }
    setAnimals(animalsCopy);
    // localStorage.setItem('allAnimals', JSON.stringify(animals));
  };

  //  componentDidMount() {
  //   const animals = JSON.parse(localStorage.getItem('allAnimals'));
  //   if (null == animals) {
  //     return;
  //   }
  //   this.setState({
  //     animals: animals,
  //   });
  // }

  return (
    <>
      <input type="text" value={input} onChange={inputHandler} />
      <button className="but" onClick={() => addAnimal('cow')}>
        Cow
      </button>
      <button className="but" onClick={() => addAnimal('sheep')}>
        Sheep
      </button>
      <div className="animalContaoner">
        {animals.map((a) => (
          <AnimalF
            id={a.id}
            key={a.id}
            color={a.color}
            animal={a.animal}
            type={a.type}
            delete={deleteAnimal}
            editColor={editAnimal}
            changeType={editType}
          />
        ))}
      </div>
    </>
  );
}

export default App;
