import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button className="but" onClick={this.props.countHandler}>
        {this.props.count}X
      </button>
    );
  }
}
