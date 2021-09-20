import React from 'react';
import Animal from './Animal';
import getId from '../Shared/getId';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      input: '',
    };
  }

  inputHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  getType = () => {
    if (Math.random() < 0.5) {
      return 'right';
    }
    return 'left';
  };

  addAnimal = (a) => {
    const animal = {
      type: this.getType(),
      id: getId(),
      color: this.state.input,
      animal: a,
    };
    const animals = this.state.animals.slice();
    animals.push(animal);
    this.setState({
      animals: animals,
    });
    localStorage.setItem('allAnimals', JSON.stringify(animals));
  };

  deleteAnimal = (id) => {
    const animals = this.state.animals.slice();

    for (let i = 0; i < animals.length; i++) {
      if (animals[i].id == id) {
        animals.splice(i, 1);
        break;
      }
    }
    this.setState({
      animals: animals,
    });
    localStorage.setItem('allAnimals', JSON.stringify(animals));
  };

  editAnimal = (id, color) => {
    const animals = this.state.animals.slice();
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].id == id) {
        animals[i].color = color;
        break;
      }
    }
    this.setState({
      animals: animals,
    });
    localStorage.setItem('allAnimals', JSON.stringify(animals));
  };

  componentDidMount() {
    const animals = JSON.parse(localStorage.getItem('allAnimals'));
    if (null == animals) {
      return;
    }
    this.setState({
      animals: animals,
    });
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.input}
          onChange={this.inputHandler}
        />
        <button className="but" onClick={() => this.addAnimal('cow')}>
          Cow
        </button>
        <button className="but" onClick={() => this.addAnimal('sheep')}>
          Sheep
        </button>
        <div className="animalContaoner">
          {this.state.animals.map((a) => (
            <Animal
              id={a.id}
              key={a.id}
              color={a.color}
              animal={a.animal}
              type={a.type}
              delete={this.deleteAnimal}
              editColor={this.editAnimal}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
