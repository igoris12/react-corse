import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 3,
    };
  }

  handleCount = () => {
    const count = this.state.count + 3;
    this.setState({
      count: count,
    });
    localStorage.setItem('count', JSON.stringify(count));
  };

  componentDidMount() {
    const count = JSON.parse(localStorage.getItem('count'));
    if (null == count) {
      return;
    }

    this.setState({
      count: count,
    });
  }

  render() {
    return (
      <div>
        <Button count={this.state.count} countHandler={this.handleCount} />
      </div>
    );
  }
}
