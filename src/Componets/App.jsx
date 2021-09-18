import React from 'react';
import Animal from './Animal';

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

  addAnimal = (a) => {
    const animal = { color: this.state.input, animal: a };
    const animals = this.state.animals;
    animals.push(animal);
    this.setState = {
      animals: animals,
    };
  };

  render() {
    return (
      <>
        {this.state.animals.map((e) => (
          <Animal />
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
