import React, { Component } from "react";

export default class Counter extends Component {
  state = { number: 0 };

  increment = () => {
    // dispatch action to increment
    this.setState((state) => {
      return { number: state.number + 1 };
    });
  };
  decrement = () => {
    // dispatch action to decrement
    this.setState((state) => {
      return { number: state.number - 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Number: {this.state.number /* change to use redux state */}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
