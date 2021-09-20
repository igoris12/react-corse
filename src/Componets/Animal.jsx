import React, { Component } from 'react';

export class Animal extends Component {
  constructor() {
    super();
    this.state = {
      editInput: '',
    };
  }

  editInputHandler = (e) => {
    this.setState({
      editInput: e.target.value,
    });
  };

  render() {
    return (
      <div
        className="animal"
        style={{
          backgroundColor: this.props.color,
          borderRadius: this.props.animal == 'cow' ? '50%' : '5px',
          color: this.props.type == 'right' ? 'wheat' : 'mediumspringgreen',
        }}
      >
        <div>
          <span>{this.props.color}</span>
        </div>
        <div className="insideForm">
          <input
            type="text"
            value={this.state.editInput}
            onChange={this.editInputHandler}
          />
          <button
            className="but"
            onClick={() =>
              this.props.editColor(this.props.id, this.state.editInput)
            }
          >
            Edit
          </button>

          <button
            className="but"
            onClick={() => this.props.delete(this.props.id)}
          >
            Delete
          </button>
          <button
            className="but"
            onClick={() => this.props.changeType(this.props.id)}
          >
            change type
          </button>
        </div>
      </div>
    );
  }
}

export default Animal;
