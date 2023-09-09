import React from "react";

export class CounterButton extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  handleCounterIncrement = (event) => {
    console.log(event);
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementBy,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleCounterIncrement}>Increment</button>
      </div>
    );
  }
}

CounterButton.defaultProps = {
  initialValue: 0,
  incrementBy: 1,
};
