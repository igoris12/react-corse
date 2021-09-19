import React, { Component } from 'react';

export class Animal extends Component {
  constructor() {
    super();
    this.state = {
      editInput: '',
    };
  }
  render() {
    return (
      <div
        className="animal"
        style={{
          backgroundColor: this.props.color,
          borderRadius: this.props.animal == 'cow' ? '50%' : '5px',
        }}
      >
        <div>
          <span>{this.props.color}</span>
        </div>
        <div className="insideForm">
          <input type="text" />
          <button className="but">Edit</button>
          <button className="but">Delete</button>
        </div>
      </div>
    );
  }
}

export default Animal;
