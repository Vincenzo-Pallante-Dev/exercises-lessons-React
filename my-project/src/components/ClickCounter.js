import React from "react";
import { Button } from "react-bootstrap";

export class ClickCounter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  handleCounterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementBy,
      };
    });
  };

  handleCounterDecrement = () => {
    this.setState((state) => {
      return {
        count:
          state.count - this.props.incrementBy >= 0
            ? state.count - this.props.incrementBy
            : (state.count = 0),
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <Button variant="success" onClick={this.handleCounterIncrement}>
          Increment
        </Button>{" "}
        <Button variant="danger" onClick={this.handleCounterDecrement}>
          Danger
        </Button>{" "}
      </div>
    );
  }
}

ClickCounter.defaultProps = {
  initialValue: 0,
  incrementBy: 1,
};
