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

  addAnimal = (a) => {
    const animal = { id: getId(), color: this.state.input, animal: a };
    const animals = this.state.animals.slice();
    animals.push(animal);
    this.setState({
      animals: animals,
    });
    localStorage.setItem('allAnimals', JSON.stringify(animals));
  };

  inputHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
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
        {this.state.animals.map((a) => (
          <Animal key={a.id} color={a.color} animal={a.animal} />
        ))}
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
      </>
    );
  }
}

export default App;
