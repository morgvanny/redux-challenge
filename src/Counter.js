// import React, { Component } from "react";

// export default class Counter extends Component {
//   state = { number: 0 };

//   increment = () => {
//     // dispatch action to increment
//     this.setState((state) => {
//       return { number: state.number + 1 };
//     });
//   };
//   decrement = () => {
//     // dispatch action to decrement
//     this.setState((state) => {
//       return { number: state.number - 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Number: {this.state.number /* change to use redux state */}</h1>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

import React from "react";
import { connect } from "react-redux";
class Counter extends React.Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: parseInt(e.target.value) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.set(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <h1>Number: {this.props.number}</h1>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.subtract}>-</button>
        <form onSubmit={this.handleSubmit}>
          <input
            name="number"
            type="number"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const add = () => {
  return { type: "ADD" };
};
const subtract = () => {
  return { type: "SUBTRACT" };
};

const set = (num) => {
  return { type: "SET", payload: num };
};

export default connect(
  (state) => {
    return { number: state.number };
  },
  { add, subtract, set }
)(Counter);
